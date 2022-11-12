import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAHdQ7olgdzs3K4s_j8HV-HRCDdRmf86XI",
    authDomain: "test-application-5dce4.firebaseapp.com",
    projectId: "test-application-5dce4",
    storageBucket: "test-application-5dce4.appspot.com",
    messagingSenderId: "1074531181344",
    appId: "1:1074531181344:web:ed99e8a46d969d50e26d45",
    measurementId: "G-LJ84WYSQ3W"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);