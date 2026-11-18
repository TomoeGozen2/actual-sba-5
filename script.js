const template = document.getElementById('template');
const container = document.getElementById('card-container');
const cloneButton = document.getElementById('clone-card');

const form = document.getElementById('post-form')
const post_title = document.getElementById('post_title')
const post_content = document.getElementById('post_content')
const title_error = document.getElementById('title_error')

const content_error = document.getElementById('content_error')

const all_posts = document.getElementById('all_posts')
const posts_list = document.getElementsById('posts_list')


cloneButton.addEventListener('click', () => {
const clonedCard = template.cloneNode(true); // Deep clone
clonedCard.style.display = 'block';
container.appendChild(clonedCard);
});