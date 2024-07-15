const cloudinary = require('cloudinary').v2;

import config from "../src/config.js";


cloudinary.config({
    cloud_name:config.CLOUD_NAME,
    api_key: config.CLOUDINARY_KEY,
    api_secret:config.CLOUDINARY_SECRET
});

 let image = "../src/uploads/WhatsApp Image 2024-06-29 at 22.35.49_3a650b7e.jpg";
cloudinary.uploader.upload(image).then((result) => {
    console.log(result);
    res.send(result); 
});

