// Import the functions you need from the SDKs you need
import Firebase from 'firebase'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyDPLP21KNEexCQiHR_n5vWSJTsrw3fyjp0",
  authDomain: "meeteasyreaction.firebaseapp.com",
  projectId: "meeteasyreaction",
  storageBucket: "meeteasyreaction.appspot.com",
  messagingSenderId: "252481496975",
  appId: "1:252481496975:web:5752f23387570175f90dfa",
  measurementId: "G-8V13PT34B3"
};

// Initialize Firebase
const firebaseApp = Firebase.initializeApp(config, 'exercise-vue')
const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore