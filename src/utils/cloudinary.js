import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null
        ///upload file on cloudinary
      const reponse= await  cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file upload successfull
        console.log('File upload successfull',reponse.url);
        return reponse;
    }catch(err){
        fs.unlinkSync(localFilePath) //remove the locally saved file as the upload operation get failed
        return null;
    }
}


export {uploadOnCloudinary}