const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/next", (req, res) => {
    res.send("Hi! I'm Sraddha");
  });

app.get("/login",(req, res)=> {
    res.send("<h1> This is an backend node </h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
