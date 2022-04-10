const express = require("express");

const app = express();

const addition = (req, res) => {
  const first = parseInt(req.query.first);
  const second = parseInt(req.query.second);
  if ("first" in req.query && "second" in req.query) {
    return res.send(` ${first + second}`);
  }
  return res.status(400).end();
};

const multiplication = (req, res) => {
  const first = parseInt(req.params.first);
  console.log(first);
  const second = parseInt(req.params.second);

  if (isNaN(first) || isNaN(second)) {
    return res.status(400).json({ msg: "Not a number" });
  }

  return res.send(` ${first * second}`);
};

app.get("/numbers/add", addition);
app.get("/numbers/multiply/:first/:second", multiplication);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
