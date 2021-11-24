const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq =>{
  faq.addEventListener("click",()=>{
    faq.classList.toggle("active");
    $(this).next().removeClass("faq");
  })
})

