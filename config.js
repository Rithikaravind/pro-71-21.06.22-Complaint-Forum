import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBgGXD091ooOCNhrmRZ14ll1ztoH_e1Mfo",
  authDomain: "complaint-forum-d82e8.firebaseapp.com",
  projectId: "complaint-forum-d82e8",
  storageBucket: "complaint-forum-d82e8.appspot.com",
  messagingSenderId: "922140481431",
  appId: "1:922140481431:web:0ffe53ce3c87f028e656d2"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

