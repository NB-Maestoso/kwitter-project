//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBUbaGXtI3nQRujrv8ZNxiKXq41hXo3T30",
    authDomain: "nb-website-firebase.firebaseapp.com",
    databaseURL: "https://nb-website-firebase-default-rtdb.firebaseio.com",
    projectId: "nb-website-firebase",
    storageBucket: "nb-website-firebase.appspot.com",
    messagingSenderId: "644982581291",
    appId: "1:644982581291:web:dd789355c7832840a6a26e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("Username");
room_name = localStorage.getItem("room-name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();
function logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("room-name");
    window.location = "index.html";
}