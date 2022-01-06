// console.log("app")

// What is the DOM?
// https://scrimba.com/learn/javascript/what-is-the-dom-cRqpaDug

// JS -> HTML, CSS (DOM - Document Object Model)
// const p = document.createElement('p');
// p.innerText = 'Hello world';
// document.body.append(p);
// document.body.style.background = 'palegoldenrod';
// p.style.color = '#05f';
// p.addEventListener('click', () => console.log('clicked'))

// Get Single and Multiple Elements:

// const el = document.getElementById('home')
// console.log(el)
// const links = document.querySelectorAll('a');
// // console.log(link);
// links.forEach(link => {
//   if (link.matches('a[href="/login"]')) {
//     const loginLink = link;
//     console.log(loginLink);  
//   }
// })
// const divs = document.getElementsByTagName('div')
// console.log(divs);

// Creating and Modifying HTML Elements:
// https://scrimba.com/learn/javascript/creating-and-modifying-html-elements-cNqQaRSZ

// const newPost = document.createElement('div');
// newPost.className = 'top-post';
// newPost.innerHTML = "<strong>This is a new post</strong>"
// // document.body.prepend(newPost);
// const post = document.querySelector('.post');
// post.prepend(newPost);

// Dynamically Add CSS Styles:

// const post = document.querySelector(".post");
// post.style.margin = '30px';

// Understand and Work with Events:

// querySelector sem o "All" aplica addEventListener na primeira classe .post de cima pra baixo (serve pro css tambem)
// const post = document.querySelector(".post");
// post.addEventListener('click', event => {
// //   console.log(event.target);  
//   console.log('Do you want to edit this post?')
// });

// querySelectorAll aplica addEventListener em todas as classes .post (serve pro css tambem) 
// const posts = document.querySelectorAll(".post");
// posts.forEach(post => {  
//   post.addEventListener('click', event => {
//   //   console.log(event.target);  
//     console.log('Do you want to edit this post?')
//   });
// })

// addEventListener: click, mouseover,mouseout, keyup, keydown, keypress, etc ...
// document.body.addEventListener('click', event => {
//     if (!event.target.closest('.post')) return;
//     console.log('Do you want to edit this post?')  
// })



