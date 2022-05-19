const SUPABASE_URL = 'https://kzldzoahblcypgytcfej.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6bGR6b2FoYmxjeXBneXRjZmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDU3NjcsImV4cCI6MTk2Nzg4MTc2N30.j_yg92pc7aweQmR0W4XIaPpIV3g7KQZogm27VeEfxDU';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}
export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('/');
    return user;
}
export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('/');
    }
}
export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.user;
}
export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}
export async function logOut() {
    await client.auth.signOut();
    return (window.location.href = '/');
}

    

export async function getPost() {
    const resp = await client.from('posts').select('*');
    return resp.data;
}
export async function createPost(post) {
    const resp = await client.from('posts').insert(post);
    return resp.data;
}
