export function renderPostIt(post) {
    const div = document.createElement('div');
    div.classList.add('postIt');
    const h2 = document.createElement('h2');
    h2.textContent = post.title;
    const p1 = document.createElement('p');
    p1.textContent = post.description;
    const p2 = document.createElement('p');
    p2.textContent = post.contact;
    p2.classList.add('contact');
    div.append(h2, p1, p2);
    return div;
}