const aboutBtn = document.getElementById("aboutBtn");
const logoBtn = document.getElementById("logoBtn");
const projectsBtn = document.getElementById("projectsBtn");
const contactBtn = document.getElementById("contactBtn");

function addNavBtn(button, file) {
  button.addEventListener("click", function (e) {
    location.href = file;
  })
}

addNavBtn(aboutBtn, "about.html");
addNavBtn(logoBtn, "index.html");
addNavBtn(projectsBtn, "projects.html");
addNavBtn(contactBtn, "contact.html");
