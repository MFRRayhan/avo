const swiper = new Swiper('.home-slider', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiperTestimonial = new Swiper('.carousel-testimony', {
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
    },
});
