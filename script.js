function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const occupation = document.getElementById('occupation').value;

  document.getElementById('welcomeGreeting').innerText = `Welcome, ${name}! 🎉`;
  document.getElementById('userSummary').innerText = `Logged in as ${email} (${occupation})`;

  document.getElementById('formCard').classList.add('hidden');
  document.getElementById('contentCard').classList.remove('hidden');
}

function switchTab(tabId) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  // Deactivate all tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab and activate button
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

  
