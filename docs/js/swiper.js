const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
    loop: true,
});

AOS.init();