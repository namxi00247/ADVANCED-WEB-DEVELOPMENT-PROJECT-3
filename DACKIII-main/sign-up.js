// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = {
  apiKey: "AIzaSyA5Z1BbMQcP_sZTjF-iKteG4CXcfO3k4sk",
  authDomain: "dackiii.firebaseapp.com",
  databaseURL: "https://dackiii-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dackiii",
  storageBucket: "dackiii.appspot.com",
  messagingSenderId: "17601698689",
  appId: "1:17601698689:web:7809cada13a9db814ce680",
  measurementId: "G-FR3WR8PQ04"
};

const app = initializeApp(firebaseApp);
const auth = getAuth(app);
const database = getDatabase();
console.log(auth)
// firebaseApp.initializeApp({
//   apiKey: "AIzaSyA5Z1BbMQcP_sZTjF-iKteG4CXcfO3k4sk",
//   authDomain: "dackiii.firebaseapp.com",
//   databaseURL: "https://dackiii-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "dackiii",
//   storageBucket: "dackiii.appspot.com",
//   messagingSenderId: "17601698689",
//   appId: "1:17601698689:web:7809cada13a9db814ce680",
//   measurementId: "G-FR3WR8PQ04"
// })


const signUp = document.getElementById("sign-up-button")
signUp.addEventListener("click", () => {
  SignUp()
})

// set up sign up function
const SignUp = async () => {
  const username = document.getElementById('username').value;
  const mail = document.getElementById('mail').value;
  const password = document.getElementById('password').value;
  const password_enter = document.getElementById('password2').value;

  if (validate_password(password, password_enter)) {
    alert('Double check your password inputs')
    return
  }
  if (validate_field(username) == false) {
    alert('check for any empty field')
    return
  } else {
    console.log("hello")
    createUserWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)

        // let firebaseRef = firebase.database().ref('account');
        // firebaseRef.push({
        //     personal_info: {
        //       email: mail,
        //       username: username,
        //       password: password
        //     },
        //     to_dos: {

        //     },
        //     events: []
        // })

        // window.alert("Successfully Signed In")
        set(ref(database, 'users/' + user.uid), {
          personal_info: {
            email: mail,
            username: username,
            password: password
          }
        })
          .then(() => {
            alert("Signed up successfully")

            if (localStorage.getItem('userAPI') !== null){
              var current_API = JSON.parse(window.localStorage.getItem('userAPI'))
              console.log(current_API)

              let iniiate_account = [{
                events: [],
                personal_info: {
                  email: mail,
                  username: username,
                  password : password
                },
                to_dos: {}
              }]

              current_API = current_API.concat(iniiate_account)
              console.log(current_API)

              window.localStorage.setItem('userAPI', JSON.stringify(current_API))


          } else {

            let initiate_account = [{
              events: [],
              personal_info: {
                email: mail,
                username: username,
                password : password
              },
              to_dos: {}
            }]

            window.localStorage.setItem('userAPI', JSON.stringify(initiate_account))
            console.log(initiate_account)

          }
            window.location.href = "LogInPage.html"
          })
            
          .catch((error) => {
            alert(error)
          });
        // ...

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

}

// Validate Functions

function validate_password(password, password_enter) {
  // Firebase only accepts lengths greater than 6
  if (password < 6 || password != password_enter) {
    return true
  } else {
    return false
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}





const returnHome = () => {
  window.location.href = 'LandingPage.html'
}
const toLogIn = () => {
  window.location.href = 'LogInPage.html'
}

document.getElementById('returnHome').addEventListener('click', () => {
  returnHome()
})
document.getElementById('toLogIn').addEventListener('click', () => {
  toLogIn()
})