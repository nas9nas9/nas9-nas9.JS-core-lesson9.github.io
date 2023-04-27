const down = document.querySelector('.down');
const slider = document.querySelector('.slider');
const strip = document.querySelector('.strip');
const img = document.querySelector('img');
const up = document.querySelector('.up');


down.addEventListener('click', ()=> {
   slider.scrollIntoView({behavior: 'smooth'})
})

window.addEventListener('scroll', function(){
        if (window.scrollY <= 300) {
            down.style.transform = `scale(${window.scrollY / 400 + 1})`;
        }
        else if( window.scrollY > 400 && window.scrollY <= 600){
            slider.style.left = `${window.scrollY/4 - 90}px`;
            strip.style.left = `${window.scrollY/4 - 90}px`;
            strip.style.width = `${((window.scrollY - 400)/60 + 1)*130}px`;
            
        }
        else if( window.scrollY > 600 && window.scrollY < 800){
            img.style.left = `${700-(window.scrollY-600)/2}px`;
        }
        else if (window.scrollY >= 800) {
            up.style.transform = `scale(${1 - (window.scrollY - 800) / 800})`;
        }
      
    })


up.addEventListener('click', ()=> {
    down.scrollIntoView({behavior: 'smooth'})
 })