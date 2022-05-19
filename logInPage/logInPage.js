import { redirectIfLoggedIn, signInUser, signUpUser } from '../fetch-utils.js';

const signInForm = document.getElementById('signIn');
//const signInEmail = document.getElementById('signIn-Email');
//const signInPassword = document.getElementById('signI-Password');
const signUpForm = document.getElementById('signUp');

redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/');
    }
});
signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    
    if (user) {
        location.replace('/');
    }
});
