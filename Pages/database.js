import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyB6uesyXFbo8rDFKcbJj6O3loYSQY8LFow",
    authDomain: "fir-form-5e9ba.firebaseapp.com",
    projectId: "fir-form-5e9ba",
    storageBucket: "fir-form-5e9ba.appspot.com",
    messagingSenderId: "171593386514",
    appId: "1:171593386514:web:038733ffa3eb553885e6cb",
    measurementId: "G-YHL2NXXTSW"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  console.log("app=>", db)