// slider code
let slideIndex = 0
const slides = document.getElementsByClassName("slide")

const showSlides = () =>{

    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    slideIndex++
    if (slideIndex > slides.length){
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block"
    setTimeout(showSlides, 4000)
}
showSlides()


//  customer review slider code
let slideIndexReview = 0
const reviews = document.getElementsByClassName("customer_review")

const showSlidesReview = () =>{

    for(var i = 0; i < reviews.length; i++){
        reviews[i].style.display = "none"
    }

    slideIndexReview++
    if (slideIndexReview > reviews.length){
        slideIndexReview = 1
    }
    reviews[slideIndexReview - 1].style.display = "block"
    setTimeout(showSlidesReview, 6000)
}
showSlidesReview()


//  navbar toggle code here

var mToggle = document.getElementById("menu-toggle")
var menu = document.getElementById("menu")

const active = () => {
    menu.classList.toggle("menu-active")

}

mToggle.addEventListener("click", active)

//CODE FOR BACK TO TOP
const moveToTop = () =>{
    document.documentElement.scrollTop = 0
}