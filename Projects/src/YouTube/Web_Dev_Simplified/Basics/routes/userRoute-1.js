const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Users List Information!!");
});

router.get("/:id", (req, res) => {
  res.send(`Get Users with ID : ${req.params.id}`);
});

router.put(":/id", (req, res) => {
  res.send(`Put Users with ID : ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete Users with ID : ${req.params.id}`);
});

router.post("new-user", (req, res) => {
  res.send("New User Form!!");
});

module.exports = router;
