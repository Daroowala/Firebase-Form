import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";



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
//   console.log("app=>",app);

 const auth = getAuth(app);
//   console.log("auth=>",auth);



onAuthStateChanged(auth, (user) => {
 if (user) {
   const uid = user.uid;
   
 } else {
   
 }
});


  const signup_email = document.getElementById("signUp_email");
  const signup_password = document.getElementById("signUp_password");
  const signup_btn = document.getElementById("signup_btn");
  signup_btn.addEventListener("click", createUserAccount);



function createUserAccount() {
    console.log("email=>", signup_email.value);
    console.log("password=>", signup_password.value);
    createUserWithEmailAndPassword(auth,signup_email.value,signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user=>", user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
