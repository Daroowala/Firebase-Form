import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

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
 
logout_btn.addEventListener("click", logout);

function logout () {
    signOut(auth).then(() => {
        window.location.href = "index.html"
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}
