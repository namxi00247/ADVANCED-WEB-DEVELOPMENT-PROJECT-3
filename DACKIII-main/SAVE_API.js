import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, get, child, set, ref } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// const SAVEDATABASE = () => {

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

    
        let userID = (window.localStorage.getItem('CurrentUserID'))
        userID = (userID.slice(8)).split('",')[0]
        console.log(userID)
        let API = JSON.parse(window.localStorage.getItem('userAPI'));
        console.log(JSON.stringify(API))
        set(ref(database, 'users/' + userID), JSON.stringify(API));
        

//     }        

// export default SAVEDATABASE
