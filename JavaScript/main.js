var swiper = new Swiper(".slide-content", {
    slidesPreView: 3,
    spaceBetween: 30,
    slidesPreGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        e1: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev"
    },
});