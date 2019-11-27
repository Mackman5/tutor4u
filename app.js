
// Your web app's Firebase configuration
const firebaseConfig = {
    //config from firebase console
    apiKey: "AIzaSyBbmvKvgusXNi2KKoeUAPbk_N0wmLT4asM",
    authDomain: "tutor4u-b50d1.firebaseapp.com",
    databaseURL: "https://tutor4u-b50d1.firebaseio.com",
    projectId: "tutor4u-b50d1",
    storageBucket: "tutor4u-b50d1.appspot.com",
    messagingSenderId: "274686198653",
    appId: "1:274686198653:web:d875ded0d322eb1f108214",
    measurementId: "G-REL2N90EP6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();

//write to firebase function
//thingToChange must be a valid thing, changeTo must be a string
// E.x: fireWrite( "test", "Henlo");
function fireWrite(thingToChange, changeTo) {
    database.ref(thingToChange +  '/').set({
        thingToChange: changeTo
    });
}

/*/Notification Request
messaging.requestPermission()
.then(function() {
    console.log('Access Granted');
    return messaging.getToken();
})
.then(function(token)   {
console.log(token);
})
.catch(function(err) {
    console.log('Error!');
})*/