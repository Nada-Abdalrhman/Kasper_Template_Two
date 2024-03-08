// Start Header
let searchIcon = document.getElementById('search-icon');
let searchInput = document.getElementById('search');
let searchSpan = document.getElementById('search-span');
searchIcon.onclick = function () {
    if (searchInput.style.display == "none") {
        searchInput.style.display = "block";
        searchSpan.style.display = "block";
    } else {
        searchInput.style.display = "none";
        searchSpan.style.display = "none";
    }
}
// End Header
// Start Landing
// Get Main Data
let sliderItems = Array.from(document.querySelectorAll('.slide'));
let slidesCount = sliderItems.length;
let currentSlide = 2;
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;
// Get A Ul
let paginationUl = document.getElementById('pagination-ul');
// Get Pagination Items
let paginationUlItems = Array.from(document.querySelectorAll('#pagination-ul li'));
// Loop Through All Bullets Items
for (var i = 0; i < paginationUlItems.length; i++) {
    paginationUlItems[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}
// Trigger The Checker Function
theChecker();
// Next Slide Function
function nextSlide() {
    if (nextBtn.classList.contains('disabled')) {
        // Do Nothing
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}
// Previous Slide Function
function prevSlide() {
    if (prevBtn.classList.contains('disabled')) {
        // Do Nothing
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}
function theChecker() {
    // Remove All Active Classes
    removeAllActive();
    // Set Active Class on Current Slide
    sliderItems[currentSlide -1].classList.add('active');
    // Set Active Class on Current Bullets
    paginationUl.children[currentSlide -1].classList.add('active');
    // Check If Current Slide is The First
    if (currentSlide == 1) {
        // Add Disabled Class on Previous Button
        prevBtn.classList.add('disabled');
    } else {
        // Remove Disabled Class from Previous Button
        prevBtn.classList.remove('disabled');
    }
    // Check If Current Slide is The Last
    if (currentSlide == slidesCount) {
        // Add Disabled Class on Next Button
        nextBtn.classList.add('disabled');
    } else {
        // Remove Disabled Class from Previous Button
        nextBtn.classList.remove('disabled');
    }
}
// Remove All Active Classes From Slides and Pagination Bullets
function removeAllActive() {
    // Loop Through Slides
    sliderItems.forEach(function (slide) {
        slide.classList.remove('active');
    });
    // Loop Through Pagination Bullets
    paginationUlItems.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}
// End Landing
// Start Portfolio
// Get Main Data
let shuffle = document.getElementById('shuffle');
let shuffleItems = Array.from(shuffle.querySelectorAll('li'));
let imagesContainer = document.getElementById('images-container');
let imagesContainerBoxes = Array.from(imagesContainer.querySelectorAll('.box'));
for (let i = 0; i < shuffleItems.length; i++) {
    shuffleItems[i].onclick = function () {
        shuffleItems.forEach(function (items) {
            items.classList.remove('active');
        });
        shuffleItems[i].classList.add('active');
        imagesContainerBoxes.forEach(function (box) {
            if (shuffleItems[i].textContent.toLowerCase() == 'all') {
                box.style.display = 'block';
            } else if (box.classList.contains(shuffleItems[i].textContent.toLowerCase())) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        })
    }
}
// End Portfolio
// Start Stats
let numItems = document.querySelectorAll("#stats .num");
let statsSection = document.querySelector('#stats');
let started = false;
function startCount(el) {
    let goal = parseFloat(el.dataset.goal);
    let counter2 = 0;
    let count = setInterval(() => {
        if (Number.isInteger(goal) && goal <= 999) {
            el.textContent++;
            if(el.textContent == goal) {
                clearInterval(count);
            }
        } else if (Number.isInteger(goal) && goal >= 1000) {
            el.textContent = counter2;
            counter2++;
            if (counter2 >= 1000) { 
                el.textContent = (parseInt(counter2) + 1).toLocaleString();
                counter2++;
            }
            if(counter2 == goal) {
                clearInterval(count);
            }
        } else if (!(Number.isInteger(goal))) {
            let currentValue = parseFloat(el.textContent);
            currentValue += 0.001;
            el.textContent = currentValue.toFixed(3);
            if (Math.abs(currentValue - goal) < 0.001) {
                clearInterval(count);
            }
        }
    }, 1000 / 1743);
}
// End Stats
// Start Our Skills
// Start Testimonials
let testimonialsSlidersItems = Array.from(document.querySelectorAll('.testimonials-slide'));
let testimonialsSlidesCount = testimonialsSlidersItems.length;
let currentTestimonialsSlide = 2;
let paginationTestimonialUl = document.getElementById('testimonials-bullets');
let paginationTestimonialUlItems = Array.from(document.querySelectorAll('#testimonials-bullets li'));
for (var i = 0; i < paginationTestimonialUlItems.length; i++) {
    paginationTestimonialUlItems[i].onclick = function () {
        currentTestimonialsSlide = parseInt(this.getAttribute('data-index'));
        theTestimonialsChecker();
    }
}
theTestimonialsChecker();
function theTestimonialsChecker() {
    // Remove All Active Classes
    removeAllTestimonialsActive();
    // Set Active Class on Current Slide
    testimonialsSlidersItems[currentTestimonialsSlide -1].classList.add('active');
    // Set Active Class on Current Bullets
    paginationTestimonialUl.children[currentTestimonialsSlide -1].classList.add('active');
}
function removeAllTestimonialsActive() {
    // Loop Through Slides
    testimonialsSlidersItems.forEach(function (slide) {
        slide.classList.remove('active');
    });
    // Loop Through Pagination Bullets
    paginationTestimonialUlItems.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}
// End Testimonials
// Start Skills
let skillsSection = document.querySelector('.skills');
let spans = document.querySelectorAll('.prog span');
// End Skills
// End Our Skills
// Start Main Scroll Function
window.onscroll = function () {
    // Start Stats
    if (window.scrollY >= statsSection.offsetTop - 300) {
        if (!started) {
            numItems.forEach((num) => startCount(num));
        }
        started = true;
    }
    // End Stats
    // Start Skills
    if (window.scrollY >= skillsSection.offsetTop - 300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    // End Skills
}
// End Main Scroll Function