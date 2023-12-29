// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import GETDATABASE from "./RETRIEVE_API.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyA5Z1BbMQcP_sZTjF-iKteG4CXcfO3k4sk",
  authDomain: "dackiii.firebaseapp.com",
  databaseURL: "https://dackiii-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dackiii",
  storageBucket: "dackiii.appspot.com",
  messagingSenderId: "17601698689",
  appId: "1:17601698689:web:7809cada13a9db814ce680",
  measurementId: "G-FR3WR8PQ04"
});

const loadLoginPage = () => {
  const storedUser = window.localStorage.getItem('rememberedMeUser');
  console.log(storedUser);
  const logInContainer = document.getElementById('log-in-container');
  let LogInHTML = ''
  if (storedUser === '[]') {
    LogInHTML = `
    <div style="width:100%; display: flex; justify-content: space-between; margin-bottom: 2vw" class="return-buttons">
          <button style="width:14vw; font-size: 0.8vw" class="blue-button" id="returnHome">RETURN HOME PAGE</button>
          <button  style="width:14vw; font-size: 0.8vw" class="yellow-button" id="toLogIn">ALREADY HAVE AN ACCOUNT</button>
        </div>
    <h1 style="text-align: center">LOG IN</h1>
    <div class="mb-3" style="padding-top: 1vw; padding-bottom: 0vw; border-radius:0px">
      <label style="font-weight: bold;" for="exampleFormControlInput1" class="form-label">E-Mail</label>
      <input type="email" class="form-control" id="exampleFormControlInputEmail" placeholder="">
    </div>
    <div class="mb-3" style="padding-top: 2vw; padding-bottom: 1vw; border-radius: 0px">
      <label style="font-weight: bold;"  for="exampleFormControlInput1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleFormControlInputPass" placeholder="">
    </div>

    <!-- <div  id="my-signin2"></div> -->

    <div style="padding-top: 1vw;" class="form-check">
      <input id = "remember-me" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label remember-me" for="flexCheckDefault">
        REMEMBER ME
      </label>
    </div>

    <div style="padding-left: 3vw;" class="log-in-button">
      <button  id="log-in-button" style="margin-top: 1vw; height: 2vw; width: 25vw; background-color: #C3ECF9; font-weight: bold; font-size: 1vw; border:0px;">LOG IN</button>
    </div>`
  } else {
    let stringSplit = (storedUser.slice(2, -2)).split('","')
    console.log(stringSplit)
    console.log(storedUser.length, storedUser)

    LogInHTML = `
    <div style="width:100%; display: flex; justify-content: space-between; margin-bottom: 2vw" class="return-buttons">
          <button style="width:14vw; font-size: 0.8vw" class="blue-button" id="returnHome">RETURN HOME PAGE</button>
          <button  style="width:14vw; font-size: 0.8vw" class="yellow-button" id="toLogIn">ALREADY HAVE AN ACCOUNT</button>
        </div>
    <h1 style="text-align: center">LOG IN</h1>
    <div class="mb-3" style="padding-top: 1vw; padding-bottom: 0vw; border-radius:0px">
      <label style="font-weight: bold;" for="exampleFormControlInput1" class="form-label">E-Mail</label>
      <input value = "${stringSplit[1]}" type="email" class="form-control" id="exampleFormControlInputEmail" placeholder="">
    </div>
    <div class="mb-3" style="padding-top: 2vw; padding-bottom: 1vw; border-radius: 0px">
      <label style="font-weight: bold;"  for="exampleFormControlInput1" class="form-label">Password</label>
      <input value="${stringSplit[0]}" type="password" class="form-control" id="exampleFormControlInputPass" placeholder="">
    </div>

    <!-- <div  id="my-signin2"></div> -->

    <div style="padding-top: 1vw;" class="form-check">
      <input id="remember-me" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label remember-me" for="flexCheckDefault">
        REMEMBER ME
      </label>
    </div>

    <div style="padding-left: 3vw;" class="log-in-button">
      <button  id="log-in-button" style="margin-top: 1vw; height: 4vw; width: 25vw; background-color: #C3ECF9; font-weight: bold; font-size: 2vw; border:0px;">LOG IN</button>
    </div>`
  }

  logInContainer.innerHTML = LogInHTML;
}


loadLoginPage();

const auth = getAuth(firebaseApp);
console.log(auth)
// connectAuthEmulator(auth, "https://localhost:http://127.0.0.1:5500/")
const loginEmailPassword = async () => {
  const pass = document.getElementById('exampleFormControlInputPass').value;
  const mail = document.getElementById('exampleFormControlInputEmail').value;
  // const REMEMBER_ME = document.getElementById('remember-me');


  try{
    const userCredential = await signInWithEmailAndPassword(auth, mail, pass)
    console.log(userCredential.user);
    // console.log(REMEMBER_ME);

    if (document.querySelector('#remember-me').checked == true){
      window.localStorage.setItem('rememberedMeUser', JSON.stringify([pass, mail]))
      window.localStorage.setItem('CurrentUserID', JSON.stringify(userCredential.user))
      window.localStorage.setItem('currentUser', JSON.stringify([pass, mail]))
      window.alert("Welcome back");
      // GETDATABASE();
      window.location.href = "USERPAGE.html";
    } else {
      // window.localStorage.setItem('rememberedMeUser', JSON.stringify([]))
      window.localStorage.setItem('currentUser', JSON.stringify([pass, mail]))
      window.localStorage.setItem('CurrentUserID', JSON.stringify(userCredential.user))
      window.alert("Welcome back");
      // GETDATABASE();
      window.location.href = "USERPAGE.html";
    }
    
  } catch(error){
    console.log(error)
  }

}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const database = getDatabase();

const logInBtn = document.getElementById('log-in-button');
logInBtn.addEventListener('click', () => {
    // const pass = document.getElementById('exampleFormControlInputPass').value;
    // const mail = document.getElementById('exampleFormControlInputEmail').value;

    loginEmailPassword();


})


const returnHome = ()=>{
  window.location.href = 'LandingPage.html'
}
const toLogIn = () => {
  window.location.href = 'SignUpPage.html'
}

document.getElementById('returnHome').addEventListener('click' , () => {
  returnHome()
})
document.getElementById('toLogIn').addEventListener('click', () => {
  toLogIn()
})






