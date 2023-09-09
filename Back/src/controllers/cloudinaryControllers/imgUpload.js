const cloudinary = require('cloudinary').v2;

 const imgUpload = async (url)=>{
    try{
        const result = await cloudinary.uploader.upload(`${url}`,{
           
          });
          return result.url      
 
    }catch(error){
         return JSON({error: error.message})
    }
 };

module.exports = {
    imgUpload
}
