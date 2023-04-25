document.getElementById("sideNavBtn").addEventListener("click", () => {
  document.getElementById("sideNav").style.width = "250px";
  document.getElementById("sideNav").style.borderRight = "solid 2px white";
  document.getElementsByTagName("body")[0].style.marginLeft = "250px";
});

document.getElementById("closeSide").addEventListener("click", () => {
  setTimeout(() => {
    document.getElementById("sideNav").style.borderRight = "0";
  }, 900);

  document.getElementById("sideNav").style.width = "0px";
  document.getElementsByTagName("body")[0].style.marginLeft = "0px";
});

// MASONRY GALLERY

var gallery = document.querySelector("#gallery");
var getVal = function (elem, style) {
  return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
var getHeight = function (item) {
  return item.querySelector(".image").getBoundingClientRect().height;
};
var resizeAll = function () {
  var altura = getVal(gallery, "grid-auto-rows");
  var gap = getVal(gallery, "grid-row-gap");
  gallery.querySelectorAll(".gallery-item").forEach(function (item) {
    var el = item;
    el.style.gridRowEnd =
      "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
  });
};

window.addEventListener("resize", resizeAll);

// CLICK IMAGES

let items = document.getElementsByClassName("item");
let exit = document.getElementsByClassName("exit")[0];

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    if (items[i].classList.contains("full")) {
      items[i].classList.remove("full");
    } else {
      items[i].classList.toggle("full");
    }
  });
}
