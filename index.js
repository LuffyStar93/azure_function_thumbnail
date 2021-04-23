module.exports = async function (context, myBlob) {
    context.log("Ajour d'un fichier dans images/")
  
    const imageThumbnail = require('image-thumbnail');
    var nodemailer = require('nodemailer');

    var new_image = await imageThumbnail(myBlob);    
    
    context.bindings.outputBlob = new_image;
    context.log("L'image a été uploadé dans imagesthumbnails/");


};