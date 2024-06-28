// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore} from'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKNhkUKg5kbOpr-0fq7HgyRzg31svDcjs",
  authDomain: "test-van-8155e.firebaseapp.com",
  projectId: "test-van-8155e",
  storageBucket: "test-van-8155e.appspot.com",
  messagingSenderId: "45743823483",
  appId: "1:45743823483:web:608ea8351ef1fc1f1020de",
  measurementId: "G-GHH1GHJK1M"
};

const firebase = initializeApp(firebaseConfig);
const db = initializeFirestore(firebase,{ experimentalAutoDetectLongPolling: true });

export { db };