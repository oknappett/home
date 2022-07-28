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