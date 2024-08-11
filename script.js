const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const logo = document.getElementById('logo');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  if (body.classList.contains('dark-theme')) {
    logo.src = 'logos/logo2.png';
  } else {
    logo.src = 'logos/logo1.png';
  }
});