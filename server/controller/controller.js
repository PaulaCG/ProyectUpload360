const UploadModel = require('../model/schema');
const fs = require('fs');

exports.home = (req,res) => {
    res.render('main')
};

exports.uploads = (req,res, next) => {
    const files = req.files;

    if(!files){
        const error = new Error('Please choose files');
        error.httpSattusCode = 400;
        return next(error)
    }

    //convert images into base64 encoding
    let imgArray = files.map((file) => {
        let img = fs.readFileSync(file.path)
        return img;
    //    return enconde_image = img.toString('base64')
    })

    let result = imgArray.map((src, index) => {
        //create object to store data in the collection
        let finalImg = {
            filename: files[index].originalname,
            contentType: files[index].mimetype,
            filePath: files[index].path, 
            //imageBase64: src
        }

        let newUpload = new UploadModel(finalImg);

        return newUpload
            .save()
            .then(() =>{
                return{msg: `${files[index].originalname} Uploaded Successfully`}
            })
    });

    Promise.all(result)
        .then( msg => {
            res.redirect('/');
        })
}