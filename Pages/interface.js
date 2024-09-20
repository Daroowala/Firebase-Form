import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


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
  const db = getFirestore(app);
  const nameCollection = collection(db, "name");

  onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Redirect to login if user is not logged in
        window.location.href = "index.html";
    }
});


  addDataToDb();
  async function addDataToDb() {
     try {
    const docRef = await addDoc(nameCollection,{
        user: "Rehan",
        password: 123456,
        email:  "rehan@gmail.com",
        

    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}

  document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();

            const userName = document.getElementById('userName').value;
            const userEmail = document.getElementById('userEmail').value;
            const userPassword = document.getElementById('userPassword').value;

            try {
              await addDoc(nameCollection, {
                  name: userName,
                  email: userEmail,
                  password: userPassword
              });
              alert("Data added successfully!");
          } catch (e) {
              console.error("Error adding document: ", e);
          }
      });


  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      
    } else {
      
    }
  });
 
logout_btn.addEventListener("click", logout);

function logout () {
  console.log('logout function called');
    signOut(auth).then(() => {
      console.log('Sign-out successful');
        window.location.href = "login.html";
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}
