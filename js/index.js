// Open and close map pop-up
const mapSelect = document.querySelector('.contacts-content-map');
const mapOpen = document.querySelector('.modal-map');
const btnMapClose = document.querySelector('.btn-close-map');
const scroll = document.querySelector('body')


mapSelect.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapOpen.classList.add('modal-map-open');
    scroll.classList.add('modal-scroll');
    // document.body.style.overflow = 'hidden';
});

btnMapClose.addEventListener('click', () => {
    mapOpen.classList.remove('modal-map-open');
    scroll.classList.remove('modal-scroll');
    // document.body.style.overflowY = 'auto';
});

window.addEventListener('keydown', function(evt) {
    if (evt.key === "Escape") {
        if (mapOpen.classList.contains('modal-map-open') || contactFormOpen.classList.contains('modal-contacts-open')) {
            evt.preventDefault();
            mapOpen.classList.remove('modal-map-open');
            contactFormOpen.classList.remove('modal-contacts-open');
            scroll.classList.remove('modal-scroll');
        }
    }
})


// open and close contact-form
const btnContact = document.querySelector('.btn-contacts');
const contactFormOpen = document.querySelector('.modal-contacts');
const btnContactClose = document.querySelector('.btn-close-contacts');
const login = contactFormOpen.querySelector('[name="name"]');
const email = contactFormOpen.querySelector('[name="login"]')
const form = contactFormOpen.querySelector('.login-form');
let isStorageSupport = true;
const storage = '';


try {
    storage = localStorage.getItem('login');
}
catch(err) {
    isStorageSupport = false;
}

btnContact.addEventListener('click', function(evt) {
    evt.preventDefault();
    contactFormOpen.classList.add('modal-contacts-open');
 
    scroll.classList.add('modal-scroll');
    if (storage) {
        login.value = storage;
        email.focus();
    }
    else {
        login.focus();
    }
})

btnContactClose.addEventListener('click', () => {
    contactFormOpen.classList.remove('modal-contacts-open');
    scroll.classList.remove('modal-scroll');
    email.classList.remove('form-field-invalid');
    login.classList.remove('form-field-invalid');

})

form.addEventListener('submit', function(evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        if (!login.value) {
            login.classList.add('form-field-invalid');
        }
        email.classList.add('form-field-invalid')
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem('login', login.value);
        }
    }
})

// main slider
const sliderButtons = document.querySelectorAll('.slider-slider-btn');
const sliders = document.querySelectorAll('.slider-item');
let index = 0;


const currentSlide = ind => {
    activeButton(ind);
    activeSlide(ind);
}

const activeButton = n => {
    for (button of sliderButtons) {
        button.classList.remove('slider-btn-current');
    }
    sliderButtons[n].classList.add('slider-btn-current');
}

const activeSlide = n => {
    for (slide of sliders) {
        slide.classList.remove('slider-active');
    }
    sliders[n].classList.add('slider-active');
}

const nextSlide = () => {
    if(index === sliders.length - 1) {
        index = 0;
        currentSlide(index);
    }
    else {
        index ++;
        currentSlide(index);
    }
}

// const prevSlide = () => {
//     if(index === 0) {
//         sliders.length - 1;
//         currentSlide(index);
//     }
//     else {
//         index --;
//         currentSlide(index);
//     }
// }

// setInterval(nextSlide, 5000);

sliderButtons.forEach((button, indexButton) => {button.addEventListener('click', () => {
    index = indexButton;
    currentSlide(indexButton);
    })
})


//services slider
const servicesButtons = document.querySelectorAll('.services-nav-item a');
const btnServices1 = document.querySelector('.services-1 a');
const btnServices2 = document.querySelector('.services-2 a');
const btnServices3 = document.querySelector('.services-3 a');
const servicesCards = document.querySelectorAll('.services-item');
const servicesDelivery = document.querySelector('.services-delivery');
const servicesGuarantee = document.querySelector('.services-guarantee');
const servicesCredit = document.querySelector('.services-credit');


servicesButtons.forEach(button => {button.addEventListener('click', changeService)});

function changeService(event) {
    servicesButtons.forEach((button) => button.classList.remove('button-services-active'))
    event.target.classList.toggle('button-services-active');
    if (btnServices1.classList.contains('button-services-active')) {
        console.log('1')
        servicesCards.forEach((card) => card.classList.remove('services-active'))
        servicesDelivery.classList.add('services-active')

    }
    else if (btnServices2.classList.contains('button-services-active')) {
        console.log('2')
        servicesCards.forEach((card) => card.classList.remove('services-active'))
        servicesGuarantee.classList.add('services-active')
    }
    else {
        console.log('3')
        servicesCards.forEach((card) => card.classList.remove('services-active'))
        servicesCredit.classList.add('services-active')
    }
}