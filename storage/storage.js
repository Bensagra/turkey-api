const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
console.log(process.env.CLOUD_NAME)
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
});

 
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'images_turkey',
      format: async (req, file) => ['jpeg', 'png', 'jpg'], // supports promises as well
      public_id: (req, file) => 'image',
    },
  });
   

module.exports = {
    storage
};


