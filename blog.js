import { myBlogs } from "/data.js";

function blogPageHTML() {
  let blogPageContent = "";

  blogPageContent = `
      <p >${myBlogs[0].date}</p>
      <p class="blog-title">${myBlogs[0].title}</p>
      <p class="blog-text">${myBlogs[0].text}</p>
      <img class="blog-image" src="${myBlogs[0].img}" alt="${myBlogs[0].alt}">
      <p class="blog-subtitle">${myBlogs[0].subtitle}
      <p class="blog-paragraph">${myBlogs[0].paragraph}</p>
      <p class="blog-subtitle-two">${myBlogs[0].subtitleTwo}
      <p class="blog-paragraph-two">${myBlogs[0].paragraphTwo}</p>
  `;

  return blogPageContent;
}

function renderBlogsPage() {
  document.getElementById("main-clicked-blog").innerHTML = blogPageHTML();
}

renderBlogsPage();
