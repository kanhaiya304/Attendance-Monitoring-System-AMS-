const signUpButton = document.getElementById('signUpBtn');
const signInButton = document.getElementById('signInBtn');
const container = document.querySelector('.container');
const para = document.getElementById('para');

signUpButton.addEventListener('click', () => {
  
  document.querySelector(".sign-in-container").style.display = "none";
  document.querySelector(".overlay-right").style.display = "none";
  document.querySelector(".sign-up-container").style.display = "block";
  document.querySelector(".overlay-left").style.display = "block";
});

signInButton.addEventListener('click', () => {
  document.querySelector(".sign-in-container").style.display = "block";
  document.querySelector(".overlay-right").style.display = "block";
  document.querySelector(".sign-up-container").style.display = "none";
  document.querySelector(".overlay-left").style.display = "none";
});

const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signInForm.querySelector('input[type="email"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;
  // Perform sign-in authentication
  console.log('Sign in:', email, password);
});

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = signUpForm.querySelector('input[type="text"]').value;
  const email = signUpForm.querySelector('input[type="email"]').value;
  const password = signUpForm.querySelector('input[type="password"]').value;
  // Perform sign-up authentication
  console.log('Sign up:', name, email, password);
}); 

const SignIn = document.querySelector(".SignIn");
const SignUp = document.querySelector(".SignUp");

SignIn.addEventListener('click', () => {
   document.querySelector(".container").style.display = "none";
   document.querySelector(".overlay-container").style.display = "none";
   document.querySelector(".Moniter").style.display = "block";
});

SignUp.addEventListener('click', () => {
    alert('You Are Signup Successfully ');
});

// Simulated functionality for clocking in/out
document.getElementById('clockInBtn').addEventListener('click', () => {
  alert('Clocked In!');
  para.textContent = "You Are Clocked In!";
});

document.getElementById('clockOutBtn').addEventListener('click', () => {
  alert('Clocked Out!');
  para.textContent = "You Are Clocked Out!";
  
});

// Simulated functionality for applying leave
document.getElementById('applyLeaveBtn').addEventListener('click', () => {
  alert('Leave Applied!');
  para.textContent = "You Are Leave Applied!";
});

// Simulated functionality for generating report
document.getElementById('generateReportBtn').addEventListener('click', () => {
  alert('Report Generated!');
  para.textContent = "You Are Report Generated!";
});

const apiUrl = 'https://timeapi.io/api/Time/current/ip?ipAddress=237.71.232.203';
const outputElement = document.getElementById('output');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Display data in an HTML element
    outputElement.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });
