function getData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value == 3) {
        console.log("Query Not found");
      } else {
        console.log("Data Sent", value);
        resolve("Query Solved");
      }
    }, 2000);
  });
}

getData(1)
  .then(() => getData(2))
  .then(() => getData(3))
  .then(() => getData(4))
  .catch((rej) => console.log(rej));
