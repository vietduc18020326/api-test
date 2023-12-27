import express from 'express';

const router = express.Router();

type VersionResponse = {
    version: string;
    name: string;
}[];

router.get<{}, VersionResponse>('/', (req, res) => {
    res.json([{
        version: "0.0.7",
        name: "policy"
    },{
        version: "0.0.9",
        name: "booking"
    }]);
});

export default router;
