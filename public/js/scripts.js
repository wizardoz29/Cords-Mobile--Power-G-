// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

var transformerList = document.querySelector('.transformers-list');
var choice = document.querySelectorAll(".choose");

transformerList.addEventListener("click", ()=> {
  if(transformerList.classList.contains('visible'))
  transformerList.classList.remove("visible");
  else
  transformerList.classList.add("visible")
})

// transformerList.querySelectorAll(".choose")[0].onclick = function (evt) {
//   if (transformerList.classList.contains('visible'))
//   transformerList.classList.remove("visible");
//   else
//   transformerList.classList.add("visible");
// }
