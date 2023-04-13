import { myBlogs } from "/data.js";

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

function renderBlogs() {
  document.getElementById("blogs-grid-container").innerHTML = blogsHtml();
}

renderBlogs();
