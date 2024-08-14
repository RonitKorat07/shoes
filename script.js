const menu = document.querySelector(".menu");

menu.addEventListener("click" , function(){
   const slidebar = document.getElementById("slidebar");
   slidebar.classList.toggle("show");
   // ul.classList.toggle("show");
})

window.onscroll = () =>{
   const slidebar =  document.getElementById("slidebar");
   slidebar.classList.remove("show")
}

const goTopBtn = document.querySelector(".scroll");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});

const scroll = document.querySelector(".scroll");

scroll.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
