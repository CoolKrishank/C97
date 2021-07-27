var firebaseConfig = {
    apiKey: "AIzaSyCjMtOqDG8asMpaiy8AdkIgZ1sEfqGaepY",
    authDomain: "kwitter-f0b94.firebaseapp.com",
    databaseURL: "https://kwitter-f0b94-default-rtdb.firebaseio.com/",
    projectId: "kwitter-f0b94",
    storageBucket: "kwitter-f0b94.appspot.com",
    messagingSenderId: "64624072692",
    appId: "1:64624072692:web:dc0cf7b4abb72fb99d0ba1"
  };
  firebase.initializeApp(firebaseConfig);
  function add_user()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
       purpose:"adding user"   
      });
  }