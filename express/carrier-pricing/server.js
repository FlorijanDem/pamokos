const express = require("express");
const app = express();
const {sql, testConnection} = require("./dbConnection")
testConnection()

require("dotenv").config();
const port = process.env.PORT;
// Need API key for operate
const OpenCageApi = process.env.OPEN_CAGE_API;

const carrier_data = require("./carrier-data.json");

const vehicles = [
  { type: "bicycle", increase: 0.1 },
  { type: "motorbike", increase: 0.15 },
  { type: "parcel_car", increase: 0.2 },
  { type: "small_van", increase: 0.3 },
  { type: "large_van", increase: 0.4 },
];
app.use(express.json());

app.post("/carier", async (req, res) => {
  const { pickup_postcode, delivery_postcode } = req.body;

  function toRad(degree) {
    return (degree * Math.PI) / 180;
  }

  function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const result = R * c; // Distance in km
    return result;
  }

  async function getCoordinates(postcode) {
    const apiKey = OpenCageApi;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${postcode}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results[0]) {
      const { lat, lng } = data.results[0].geometry;
      return { lat, lng };
    } else {
      throw new Error(`Unable to get coordinates for postcode: ${postcode}`);
    }
  }

  try {
    const pickupCoordinates = await getCoordinates(pickup_postcode);
    const deliveryCoordinates = await getCoordinates(delivery_postcode);

    const distance = haversine(
      pickupCoordinates.lat,
      pickupCoordinates.lng,
      deliveryCoordinates.lat,
      deliveryCoordinates.lng
    );
    const price = distance * 0.2;
    res.json({
      pickup_postcode,
      delivery_postcode,
      distance: distance.toFixed(2),
      price: price.toFixed(2),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to calculate the distance" });
  }
});

app.post("/carier/vehicle", async (req, res) => {
  const { pickup_postcode, delivery_postcode, vehicle } = req.body;

  function toRad(degree) {
    return (degree * Math.PI) / 180;
  }

  function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const result = R * c; // Distance in km
    return result;
  }

  async function getCoordinates(postcode) {
    const apiKey = OpenCageApi;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${postcode}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results[0]) {
      const { lat, lng } = data.results[0].geometry;
      return { lat, lng };
    } else {
      throw new Error(`Unable to get coordinates for postcode: ${postcode}`);
    }
  }

  try {
    const pickupCoordinates = await getCoordinates(pickup_postcode);
    const deliveryCoordinates = await getCoordinates(delivery_postcode);

    const distance = haversine(
      pickupCoordinates.lat,
      pickupCoordinates.lng,
      deliveryCoordinates.lat,
      deliveryCoordinates.lng
    );
    const vehicleData = vehicles.find((v) => v.type === vehicle);

    if (!vehicleData) {
      return res.status(400).json({ error: "Invalid vehicle type" });
    }

    const price = distance * 0.2 * (1 + vehicleData.increase);
    res.json({
      pickup_postcode,
      delivery_postcode,
      vehicle,
      price: price.toFixed(2),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to calculate the distance" });
  }
});

app.post("/carier/byname", async (req, res) => {
  const { pickup_postcode, delivery_postcode, carrier_name } = req.body;

  const carrierNameData = carrier_data.find(
    (v) => v.carrier_name === carrier_name
  );
  const basePrice = carrierNameData.base_price;
  try {
    res.json({
      pickup_postcode,
      delivery_postcode,
      carrier_name,
      price: basePrice,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to calculate the distance" });
  }
});

app.post("/carier/byvehicle", async (req, res) => {
  const { pickup_postcode, delivery_postcode, vehicle } = req.body;
  const priceList = [];

  carrier_data.forEach((carrier) => {
    // For each carrier, find the services that match the selected vehicle
    carrier.services.forEach(async (service) => {
      if (service.vehicles.includes(vehicle)) {
        // Calculate the price based on base price and markup
        const price = carrier.base_price + service.markup;

        priceList.push({
          service: carrier.carrier_name,
          price: price,
          delivery_time: service.delivery_time,
        });
        }
    });
  });

  priceList.sort((a, b) => a.price - b.price);
  try {
    res.json({
      pickup_postcode,
      delivery_postcode,
      vehicle,
      price_list: priceList,
    });
    for (let i = 0; i < priceList.length; i++) {
      try {
        await sql`
          INSERT INTO price_list (service, price, delivery_time)
          VALUES (${priceList[i].service}, ${priceList[i].price}, ${priceList[i].delivery_time})
        `
      } catch (err) {
        console.error(`Connection to database failed:`, err);
        throw err;
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to calculate the distance" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
