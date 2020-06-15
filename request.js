var firebaseConfig = {
    apiKey: "AIzaSyCONBj-1jxQz-0zupRZa0jOfPrtqRbCu_Y",
    authDomain: "fitness-8f144.firebaseapp.com",
    databaseURL: "https://fitness-8f144.firebaseio.com",
    projectId: "fitness-8f144",
    storageBucket: "fitness-8f144.appspot.com",
    messagingSenderId: "972595422162",
    appId: "1:972595422162:web:0d7e1c29be929295bfde0b",
    measurementId: "G-6L6WH16WM6"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messagesRef = firebase.database().ref('messages'); 

 document.getElementById('myForm').addEventListener('submit', 
 submitForm);

 function submitForm(e) {
     e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var date = getInputVal('date');
    var time = getInputVal('time');

    saveMessage(name, email, phone, date, time);   
    
    
 }

 function getInputVal(id) {
     return document.getElementById(id).value;
 }

 function saveMessage(name, email, phone, date, time) {
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
         name: name,
         email: email,
         phone: phone,
         date: date,
         time: time
     });
 }