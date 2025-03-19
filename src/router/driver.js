const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        data: 'ACA_IRIAN_LOS_PILOTOS'
    });
})

module.exports = router;