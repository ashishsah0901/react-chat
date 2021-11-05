import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBLZZRt8n4RDklv2WENLcOYCCHi3P18i8M",
    authDomain: "clone-c7a82.firebaseapp.com",
    databaseURL: "https://clone-c7a82-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "clone-c7a82",
    storageBucket: "clone-c7a82.appspot.com",
    messagingSenderId: "388714606293",
    appId: "1:388714606293:web:7d95f542964413b9073c5c",
    measurementId: "G-3QV3D7F1LV"
};

const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { provider, auth };
export default db;