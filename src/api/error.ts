import express from "express";
import { getErrorModel } from "../models/Errors";

const router = express.Router();

router.post("/save", async (req, res, next) => {
  const RawError = getErrorModel(req.body?.version + "_Rework");
  const newError = new RawError(req.body);

  try {
    const savedError = await newError.save();
    res.status(200).json(savedError);
  } catch (err) {
    next(err);
  }
});

router.post("/teamspace", async (req, res, next) => {
  const RawError = getErrorModel(req.body?.version + "_Teamspace");
  const newError = new RawError(req.body);

  try {
    const savedError = await newError.save();
    res.status(200).json(savedError);
  } catch (err) {
    next(err);
  }
});

export default router;
