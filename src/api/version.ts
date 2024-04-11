import express from 'express';

const router = express.Router();

type VersionResponse = {
  version: string;
  name: string;
}[];

router.get<{}, VersionResponse>('/', (req, res) => {
  res.json([
    {
      version: '0.0.8',
      name: 'policy',
    }, {
      version: '0.0.9',
      name: 'booking',
    }, {
      version: '0.0.1',
      name: 'inside',
    }]);
});

export default router;
