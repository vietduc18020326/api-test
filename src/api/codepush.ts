import express from "express";

const router = express.Router();

type VersionResponse = {
  prod: string;
  staging: string;
  dev: string;
};

router.get<{}, VersionResponse>("/", (req, res) => {
  res.json({
    prod: "1",
    staging: "1",
    dev: "2",
  });
});

export default router;
