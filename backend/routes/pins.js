const router = require("express").Router();
const Pin = require("../models/Pin");

//create a pin
router.post("/", async (req, res) => {
  const newPin = new Pin(req.body);
  try {
    const savedPin = await newPin.save();
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).json(savedPin);
  } catch (err) {
    res.status(404).json(err)
    console.log(err)
  }
});

//get all pins
router.get("/", async (req, res) => {
  try {
    const Pins = await Pin.find();
    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json(Pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;