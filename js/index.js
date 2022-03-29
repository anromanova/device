// Open and close map pop-up
const mapSelect = document.querySelector('.contacts-content-map');
const mapOpen = document.querySelector('.modal-map');
const btnMapClose = document.querySelector('.btn-close-map');


mapSelect.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapOpen.classList.add('modal-map-open');
    document.body.style.overflow = 'hidden';
});

btnMapClose.addEventListener('click', () => {
    mapOpen.classList.remove('modal-map-open');
    document.body.style.overflowY = 'auto';
});

window.addEventListener('keydown', function(evt) {
    if (evt.key === "Escape") {
        if (mapOpen.classList.contains('modal-map-open') || contactFormOpen.classList.contains('modal-contacts-open')) {
            evt.preventDefault();
            mapOpen.classList.remove('modal-map-open');
            contactFormOpen.classList.remove('modal-contacts-open')
        }
    }
})


// open and close contact-form
const btnContact = document.querySelector('.btn-contacts');
const contactFormOpen = document.querySelector('.modal-contacts');
const btnContactClose = document.querySelector('.btn-close-contacts');
const login = contactFormOpen.querySelector('[name="name"]');
const email = contactFormOpen.querySelector('[name="login"]')
const form = contactFormOpen.querySelector('.login-form')


btnContact.addEventListener('click', function(evt) {
    evt.preventDefault();
    contactFormOpen.classList.add('modal-contacts-open');
    login.focus();
    document.body.style.overflow = 'hidden';
})

btnContactClose.addEventListener('click', () => {
    contactFormOpen.classList.remove('modal-contacts-open');
    document.body.style.overflowY = 'auto';
})

form.addEventListener('submit', function(evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        login.classList.add('form-field-invalid');
        console.log('lol')
    }

})

// main slider
const sliderButtons = document.querySelectorAll('.slider-slider-btn');
const sliders = document.querySelectorAll('.slider-item');
const btnSlider1 = document.querySelector('.slider-btn-1');
const btnSlider2 = document.querySelector('.slider-btn-2');
const btnSlider3 = document.querySelector('.slider-btn-3');
const slider1 = document.querySelector('.slider-item-1');
const slider2 = document.querySelector('.slider-item-2');
const slider3 = document.querySelector('.slider-item-3');


sliderButtons.forEach(button => {button.addEventListener('click', changeSlider)})

function changeSlider(event) {
    sliderButtons.forEach((button) => button.classList.remove('slider-btn-current'))
    event.target.classList.toggle('slider-btn-current');
    if (btnSlider1.classList.contains('slider-btn-current')) {
        sliders.forEach((slide) => slide.classList.remove('slider-active'))
        slider1.classList.add('slider-active')

    }
    else if (btnSlider2.classList.contains('slider-btn-current')) {
        sliders.forEach((slide) => slide.classList.remove('slider-active'))
        slider2.classList.add('slider-active')
    }
    else {
        sliders.forEach((slide) => slide.classList.remove('slider-active'))
        slider3.classList.add('slider-active')
    }
}

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