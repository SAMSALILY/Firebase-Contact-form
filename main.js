// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyADl7kIMdmFdmGaGDATWLLIaw5ZHnkqRgo",
    authDomain: "fir-contact-form-89138.firebaseapp.com",
    databaseURL: "https://fir-contact-form-89138.firebaseio.com",
    projectId: "fir-contact-form-89138",
    storageBucket: "fir-contact-form-89138.appspot.com",
    messagingSenderId: "823419429910",
    appId: "1:823419429910:web:a49190d76d2e44d0"
};
firebase.initializeApp(config);

// Reference messages collection

var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
