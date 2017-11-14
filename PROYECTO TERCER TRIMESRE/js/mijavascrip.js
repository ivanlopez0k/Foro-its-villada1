var database;
$(function() {
  // Inicio Firebase
  var config = {
    apiKey: "AIzaSyAZ1rndxElfsP0FQpbwrdFng1WdAJV3NkI",
    authDomain: "foro-its-villada.firebaseapp.com",
    databaseURL: "https://foro-its-villada.firebaseio.com",
    projectId: "foro-its-villada",
    storageBucket: "foro-its-villada.appspot.com",
    messagingSenderId: "966356866588"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
});


    
