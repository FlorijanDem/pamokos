async function displayUserName(userId) {
  const userInfo = document.querySelector("#user-info");
  try {
    const url = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    // 404 mean what previously sended wrong reguest
    if (url.status === 404) {
      // with "trow" we make like a new error type
      throw new Error("User not found");
    }

    // Method "json()" parse database/rest-api to odject representation
    // of JSON data "make a JavaScript understendeble and easy to use"
    const data = await url.json();


    userInfo.textContent = data.name;
  } catch (error) {
    console.error(error);
  }
}

displayUserName(1);
