import { myBlogs } from "/data.js";
let temp = [];
temp = myBlogs.shift();

function heroBlogSectionHtml() {
  let heroBlogHtml = "";

  heroBlogHtml = `
  <img class="hero-img" src="${temp.img}">
  <p class="hero-date hero-item">${temp.date}</p>
  <h2 class="hero-title hero-item"><a href="blog.html
    ">${temp.title}</a></h2>
  <p class="hero-text hero-item">${temp.text}
  </p>
  `;

  return heroBlogHtml;
}

function blogsHtml() {
  let blogs = "";

  myBlogs.forEach((blog) => {
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
