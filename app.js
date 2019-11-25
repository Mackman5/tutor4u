// Your web app's Firebase configuration
var firebaseConfig = {
    //config from firebase console
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
    console.log('Access Granted');
    return messaging.getToken();
})
    .then(function(token)   {
    console.log(token);
})
.catch(function(err) {
    console.log('Access Denied');
})

