const sliderContainer = document.querySelector('.slider-container');
const imageSliders = document.querySelectorAll('.images img');
const prevBtn = document.querySelector('.slide-left');
const nextBtn = document.querySelector('.slide-right');
const bottomSliderBtn = document.querySelectorAll('.btn-sliders span');

// let the current Index be zero
let current = 0;

// if any bottom slider is clicked, show the appropriate image
bottomSliderBtn.forEach(button => {
    button.addEventListener('click', () => {        
        current = button.id;
        showSlide()
    })
})

// remove all pictures and bottom slide background colors
function reset(){
    bottomSliderBtn.forEach(button => {
        button.style.backgroundColor = ''
    })
    imageSliders.forEach(image => {
        image.style.display = 'none';
    })
}

// shows the appropiate image on the screen
function showSlide(){
    reset();
    imageSliders[current].style.display = 'block';    
    bottomSliderBtn[current].style.backgroundColor = 'red';
}

showSlide();

// displays next image
nextBtn.addEventListener('click', () => {
    if(current == imageSliders.length -1){
        current = -1
    }
    current++;
    showSlide();
});

// displays previous image
prevBtn.addEventListener('click', () => {
    if(current == 0){
        current = imageSliders.length
    }
    current--;
    showSlide();
});


// automatically changes the image displayed every two 5 seconds
function autoSlide(){
    if(current == imageSliders.length -1){
        showSlide()
        current = 0;
    }else{
        showSlide();
        current++;
    }
}

setInterval(autoSlide, 5000)
