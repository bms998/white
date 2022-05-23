let span = document.querySelector(".scrollToTop");

let toope = document.querySelector(".navbar-expand-lg");

let serch = document.querySelector(".btn-outline-primary");

window.onscroll = function (){
    if(window.scrollY >= 850)
    {
      span.classList.add("show");
      toope.classList.add("fixed-top", "navbar-dark", "container-fluid");
      serch.classList.add("srch");
    }else{
      toope.classList.remove("fixed-top", "navbar-dark", "container-fluid");
      serch.classList.remove("srch");
      span.classList.remove("show");
    }};

    span.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };