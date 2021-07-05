// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB6Hi_rC5Bi9eHH8mmceNB0YUhDicLe_Sk",
    authDomain: "linkedin-clone-8b92b.firebaseapp.com",
    projectId: "linkedin-clone-8b92b",
    storageBucket: "linkedin-clone-8b92b.appspot.com",
    messagingSenderId: "440925893752",
    appId: "1:440925893752:web:a7d7a3613dc4b58f3c298d",
    measurementId: "G-3NXTJPSG2B"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};