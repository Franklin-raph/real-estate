$(".owl-carousel").owlCarousel({
  items: 3,
  loop: true,
  autoplay: true,
  margin: 50,
  dots: true,
  arrows: true,
  nav: false,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1,
      nav: true,
      loop: true,
    },
    600: {
      items: 2,
      nav: true,
      loop: true,
    },
    900: {
        items: 3,
        nav: true,
        loop: true,
      },
    1200: {
      items: 4,
      nav: true,
      loop: true,
    },
  },
});

$(".clients").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 30,
    dots: true,
    // arrows: true,
    nav: false,
    // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
      },
      600: {
        items: 2,
        nav: false,
        dots: true,
        loop: true,
      },
      900: {
          items: 3,
          nav: false,
          dots: true,
          loop: true,
        },
      1200: {
        items: 3,
        nav: false,
        dots: true,
        loop: true,
      },
    },
  });

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

function openLoginModal() {
  document.querySelector(".login-modal-bg").style.display = "flex";
}

function closeLoginModal() {
  document.querySelector(".login-modal-bg").style.display = "none";
}

function openRegisterModal() {
  document.querySelector(".register-modal-bg").style.display = "flex";
}

function closeRegisterModal() {
  document.querySelector(".register-modal-bg").style.display = "none";
}

document.querySelector("#closeLoginForm").addEventListener("click", () => {
  closeLoginModal();
});

document.querySelector("nav li:last-child").addEventListener("click", () => {
  openLoginModal();
});

document.querySelector("#getStarted button").addEventListener("click", () => {
  openLoginModal();
});

document.querySelector(".registerButton").addEventListener("click", () => {
  closeLoginModal();
  openRegisterModal();
});

document.querySelector(".LoginButton").addEventListener("click", () => {
  closeRegisterModal();
  openLoginModal();
});

document.querySelector("#closeRegForm").addEventListener("click", () => {
  closeRegisterModal();
});

document.querySelector(".waitlist button").addEventListener("click", (e) => {
  const email = document.querySelector(".waitlist input[type=text]");
  console.log(email);
  e.preventDefault();
  if (email.value <= 0) {
    email.placeholder = "Please enter an email address";
    email.classList.add("error");
    document.querySelector(".form input").style.border = "2px solid #970000";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    document.querySelector("small").style.display = "block";
    email.classList.add("error");
    document.querySelector(".form input").style.border = "2px solid #970000";
  } else {
    document.querySelector("small").style.display = "none";
    email.classList.remove("error");
    email.placeholder = "jhondoe@gmail.com";
    document.querySelector(".form input").style.border = "2px solid green";
  }
});

$(".counter").counterUp({
  delay: 20,
  time: 2000,
});

AOS.init();

document.querySelector(".menu-icon").addEventListener("click", ()=> {
    document.querySelector("nav ul").classList.toggle("shownav")
})

document.querySelectorAll("nav ul li a").forEach(navLink => {
    navLink.addEventListener("click", ()=> {
        document.querySelector("nav ul").classList.remove("shownav")
    } )
})

$('.grid').isotope({
    // options...
    itemSelector: '.grid-item',
    masonry: {
      columnWidth: 200
    }
  });