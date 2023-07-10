// NAV BAR

const hamburger = document.querySelector('.fa-bars');
const slider = document.querySelector('.slider');
const sliderLinks = document.querySelectorAll('.slider ul li a');

hamburger.addEventListener('click', () => {
    slider.classList.toggle('show');
})

sliderLinks.forEach(link=> {
    link.addEventListener('click', () => {
        slider.classList.toggle('show');
    })
})


// ABOUT TAB SECTIONS


const tabs = document.querySelectorAll('.tab');
const tabTexts = document.querySelectorAll('.tabText');

tabs.forEach((tab, i)=> {

    tab.addEventListener('click', ()=>{
        tabs.forEach(tab=> {
            tab.classList.remove('active');
        })
        tabs[i].classList.add('active');
        tabTexts.forEach(text=> {
            
            text.style.display = "none";
        })
        tabTexts[i].style.display = "block";
    })
})

// LIGHT MODE

const lightMode = document.querySelector('.fa-sun');

lightMode.addEventListener('click', () => {
    
    if (lightMode.classList.contains('fa-sun')){
        lightMode.classList.replace('fa-sun', 'fa-moon');
    } else {
        lightMode.classList.replace('fa-moon', 'fa-sun');
    }

    document.body.classList.toggle('mode');
    
})

