function handleFormSubmit(event) {
  // Prevent page refresh on submit
  event.preventDefault();

  // Get values entered by the user
  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const occupation = document.getElementById('occupation').value;

  // Personalize the content screen with user details
  document.getElementById('welcomeGreeting').innerText = `Welcome, ${name}! 🎉`;
  document.getElementById('userSummary').innerText = `Logged in as ${email} (${occupation})`;

  // Hide the form card and show the secret content card
  document.getElementById('formCard').classList.add('hidden');
  document.getElementById('contentCard').classList.remove('hidden');
}


  
