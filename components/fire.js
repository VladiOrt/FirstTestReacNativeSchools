// Import the functions you need from the SDKs you need


import { initializeApp } from "@firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDDFeGG-e2NXo9ATS6rDmVfQfDG9nrdF00",
  authDomain: "authflysapp.firebaseapp.com",
  projectId: "authflysapp",
  storageBucket: "authflysapp.appspot.com",
  messagingSenderId: "353768052351",
  appId: "1:353768052351:web:acf13db92657067bde914a"
};

// Initialize Firebase
const Fire = initializeApp(firebaseConfig);

export default Fire;