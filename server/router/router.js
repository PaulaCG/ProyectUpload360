const route= require('express').Router();
const controller = require('../controller/controller');
const store = require('../middleware/multer');

//routes
route.get('/', controller.home);
route.get('/360view', function(req,res) {
    res.render('360view')
})
route.post('/uploadmultiple', store.array('images',6),controller.uploads);

module.exports=route;