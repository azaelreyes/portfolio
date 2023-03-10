const scrollUp = document.getElementById("scroll-up");

scrollUp.addEventListener("click", ()=>{document.body.scrollIntoView({behavior:"smooth"});})


const homeSidebarBtn = document.getElementById("home-sidebar-btn");
const projectsSidebarBtn = document.getElementById("projects-sidebar-btn");
const contactSidebarBtn = document.getElementById("contact-sidebar-btn");

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-item");

document.addEventListener("scroll", () =>{
    //shows and hides scroll up button, also toggles homesidebarbtn active link class
    if(document.documentElement.scrollTop < 500 ){
        homeSidebarBtn.classList.add("active-link")
        projectsSidebarBtn.classList.remove("active-link")
        contactSidebarBtn.classList.remove("active-link");
        scrollUp.classList.add("hidden");
    } else{
        scrollUp.classList.remove("hidden");
        homeSidebarBtn.classList.remove("active-link")

    }

    //these toggle the projects & contact sidebar btn active link class
    if(window.pageYOffset > 500 && window.pageYOffset < 2500){
        homeSidebarBtn.classList.remove("active-link")
        projectsSidebarBtn.classList.add("active-link")
        contactSidebarBtn.classList.remove("active-link");
    } 
    if(window.pageYOffset > 2500 && window.pageYOffset <10000){
        projectsSidebarBtn.classList.remove("active-link")
        homeSidebarBtn.classList.remove("active-link")
        contactSidebarBtn.classList.add("active-link");
    }
    
})

