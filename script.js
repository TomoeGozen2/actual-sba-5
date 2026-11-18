

const form = document.getElementById('post_form')
const post_title = document.getElementById('post_title')
const post_content = document.getElementById('post_content')
const title_error = document.getElementById('title_error')

const content_error = document.getElementById('content_error')

const all_posts = document.getElementById('all_posts')
const posts_list = document.getElementsById('posts_list')


//local storage
const saved_posts = localStorage.getItem("blog_posts")
localStorage.setItem(saved_posts,JSON.stringify(saved_posts))