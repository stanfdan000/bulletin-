import { getPost, getUser, logOut } from './fetch-utils.js';
import { renderPostIt } from './render-utils.js'


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
});

const posts = await getPosts();
for (let post of posts ) {
    const postDiv = renderPostIt(post);
    whiteboard.append(postDiv);
}