//links to socials
const github = document.querySelector('.github')
const linkedin = document.querySelector('.linkedin')
const email = document.querySelector('.email')
const insta = document.querySelector('.ig')

const pageUrl = location.href

const githubLink = "https://github.com/oknappett"
const linkedinLink = "https://www.linkedin.com/in/oliverknappett/"
const igLink = "https://www.instagram.com/o.knappett/"

function sendEmail(){
    var link = "mailto:oknappett@gmail.com"
             + "?subject=" + encodeURIComponent("Contact from your website");
    window.location = link;
}

github.addEventListener('click', () => {
    window.open(githubLink, '_blank').focus()
})
linkedin.addEventListener('click', () => {
    window.open(linkedinLink, '_blank').focus()
})
email.addEventListener('click', () => {
    console.log("email")
    sendEmail()
})
insta.addEventListener('click', () => {
    window.open(igLink, '_blank').focus()
})


//navbar js
let section = document.querySelectorAll('section');
let menu = document.querySelectorAll('#navbar nav a');

window.onscroll = () =>{
    section.forEach((i) =>{
        console.log(menu)
        console.log(section)
        let id  = i.getAttribute('id');
        let top = window.scrollY;
        let offset = i.offsetTop - 150;
        let height = i.offsetHeight;
        if (top >= offset && top < offset + height) {
            menu.forEach((link) => {
                link.classList.remove('active');
                document.querySelector("nav a[href*=" + id + "]").classList.add("active");            });
        }
    });
    stickynavbar()
};                  

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;
function stickynavbar(){
    if(window.pageYOffset >=sticky){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
}
