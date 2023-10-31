import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfKCo72Mh5L5a7QgozOkUjwdsr6-FR6jA",
  authDomain: "instagram-clone-db.firebaseapp.com",
  projectId: "instagram-clone-db",
  storageBucket: "instagram-clone-db.appspot.com",
  messagingSenderId: "74051818442",
  appId: "1:74051818442:web:705b303925d1877e1d3533",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    const name = Date.now() + file.name;
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle upload error if needed
        reject(error);
      },
      () => {
        // Upload completed successfully, now get the download URL
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL); // Resolve the Promise with the download URL
          })
          .catch((error) => {
            reject(error); // Reject the Promise if there's an error getting the download URL
          });
      }
    );
  });
};
