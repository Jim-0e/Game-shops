const gallerey = document.querySelector('.gallerey'),
    gallereyBox = document.querySelectorAll('.gallerey-box img');

const gal = document.querySelector('.gal')

gal.style.overflow = 'hidden'
gallerey.style.width = 'max-content'
gallerey.style.overflow = 'hidden'

gallereyBox.forEach(el =>{
    el.style.display = 'block'
})
let i =0;
const id = setInterval(()=>{
    i+=100
    runImg(i)
    if (i>=gallereyBox.length * 200){
        i=0 
    
        
    }
},1000)


function runImg(){
    gallereyBox.forEach(el =>{
        el.style.transform = `translateX(-${i}px)`
        el.style.transition = '6s linear'
    })
}
function leftrunImg(){
    gallereyBox.forEach(el =>{
        el.style.transform = `translateX(${i}px)`
        el.style.transition = '1s'
    })
}



// Меню
const menu = document.querySelector('.menu')
const headerBlock = document.querySelector('.header__block')

const navIcon = document.querySelector('.nav-icon')

const headerBtn = document.querySelector('.header__btn')

headerBtn.onclick = function(){

 menu.classList.toggle('black')

    navIcon.classList.toggle('nav-icon--active')
    menu.classList.toggle('active')
   
    document.body.classList.toggle('no-scroll')

}