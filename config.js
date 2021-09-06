import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCnlWknCiqFfOhyTsOsFYRld6ycGyUiBco",
  authDomain: "pro-c71-a7e8e.firebaseapp.com",
  projectId: "pro-c71-a7e8e",
  storageBucket: "pro-c71-a7e8e.appspot.com",
  messagingSenderId: "677918029941",
  appId: "1:677918029941:web:449331add89034be39a03c"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

