(function() {

    const slides = document.querySelectorAll('.fade-slider__item');
    const visibleClass = 'fade-slider__item--visible'
    let index = 0;
    setInterval(function() {
        slides[index].classList.remove(visibleClass);
        if (index == slides.length - 1) {
            index = 0
        } else {index ++};
        console.info(index)
        slides[index].classList.add(visibleClass);

    }, 5000);
}) ();