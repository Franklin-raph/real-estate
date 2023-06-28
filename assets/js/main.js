document.querySelectorAll(".faq").forEach(faq => {
    faq.addEventListener("click", function(){
        faq.classList.toggle("show")
        faq.classList.toggle('shadow')
    })
})

const backtotop = document.querySelector(".backtotop")

window.addEventListener("scroll", function() {
    //when the user scrolls 30px from the top, show the 'back-to-top' button(first for crome, second for Safari)
    if(document.documentElement.scrollTop >= 30 || document.body.scrollTop >= 30) {
        backtotop.style.bottom = "20px"
    } else{
        backtotop.style.bottom = "-50px"
    }
})

backtotop.addEventListener("click", () => {
    document.body.scrollTop = "0"
    document.documentElement.scrollTop = 0;
})