var express = require('express');
const electronics_controlers= require('../controllers/electronics')
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('electronics', { title: 'electronics Search Results' });
// });
router.get('/', electronics_controlers.electronics_view_all_Page);

/* GET detail electronics page */
router.get('/detail', electronics_controlers.electronics_view_one_Page);

/* GET create electronics page */
router.get('/create', electronics_controlers.electronics_create_Page);

/* GET create update page */
router.get('/update', electronics_controlers.electronics_update_Page);

/* GET delete electronics page */
router.get('/delete', electronics_controlers.electronics_delete_Page);

module.exports = router;