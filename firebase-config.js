import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw0zeH9wwEeMLM0lTsNX8w7pQ2alKg2Zc",
    authDomain: "dummyproject-a70be.firebaseapp.com",
    projectId: "dummyproject-a70be",
    storageBucket: "dummyproject-a70be.appspot.com",
    messagingSenderId: "468343749193",
    appId: "1:468343749193:web:10e8393b0ffb5e0123dd98",
    measurementId: "G-XRBZBQP7XV"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
