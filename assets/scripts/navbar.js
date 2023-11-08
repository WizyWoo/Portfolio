document.getElementById('overworked-nav').addEventListener('click', function() {
    var targetSection = document.getElementById('overworked');
    var targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

document.getElementById('a-gods-draw-nav').addEventListener('click', function() {
    var targetSection = document.getElementById('a-gods-draw');
    var targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

document.getElementById('about-me').addEventListener('click', function() {
    var targetSection = document.getElementById("start");
    var targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
})