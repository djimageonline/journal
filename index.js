import { myBlogs } from "/data.js";

function heroBlogSectionHtml() {
  let heroBlog = [];
  let tempBlog = [];
  let heroBlogHtml = "";

  tempBlog = myBlogs;

  heroBlogHtml = `
  <p class="hero-date hero-item">${tempBlog.date}</p>
  <h2 class="hero-title hero-item"><a href="blog.html
    ">${tempBlog.title}</a></h2>
  <p class="hero-text hero-item">${tempBlog.text}
  </p>
  `;

  return heroBlogHtml;
}

function blogsHtml() {
  let myBlogsCopy = [];
  let blogs = "";

  myBlogsCopy = myBlogs;
  console.log(myBlogsCopy);

  myBlogsCopy.forEach((blog) => {
    blogs += `
      <a href="/">
        <img class="image" src="${blog.img}" alt="${blog.alt}">
        <p class="date grid-item">${blog.date}</p>
        <p class="title grid-item">${blog.title}</p>
        <p class="ptext grid-item">${blog.text}</p>
      </a>
    `;
  });

  return blogs;
}

function renderHeroBlog() {
  document.getElementById("hero").innerHTML = heroBlogSectionHtml();
}

function renderBlogs() {
  document.getElementById("blogs-grid-container").innerHTML = blogsHtml();
}

renderHeroBlog();
renderBlogs();
