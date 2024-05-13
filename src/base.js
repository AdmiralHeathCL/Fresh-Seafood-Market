import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3eWEfpNT3fD0cw9o4n2rjsLoUGcw5nw4",
    authDomain: "catch-of-the-day-yuxuan-li.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-yuxuan-li-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

// Named Export
export { firebaseApp };

// Default Export
export default base;