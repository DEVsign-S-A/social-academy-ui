import { storage } from "../firebase/firebase-config";
import { v4 as uuidv4 } from 'uuid';

export const fileUploadFirestore = async (file) =>{
    const uuidimage = uuidv4(); 
    const fileName = uuidimage + file.name;
    const metadata = {
        'contentType': file.type
    }
    const ref = storage.ref("Curriculums").child(fileName);
    const url = await ref.put(file, metadata).then(async (result) =>{
       return await storage
        .ref(`Curriculums/${result.metadata.name}`)
        .getDownloadURL()
        .then((fileUrl) =>{
            return fileUrl
        })
    })
    return url;
}