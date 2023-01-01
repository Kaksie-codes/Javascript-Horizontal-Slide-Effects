const sliderContainer = document.querySelector('.slider-container');
const imageSliders = document.querySelectorAll('.slider');
const prevBtn = document.querySelector('.slide-left');
const nextBtn = document.querySelector('.slide-right');


let current = 0;



function reset(){
    imageSliders.forEach(image => {
        image.style.display = 'none';
    })
}

function showSlide(){
    reset();
    imageSliders[current].style.display = 'block';
    imageSliders[current].style.transition = '5s ease-in-out'
}

showSlide();

nextBtn.addEventListener('click', () => {
    if(current == imageSliders.length -1){
        current = -1
    }
    current++;
    showSlide();
});

prevBtn.addEventListener('click', () => {
    if(current == 0){
        current = imageSliders.length
    }
    current--;
    showSlide();
});

// setInterval(() => {
//     if(current == imageSliders.length -1){
//         showSlide()
//         current = 0;
//     }else{
//         showSlide();
//         current++;
//     }
    
// },7000)