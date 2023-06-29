$('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 50,
    dots:true,
    arrows:true,
    nav: false,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        700:{
            items:2,
            nav:true,
            loop:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})


document.querySelectorAll(".faq").forEach((faq) => {
  faq.addEventListener("click", function () {
    faq.classList.toggle("show");
    faq.classList.toggle("shadow");
  });
});

const backtotop = document.querySelector(".backtotop");
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  //when the user scrolls 30px from the top, show the 'back-to-top' button(first for crome, second for Safari)
  if (document.documentElement.scrollTop >= 550 || document.body.scrollTop >= 550) {
    backtotop.style.bottom = "20px";
    nav.style.top = "-100px";
  } else {
    backtotop.style.bottom = "-50px";
    nav.style.top = "0";
  }
});

backtotop.addEventListener("click", () => {
  document.body.scrollTop = "0";
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 30 || document.body.scrollTop >= 30) {
    nav.style.backgroundColor = "#302E2E";
    nav.style.position = "fixed";
  } else {
    nav.style.position = "relative";
    nav.style.backgroundColor = "transparent";
  }
});
