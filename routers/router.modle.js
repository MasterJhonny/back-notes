const express = require('express');

const ModleService = require('../services/service.modle')

const router = express.Router();

const service = new ModleService();

router.get('/slopes', async (req, res) => {
    const slopes = await service.slopes();
    res.json({
        valor: "yes"
    });
}) 


module.exports = router;