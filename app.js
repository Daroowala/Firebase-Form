
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth, onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  
 
  const firebaseConfig = {
    apiKey: "AIzaSyB6uesyXFbo8rDFKcbJj6O3loYSQY8LFow",
    authDomain: "fir-form-5e9ba.firebaseapp.com",
    projectId: "fir-form-5e9ba",
    storageBucket: "fir-form-5e9ba.appspot.com",
    messagingSenderId: "171593386514",
    appId: "1:171593386514:web:038733ffa3eb553885e6cb",
    measurementId: "G-YHL2NXXTSW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);




onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    
  } else {
    
  }
});