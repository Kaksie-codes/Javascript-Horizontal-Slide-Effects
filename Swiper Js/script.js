new Swiper(".swiper",{
    slidesPerView: 3,
    loop: true,  
    spaceBetween: 24,
     autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
     pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})