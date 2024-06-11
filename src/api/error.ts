import express from "express";
const RawError = require("../models/Errors");

const router = express.Router();

router.post("/save", async (req, res, next) => {
  const newError = new RawError(req.body);

  try {
    const savedError = await newError.save();
    res.status(200).json(savedError);
  } catch (err) {
    next(err);
  }
});

export default router;
