let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
const popupscreen = document.querySelector(".popup-screen");
const closebtn = document.querySelector(".close-btn");
const thnks = document.querySelector(".btn");
const contact = document.querySelector(".contact");

// window.onload = function () {
//   var hidediv = document.getElementById("div1");
//   var hidediv2 = document.getElementById("div2");

//   document.onclick = function (div) {
//     if (div.target.id !== "div1" || div.target.id !== "div2") {
//       hidediv.style.display = "none";
//       hidediv2.style.display = "none";
//     }
//   };
// };
// var hideone = document.getElementById("hide1");
// document.onclick = function (div) {
//   if (div.target.id !== "hide1") {
//     hideone.style.display = "none";
//   }
// };

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };
  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

document.querySelectorAll(".video-container video").forEach((vid) => {
  vid.onclick = () => {
    document.querySelector(".popup-video").style.display = "block";
    document.querySelector(".popup-video video").src = vid.getAttribute("src");
  };
});
document.querySelector(".popup-video span").onclick = () => {
  document.querySelector(".popup-video").style.display = "none";
  var mov = document.getElementById("mute");
  mov.muted = true;
};
// window.onload = function () {
//   var hideone = document.getElementById("hide1");
//   document.onclick = function (div) {
//     if (div.target.id !== "div1") {
//       hideone.style.display = "none";
//       // hidediv2.style.display = "none";
//     }
//   };
// };
var options = {
  strings: ["Frontend Developer", "Video Editor", "Youtuber", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
};
var options1 = {
  strings: ["Watch more on my Channel", "Editing videos", "click here"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
};

var typed = new Typed(".typing", options);
var ty = new Typed(".type", options);
var te = new Typed(".tp", options1);

const accordian = document.getElementsByClassName("contentbx");
for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
const totop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    totop.classList.add("active");
  } else {
    totop.classList.remove("active");
  }
});
// ----------------------------------

const whatsapp1 = document.querySelector(".whatsapp1");
const whatsapp2 = document.querySelector(".whatsapp2");
const whatsapp3 = document.querySelector(".whatsapp3");
const whatsapp4 = document.querySelector(".whatsapp4");

const pageurl1 =
  "https://github.com/Akshat2Jain/Covid_statewise_tracker_dashboard";
console.log(pageurl1);
const msg1 = "check this is amazing project";
const twitterApi = `https://twitter.com/intent/tweet?text= ${pageurl1} .${msg1}`;

whatsapp1.addEventListener("click", () => {
  console.log("butto1");
  // window.open((url = whatsappApi), (target = "blank"));
  window.open((url = twitterApi), (target = "blank"));
});
const pageurl2 =
  "https://github.com/Akshat2Jain/Password_Generator_animated_bg";
const twitterApi1 = `https://twitter.com/intent/tweet?text= ${pageurl2} .${msg1}`;
whatsapp2.addEventListener("click", () => {
  console.log("butto2");
  window.open((url = twitterApi1), (target = "blank"));
});
const pageurl3 =
  "https://github.com/Akshat2Jain/Starbuks_Website_BootstrapOnly";
const msg3 = "Check out this amazing repo";

const twitterApi2 = `https://twitter.com/intent/tweet?text= ${pageurl3} .${msg3}`;

whatsapp3.addEventListener("click", () => {
  console.log("butto3");
  window.open((url = twitterApi2), (target = "blank"));
});
const pageurl4 = "https://github.com/Akshat2Jain/Sorting_App";
const msg4 = "Check out this sorting app";
const twitterApi3 = `https://twitter.com/intent/tweet?text= ${pageurl4} .${msg4}`;

whatsapp4.addEventListener("click", () => {
  console.log("butto4");
  window.open((url = twitterApi3), (target = "blank"));
});

// -----------------------------------------------------

window.addEventListener("load", () => {
  setTimeout(() => {
    popupscreen.classList.add("active");
  }, 10000);
});
closebtn.addEventListener("click", () => {
  popupscreen.classList.remove("active");
});

thnks.addEventListener("click", () => {
  popupscreen.classList.remove("active");
});
contact.addEventListener("click", () => {
  popupscreen.classList.remove("active");
});

var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disppear");
}
