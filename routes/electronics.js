var express = require('express');
const electronics_controller= require('../controllers/electronics')
var router = express.Router();

/* GET home page. */
router.get('/', electronics_controller.electronics_view_all_Page);

// GET request for one costume.
router.get('/electronics/:id', electronics_controller.eletronics_detail);
module.exports = router;