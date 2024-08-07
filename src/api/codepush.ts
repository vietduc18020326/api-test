import express from "express";

const router = express.Router();

type VersionResponse = {
  version: string;
};

router.get<{}, VersionResponse>("/", (req, res) => {
  res.json({
    version: "5",
  });
});

export default router;
