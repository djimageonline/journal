import { myBlogs } from "/data.js";

function recentBlogs() {
  let recentBlogsList = "";

  // myBlogs.forEach((blog) => {
  for (let index = 1; index < 4; index++) {
    recentBlogsList += `
    <h3>Recent Blogs</h3>
  <a href="/">
      <img class="image" src="${myBlogs[index].img}" alt="${myBlogs[index].alt}">
      <p class="date grid-item">${myBlogs[index].date}</p>
      <p class="title grid-item">${myBlogs[index].title}</p>
      <p class="ptext grid-item">${myBlogs[index].text}</p>
    </a>
  `;
  }
  return recentBlogsList;
}

function blogPageHTML(blogitem) {
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
      <div class="recent-blogs">
      ${recentBlogs()}
      </div>
  `;

  return blogPageContent;
}

function renderBlogsPage() {
  document.getElementById("main-clicked-blog").innerHTML = blogPageHTML();
}

renderBlogsPage();
