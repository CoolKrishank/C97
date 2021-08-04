var firebaseConfig = {
     apiKey: "AIzaSyCQbS2wvbg2HFUnzelYimsjJbUMmLJMj2k",
     authDomain: "kwitter-50816.firebaseapp.com",
     databaseURL: "https://kwitter-50816-default-rtdb.firebaseio.com",
     projectId: "kwitter-50816",
     storageBucket: "kwitter-50816.appspot.com",
     messagingSenderId: "242423543365",
     appId: "1:242423543365:web:f9c2ac5d829a5d1434952c",
     measurementId: "G-QGT4M3F9VT"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   user_name = localStorage.getItem("Username")
   room_name = localStorage.getItem("room_name")
   function logOut(){
         localStorage.removeItem("Username")
         localStorage.removeItem("room_name")
         window.location = "index.html"
         
   }
   function send(){
         msg = document.getElementById("msg").value
         firebase.database().ref(room_name).push({
               like : 0,
               message: msg,
               username : user_name
         });
   }
 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
 //Start code
 console.log(message_data)
 console.log(firebase_message_id)
 
 message = message_data['message'];
 name = message_data['username'];
 like = message_data['like'];
 
 username_tick = "<h4>"+name+"<img src='m2.png' class='user_tick'</h4>"
 message_line = "<h4 class='message_h4'>"+message+"</h4>"
 like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
 span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>"
 row = username_tick + message_line + like_button + span_tag;
 document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + row
 //End code
       } });  }); }
 getData();
 
 function updateLike(message_id){
       console.log("Liked")
      old_like = document.getElementById(message_id).value
      updatedlike = Number(old_like) + 1
      firebase.database().ref(room_name).child(message_id).update({
            like: updatedlike
      });
 }