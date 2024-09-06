 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDGsgJ4luJWUqqkCQJAvKi9BEWVdsdce0c",
   authDomain: "to-do-list-924df.firebaseapp.com",
   projectId: "to-do-list-924df",
   storageBucket: "to-do-list-924df.appspot.com",
   messagingSenderId: "643094949636",
   appId: "1:643094949636:web:7ceeb0814eff0e7cc9ea51"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export{
    auth
}