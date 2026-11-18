const body = document.querySelector('body')
const topBtn = document.querySelector('.top')
const mNavBtn = document.querySelector('.mob-nav-btn')
const navBtns = document.querySelectorAll('nav ul li a')

AOS.init({
    duration: 1000,
    easing: 'ease-out',
    offset: 80

});

navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()

        const id = btn.getAttribute('href')
        const target = document.querySelector(id)
        const header = document.querySelector('header').offsetHeight
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        })
        // body.classList.remove('m-nav-open')
    })
})

const guide = document.querySelector('.mystery-guide')
const tabs = guide.querySelectorAll('.guide-tabs > li')
const contents = guide.querySelectorAll('.guide-content > li')


init(0) // 첫 번째 메뉴카드가 선택됨

function init(num) {  // 전달받은 번호의 메뉴 / 카드 선택 
    tabs[num].classList.add('on')
    contents[num].classList.add('on')
}

function reset() {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('on')
        contents[i].classList.remove('on')

    }
}

tabs.forEach(function (tab, i) {
    const button = tab.querySelector('button')

    button.addEventListener('click', function () {
        reset()
        init(i)
    })
})


topBtn.addEventListener('click', function (e) {
    e.preventDefault(e)

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

window.addEventListener('scroll', function () {
    console.log(window.scrollY)
    if (window.scrollY > 50) {
        body.classList.add('scroll')
    } else {
        body.classList.remove('scroll')
    }
})



mNavBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('m-nav-open')
})

body.classList.add('m-nav-open')



const swiper = new Swiper('.hero-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    effect: 'fade',
fadeEffect: {
    crossFade: true
},
speed: 800
});