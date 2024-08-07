import express from "express";

const router = express.Router();

type VersionResponse = {
  prod: string;
  staging: string;
};

router.get<{}, VersionResponse>("/", (req, res) => {
  res.json({
    prod: "1",
    staging: "2",
  });
});

export default router;
