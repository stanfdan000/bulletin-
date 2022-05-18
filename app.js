import { getPost, getUser, logOut } from '/fetch-utils.js';
import { renderPostIt } from '/render-utils.js';
// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  
  
const whiteboard = document.getElementById('white-Board');
const authButton = document.getElementById('auth-button');
const makeCreate = document.getElementById('make/create');
  
window.addEventListener('load', async () => {
    const user = await getUser();
    if (user) {
        authButton.addEventListener('click', logOut);
        authButton.textContent = 'logOut';
    } else {
        authButton.addEventListener('click', () => {
            location.replace('/logInPage');
        });
        authButton.textContent = 'logIn';
    }
    makeCreate.addEventListener('click', () => {
        location.replace('/createPage');
    });
    const posts = await getPost();
    for (let post of posts) {
        const postDiv = renderPostIt(post);
        whiteboard.append(postDiv);
    }
});
  const containers = document.getElementById('container');
  async function loadData();
