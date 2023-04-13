import { myBlogs } from "/data.js";

function blogPageHTML() {
  let blogPageContent = "";

  blogPageContent += `
      <p >${myBlogs[0].date}</p>
      <p class="blog-title">${myBlogs[0].title}</p>
      <p class="blog-text">${myBlogs[0].text}</p>
      <img class="blog-image" src="${myBlogs[0].img}" alt="${myBlogs[0].alt}">
  `;

  return blogPageContent;
}

function renderBlogsPage() {
  document.getElementById("main-clicked-blog").innerHTML = blogPageHTML();
}

renderBlogsPage();
