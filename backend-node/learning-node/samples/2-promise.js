const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("hello, friend");
    } else {
      reject(new Error("ERROR!!!"));
    }
  }, 2000);
});

promise
  .then((msg) => msg.toUpperCase())
  .then((msg) => console.log("message", msg))
  .catch((err) => console.error("error", err));
