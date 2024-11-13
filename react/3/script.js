async function fetchUserData(userId) {
  try {
    const url = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (url.status === 404) {
        throw new Error("User not found")
    }
    const data = await url.json();
    findedName = "User name:" + data.name;
    return findedName;
  } catch (error) {
    console.error(error);
  }
}

console.log(fetchUserData(1));