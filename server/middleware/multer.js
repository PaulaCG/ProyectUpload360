const multer = require('multer');

//set storage
var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads')
    },
    filename: function(req, file, cb){
        var ext= file.originalname.substring(file.originalname.lastIndexOf('.'));
        var collection = file.originalname.substring(0,file.originalname.indexOf('-'));
        cb(null, file.originalname);
    }
})

module.exports = store = multer({storage:storage});