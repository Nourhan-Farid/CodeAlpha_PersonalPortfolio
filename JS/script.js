let scrollNav = document.querySelector("#scrollNav");
let navLink = document.querySelectorAll(".navLink");
let faBars = document.querySelector(".fa-bars");
let scrollsTop = document.querySelector(".scrollTop");

// OnScroll Navbar----Start
window.addEventListener("scroll", myFunction);

function myFunction() {
  if (document.documentElement.scrollTop > 100) {
    scrollNav.classList.replace("bg-transparent", "bg-black");
    scrollNav.classList.replace("py-5", "py-2");
    navLink.forEach((link) => {
      link.classList.replace("text-[#a9194f]", "text-white");
    });
    faBars.classList.replace("text-[#a9194f]", "text-white");
  } else {
    scrollNav.classList.replace("bg-black", "bg-transparent");
    scrollNav.classList.replace("py-2", "py-5");
    navLink.forEach((link) => {
      link.classList.replace("text-white", "text-[#a9194f]");
    });
    faBars.classList.replace("text-white", "text-[#a9194f]");
  }
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

scrollsTop.addEventListener("click", scrollTop);

const topBtn = () => {
  if (window.scrollY >= 200) {
    scrollsTop.classList.replace("hidden", "flex");
  } else {
    scrollsTop.classList.replace("flex", "hidden");
  }
};

window.addEventListener("scroll", topBtn);
