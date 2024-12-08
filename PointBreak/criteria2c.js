
const communityButtons = document.querySelectorAll('communities');
const signupForm = document.getElementById('signup-form');

communityButtons.forEach(button => {
  button.addEventListener('click', () => {
    const communityName = button.dataset.community;
    signupForm.querySelector('h2').textContent = `Sign Up for ${communityName}`;
    signupForm.classList.remove('hidden');
    
  });
});