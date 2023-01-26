const config = {
    apiKey: "AIzaSyDmO5Naavh5fG1fi65alKOdj4Wa_mqEYhY",
    authDomain: "spoice-1457f.firebaseapp.com",
    projectId: "spoice-1457f",
    storageBucket: "spoice-1457f.appspot.com",
    messagingSenderId: "638854924985",
    appId: "1:638854924985:web:8fb75ac17a66f5f494a968"
  };
  firebase.initializeApp(config);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name + "<img user_tick src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span> </button> <hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML = row;


//End code
      } });  }); }
getData();



function send() {

Msg = document.getElementById("Msg").value;

firebase.database().ref(room_name).push({

name: user_name,
message: Msg,
like: 0

})

document.getElementById("Msg").innerHTML = " ";

}

function updateLike(message_id) {

console.log("clicked on like button!" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_Likes = Number(likes) + 1;
console.log(updated_Likes);
firebase.database().ref(room_name).child(message_id).update({
      like : updated_Likes
})

}
function logout() {

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
    }

