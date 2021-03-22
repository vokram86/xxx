//JS:
function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();

//===========================================================

$('.header-burger').click(function () {
   $('.header-burger, .header-menu').toggleClass('act');
   $('body').toggleClass('lock');
});

$('.header-menu').click(function () {
   $('.header-burger, .header-menu').removeClass('act');
   $('body').removeClass('lock');
});

//===========================================================

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
}
