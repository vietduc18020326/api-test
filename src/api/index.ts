import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import emojis from "./emojis";
import versions from "./version";
import errors from "./error";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/versions", versions);
router.use("/errors", errors);

export default router;
