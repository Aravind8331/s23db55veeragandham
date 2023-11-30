var express = require('express');
const electronics_controlers= require('../controllers/electronics')
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
}

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('electronics', { title: 'electronics Search Results' });
// });
router.get('/', electronics_controlers.electronics_view_all_Page);

/* GET detail electronics page */
router.get('/detail', electronics_controlers.electronics_view_one_Page);

/* GET create electronics page */
router.get('/create',secured, electronics_controlers.electronics_create_Page);

/* GET create update page */
router.get('/update',secured, electronics_controlers.electronics_update_Page);

/* GET delete electronics page */
router.get('/delete',secured, electronics_controlers.electronics_delete_Page);



module.exports = router;