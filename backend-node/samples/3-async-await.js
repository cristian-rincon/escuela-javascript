const promiseFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("hello, friend");
      } else {
        reject(new Error("ERROR!!!"));
      }
    }, 1000);
  });

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log(msg);
  } catch (error) {
    console.error("error", error);
  }
}

asyncAwait();