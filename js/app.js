/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Define Global Variables
 *  
*/
// Defining elements**
const navbarlist = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navbarClick = document.querySelector("navbar-click");
const navItemLink = document.querySelector('navItem-Link');
/**
* End Global Variables
* Start Helper Functions
* 
*/
//Determine if an element is in viewport
/** * 
* End Helper Functions
* Begin Main Functions
* 
*/
// build the nav
function buildNav() {
    for (const section of sections) {
        // create the <li> element
        const navItem = document.createElement('li');
        //create the <a> element
        const navItemLink = document.createElement('a');
        navItemLink.className = 'menu__link';

        navItemLink.dataset['section'] = section.id;
        navItemLink.textContent = section.dataset.nav;
        //Append child statements
        navItem.appendChild(navItemLink);
        navbarlist.appendChild(navItem);
        
        //SrcollTo function to view section
        navItemLink.addEventListener("click", (scroll) => {
            section.scrollIntoView({
            behavior : "smooth",
            });
        });
    }
}
// Actice class when near top of viewport
function active() {
    for (section of sections) {
        const navbar__menu = document.querySelector(`a[href="#${section.getAttribute("id")}"]`);
        if (Viewport(section)) {
            section.classList.add("your-active-class");
            navItemLink.classList.add("menu__link__active");
        
            } else {
                section.classList.remove("your-active-class");
                navItemLink.classList.remove("menu__link__active");
            }
        }
    }
buildNav();


// Scroll to anchor ID using scrollTO event


/**
* End Main Functions
* Begin Events
* 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active