const express = require("express");
const app = express();
const port = 3002;
const os = require("os");
const si = require("systeminformation");

app.use(express.json());

app.put("/alpha", (req, res) => {
  // Get the data from the request body
  const { fruit, animal, "city-list": cityList } = req.body;

  res.json({
    animal: animal,
    "city-list": cityList,
    fruit: fruit,
  });
});

app.put("/flatten", (req, res) => {
  const { fruit, animal, "city-list": cityList } = req.body;

  res.json({
    fruit: fruit,
    animal: animal,
    "city-list": cityList.join(),
  });
});

app.get("/status", async (req, res) => {
  try {
    const cpuUsage = await si.currentLoad();
    const memoryInfo = await si.mem();
    const first = cpuUsage.currentLoad.toFixed(2);
    const second = ((memoryInfo.active / memoryInfo.total) * 100).toFixed(2)
    const healthStatus = {
      cpuusedpct: first,
      memusedpct: second,
    };
    res.json(healthStatus);
  } catch (error) {
    res.status(500).json({ error: "Fail" });
  }
});
app.listen(port);
