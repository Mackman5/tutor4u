// Your web app's Firebase configuration
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();
database.ref('users/').set({
    user: 'Matt'
});


function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}
/*messaging.requestPermission()
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
