import { myBlogs } from "/data.js";

function blogsHtml() {
  let blogs = "";
  // let heroBlog = "";

  // heroBlog = `
  // <p class="hero-date hero-item">April 10, 2023</p>
  // <h2 class="hero-title hero-item"><a href="blog.html
  //   ">My journey to software development</a></h2>
  // <p class="hero-text hero-item">Cupcake ipsum dolor sit amet dragée carrot cake brownie. Gummies marzipan shortbread cotton candy tiramisu. Caramels bear claw toffee cake tart cake tootsie roll. Chocolate dragée tart pudding cupcake.
  // </p>
  // `;

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
