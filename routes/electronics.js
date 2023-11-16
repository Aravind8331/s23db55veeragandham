var express = require('express');
const electronics_controlers= require('../controllers/electronics')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('electronics', { title: 'electronics Search Results' });
});
router.get('/', electronics_controlers.electronics_view_all_Page);

/* GET detail electronics page */
router.get('/detail', electronics_controlers.electronics_view_one_Page);

module.exports = router;