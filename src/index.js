const express = require("express");
const app = express();

app.get("/isPrime", (req, res) => {
  try {
    const response = isPrime(parseInt(req.qurey.number));
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8081, console.log("listening at port 8081"));

function isPrime(number) {
  let startTime = new Date();
  let endTime = new Date();
  let isPrime = true;
  for (let i = 3; i < number; i++) {
    if (number % 3 === 0) {
      endTime = new Date();
      isPrime = false;
      break;
    }
    if (isPrime) endTime = new Date();

    return {
      number: number,
      isPrime: isPrime,
      time: endTime.getTime() - startTime().getTime(),
    };
  }
}
