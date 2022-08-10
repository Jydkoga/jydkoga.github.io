const aboutBtn = document.getElementById("aboutBtn");
const logoBtn = document.getElementById("logoBtn");
const projectsBtn = document.getElementById("projectsBtn");
const contactBtn = document.getElementById("contactBtn");

// aboutBtn.addEventListener("click", function (e) {
//   location.href = "about.html";
// });

// logoBtn.addEventListener("click", function (e) {
//   location.href = "index.html";
// });

function addNavBtn(name, file) {
  name.addEventListener("click", function (e) {
    location.href = file;
  })
}

addNavBtn(aboutBtn, "about.html");
addNavBtn(logoBtn, "index.html");
addNavBtn(projectsBtn, "projects.html");
addNavBtn(contactBtn, "contact.html");
