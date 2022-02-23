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

username = localStorage.getItem("Username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding room name"
    });
    localStorage.setItem("room-name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room name is-" + Room_names);
            row = "<div class= 'room_name' id= " + Room_names + "onclick= 'redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>" ;
            document.getElementById("output").innerHTML = row;
            //End code
        });
    });
}
getData();
function redirectToRoomName(name){
    console.log(Room_names);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("room-name");
    window.location = "index.html";
}