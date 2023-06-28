document.querySelectorAll(".faq").forEach(faq => {
    faq.addEventListener("click", function(){
        faq.classList.toggle("show")
        faq.classList.toggle('shadow')
    })
})