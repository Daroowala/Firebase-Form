
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";



const signup_email = document.getElementById("email");
const signup_password = document.getElementById("password");
const signup_btn = document.getElementById("signup_btn");

signup_btn.addEventListener("click", createUserAccount());


function createUserAccount() {
    console.log("email=>", signup_email.value);
    console.log("password=>", signup_password.value);
}
