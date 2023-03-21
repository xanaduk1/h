
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAkhXhtOp9waDtdxTzPaBpNsWu6oREoxZk",
      authDomain: "totallykwitter.firebaseapp.com",
      databaseURL: "https://totallykwitter-default-rtdb.firebaseio.com",
      projectId: "totallykwitter",
      storageBucket: "totallykwitter.appspot.com",
      messagingSenderId: "830647483054",
      appId: "1:830647483054:web:ac4607d4aaa560130c8b3f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function addRoom()
{
    room_name = document.getElementById("room_name").value;


    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    }):

    localStorage.setItem("roomname", room_name);

    window.location = "kwitter_room.html";
}