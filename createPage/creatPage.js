import { logOut, createPost, checkAuth, } from '../fetch-utils.js';
const logOutButton = document.getElementById('LogOut');

logOutButton.addEventListener('click', () => {
    logOut();
});
const Home = document.getElementById('Home');
Home.addEventListener('click', () => {
    location.replace('/');
});
const postItForm = document.getElementById('postItForm');
postItForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(postItForm);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    (newPost);
    const res = await createPost(newPost);
    (res);
    location.replace('/');
});

checkAuth();