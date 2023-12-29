import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, get, child, set, ref } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const GETDATABASE = () => {

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

        
        get(ref(database, `users/${userID}`)).then((snapshot) => {
        if (snapshot.exists()) {
            let SAMPLE_API= {};
            console.log(snapshot.val());
            SAMPLE_API = snapshot.val();
            if(('to_dos' in SAMPLE_API) == false){
                SAMPLE_API['to_dos'] = {}
            }
            if(('events' in SAMPLE_API) == false){
                SAMPLE_API['events'] = []
            }
            
            window.localStorage.setItem(
                'userAPI', JSON.stringify(SAMPLE_API)
            )}})}

            


                export default GETDATABASE