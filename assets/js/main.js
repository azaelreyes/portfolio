const scrollUp = document.getElementById("scroll-up");

scrollUp.addEventListener("click", ()=>{document.body.scrollIntoView({behavior:"smooth"});})


const homeSidebarBtn = document.getElementById("home-sidebar-btn");
const projectsSidebarBtn = document.getElementById("projects-sidebar-btn");
const contactSidebarBtn = document.getElementById("contact-sidebar-btn");


const homeSidebarBtnMobile = document.getElementById("home-sidebar-btn-mobile");
const projectsSidebarBtnMobile = document.getElementById("projects-sidebar-btn-mobile");
const contactSidebarBtnMobile = document.getElementById("contact-sidebar-btn-mobile"); 

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-item");

document.addEventListener("scroll", () =>{
    //shows and hides scroll up button, also toggles home sidebar btn active link class
    if(document.documentElement.scrollTop < 500 ){
        homeSidebarBtn.classList.add("active-link")
        projectsSidebarBtn.classList.remove("active-link")
        contactSidebarBtn.classList.remove("active-link");
        homeSidebarBtnMobile.classList.add("active-link-mobile");
        projectsSidebarBtnMobile.classList.remove("active-link-mobile");
        contactSidebarBtnMobile.classList.remove("active-link-mobile");




        scrollUp.classList.add("hidden");
    } else{
        scrollUp.classList.remove("hidden");
        homeSidebarBtn.classList.remove("active-link")
        homeSidebarBtnMobile.classList.remove("active-link-mobile");

    }

    //these toggle the projects & contact sidebar btn active link class
    if(window.pageYOffset > 500 && window.pageYOffset < 2500){
        homeSidebarBtn.classList.remove("active-link")
        projectsSidebarBtn.classList.add("active-link")
        contactSidebarBtn.classList.remove("active-link");

        homeSidebarBtnMobile.classList.remove("active-link-mobile");
        projectsSidebarBtnMobile.classList.add("active-link-mobile");
        contactSidebarBtnMobile.classList.remove("active-link-mobile");

        
    } 
    if(window.pageYOffset > 2500 && window.pageYOffset <10000){
        projectsSidebarBtn.classList.remove("active-link")
        homeSidebarBtn.classList.remove("active-link")
        contactSidebarBtn.classList.add("active-link");

        homeSidebarBtnMobile.classList.remove("active-link-mobile");
        projectsSidebarBtnMobile.classList.remove("active-link-mobile");
        contactSidebarBtnMobile.classList.add("active-link-mobile");

    }
    
})

const setTheme = document.getElementById("set-theme");
const themeColors = document.getElementById("theme-colors");
setTheme.addEventListener("click",()=>{

    if(themeColors.classList.contains("hidden")){
        themeColors.classList.remove("hidden");
        setTheme.style.backgroundColor = "var(--skin-color)";
        setTheme.style.transform = "rotate(90deg)"
    } else{
        themeColors.classList.add("hidden");
        setTheme.style.backgroundColor = "var(--grey-background)";
        setTheme.style.transform = "rotate(0deg)"
    }
   
});



const redTheme = document.getElementById("red-theme");
const greenTheme = document.getElementById("green-theme");
const cyanTheme = document.getElementById("cyan-theme");
const blueTheme = document.getElementById("blue-theme");
const orangeTheme = document.getElementById("orange-theme");

redTheme.addEventListener("click",()=>{
    root.style.setProperty('--skin-color', "hsl(342, 92%, 46%)");
})
greenTheme.addEventListener("click",()=>{
    root.style.setProperty('--skin-color', "hsl(72, 81%, 43%)");
})
cyanTheme.addEventListener("click",()=>{
    root.style.setProperty('--skin-color', "rgb(0, 157, 171)");
})
blueTheme.addEventListener("click",()=>{
    root.style.setProperty('--skin-color', "rgb(0, 60, 199)");
})
orangeTheme.addEventListener("click",()=>{
    root.style.setProperty('--skin-color', "rgb(229, 95, 23)");
})






let root = document.documentElement;


let nightModeCheck = true;
const dayModeBtn = document.getElementById("day-mode");
const nightModeBtn = document.getElementById("night-mode");

function toggleThemeMode(){
    if(nightModeCheck){
        nightModeCheck = false
        nightModeBtn.classList.remove("hidden");
        nightModeBtn.style.visibility = "visible";
        dayModeBtn.classList.add("hidden");
        dayModeBtn.style.visibility = "hidden";
        root.style.setProperty('--body-color', "white");
        root.style.setProperty('--grey-background', "rgb(206 206 206)");
        root.style.setProperty('--title-color', "black");
        root.style.setProperty('--text-color', "black");
    } else{
        nightModeCheck = true;
        nightModeBtn.classList.add("hidden");
        nightModeBtn.style.visibility = "hidden";

        dayModeBtn.classList.remove("hidden");
        dayModeBtn.style.visibility = "visible";

        //make day-mode changes
        //grey dark background add filter to make lighter color
        //text colors to black
        root.style.setProperty('--body-color', "black");
        root.style.setProperty('--grey-background', "rgb(42, 38, 38)");
        root.style.setProperty('--title-color', "white");
        root.style.setProperty('--text-color', "white");

    }
}
dayModeBtn.addEventListener("click", toggleThemeMode);
nightModeBtn.addEventListener("click", toggleThemeMode);

const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuNavBar = document.getElementById("mobile-menu-navbar");
mobileMenu.addEventListener("click", ()=>{
    console.log("Mobile Menu Clicked");
    if(mobileMenuNavBar.classList.contains("mobile-menu-navbar-show")){
        mobileMenuNavBar.classList.remove("mobile-menu-navbar-show");
        setTheme.style.visibility = "hidden";
        themeColors.classList.add("hidden");
        dayModeBtn.classList.add("hidden"); 
        nightModeBtn.classList.add("hidden");    


    }else{
        mobileMenuNavBar.classList.add("mobile-menu-navbar-show");
        setTheme.style.visibility = "visible";

        if(!nightModeCheck){
            nightModeBtn.classList.remove("hidden");
            dayModeBtn.classList.add("hidden"); 
            dayModeBtn.style.visibility = "hidden"   
            nightModeBtn.style.visibility = "visible";
            nightModeCheck = false;

    
        } else {
            dayModeBtn.classList.remove("hidden");
            nightModeBtn.classList.add("hidden");    
            nightModeBtn.style.visibility = "hidden";
            dayModeBtn.style.visibility = "visible"   
            nightModeCheck = true;

        }
    }
});