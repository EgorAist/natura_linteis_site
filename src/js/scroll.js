// Когда пользователь прокручивает вниз 250px от верхней части документа, изменяется размер навбара и его содержимого
window.onscroll = function() {scrollFunction()};

// изменение navbar при прокрутке
function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("navbar").style.height = "40px";
    document.getElementById("navbar-logotype").style.height = "30px";
    document.getElementById("navbar-logotype").style.width = "120px";
    document.getElementById("navbar-menu").style.fontSize = "18px";
  } else {
    document.getElementById("navbar").style.height = "80px";
    document.getElementById("navbar-logotype").style.height = "60px";
    document.getElementById("navbar-logotype").style.width = "240px";
    document.getElementById("navbar-menu").style.fontSize = "24px";
  }
}