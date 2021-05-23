import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBw0Mjnze93hkN4poxcp2Tgf_82qxOMhPA",
    authDomain: "clone-f2b6d.firebaseapp.com",
    projectId: "clone-f2b6d",
    storageBucket: "clone-f2b6d.appspot.com",
    messagingSenderId: "392785300226",
    appId: "1:392785300226:web:fe7671596232a0ed66d01b",
    measurementId: "G-CG92Q2ZD3K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };