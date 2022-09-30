 let vh = window.innerHeight * 0.01;
 document.documentElement.style.setProperty('--vh', `${vh}px`);

 var swiper = new Swiper(".hero-js", {
   effect: "fade",
   centeredSlides: true,
   speed: 1000,
   allowTouchMove: false,
   autoplay: {
     delay: 5000,
     disableOnInteraction: false,
   },
 });