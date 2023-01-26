const config = {
    apiKey: "AIzaSyDmO5Naavh5fG1fi65alKOdj4Wa_mqEYhY",
    authDomain: "spoice-1457f.firebaseapp.com",
    projectId: "spoice-1457f",
    storageBucket: "spoice-1457f.appspot.com",
    messagingSenderId: "638854924985",
    appId: "1:638854924985:web:8fb75ac17a66f5f494a968"
  };
  firebase.initializeApp(config);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
window.location = "chatroom.html";
localStorage.setItem("Room_name", Room_name);
Room_name = document.getElementById("Room_name").value;
firebase.database().ref("/").child(Room_name).update({

purpose: "adding room name"

});
localStorage.setItem("Room_name", Room_name);

}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_name- " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
       
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("Room_name", name);
window.location = "chatroom.html";
}

function logout() {

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";

}