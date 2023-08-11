const express = require("express");
const router = express();

router.use(express.json());

router.get("/home", (req, res) => {
  res.send("page1");
});
