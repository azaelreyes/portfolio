const scrollUp = document.getElementById("scroll-up");
const showOnScreen = 500;
//shows Scroll Up only when not in homepage
document.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop < showOnScreen){
        scrollUp.classList.add("hidden");
    } else{
        scrollUp.classList.remove("hidden");
    }
})
//scrolls page to home page when Scroll Up is clicked
scrollUp.addEventListener("click", ()=>{document.body.scrollIntoView({behavior:"smooth"});})


const homeSidebarBtn = document.getElementById("home-sidebar-btn");
const projectsSidebarBtn = document.getElementById("projects-sidebar-btn");
const contactSidebarBtn = document.getElementById("contact-sidebar-btn");

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-item");

console.log(navLi)