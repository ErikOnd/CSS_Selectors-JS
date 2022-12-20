//13
let nodeNavbar = document.getElementsByTagName('nav')[0]
let nodeSpan = document.createElement('span')
nodeSpan.innerText = 'another Span'
nodeNavbar.appendChild(nodeSpan)

//14
let nodeH1 = document.getElementsByTagName('h1')[0]
nodeH1.style.color = 'red'

//15
let jumbotron = document.getElementsByClassName('jumbotron')[0]
jumbotron.style.backgroundColor = 'yellow'

//16
let nodeTwitter = document.querySelector('.p-4:nth-of-type(3) li:nth-of-type(2)')
nodeTwitter.remove()

//17
let nodeP50s = document.querySelectorAll('.blog-post p:first-of-type')
for (nodeP50 of nodeP50s) {
    charakters = nodeP50.innerText.split('')
    charakters.splice(0, 50)
    nodeP50.innerText = charakters.join('')
}

//18
/* let blogMain = document.querySelector('.col-md-8.blog-main')
let newBlogPost = document.createElement('div')
newBlogPost.classList.add('blog-post')
newBlogPost.appendChild(newBlogPost) */

//19

let olderBtn = document.querySelector('.btn.btn-outline-primary')

olderBtn.addEventListener('click', function () {
    let lastPost = document.querySelector('.blog-post:last-of-type')
    lastPost.remove()
})

//20
let author = document.querySelector('footer a:nth-of-type(2)')

author.addEventListener('mouseover', function () {
    alert('Mark Otto')
})

//21


