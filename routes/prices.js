const router = require('express').Router();
const {
  createPrices, getPrices, updatePrices
} = require('../controllers/prices');
const celebrates = require('../middlewares/celebrates');
const auth = require("../middlewares/auth");


router.post('/', celebrates.createPrices, createPrices);
router.get("/",  getPrices);
router.patch("/",  celebrates.createPrices, auth, updatePrices);

module.exports = router;
