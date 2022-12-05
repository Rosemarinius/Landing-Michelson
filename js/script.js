$(".header-menu").click(function() {
    if ($(".menu").is(":hidden")) {
        $(".menu").slideDown(500, "linear").css("display", "flex");
    } else {
        $(".menu").slideUp(500, "linear");
    }      
})

function countdown(dateEnd) {
    let timer, days, hours, minutes, seconds;
  
    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();
  
    if (isNaN(dateEnd)) {
      return;
    }
  
    timer = setInterval(calculate, 1000);
  
    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(dateStart.getUTCFullYear(),
        dateStart.getUTCMonth(),
        dateStart.getUTCDate(),
        dateStart.getUTCHours(),
        dateStart.getUTCMinutes(),
        dateStart.getUTCSeconds());
      let timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
  
      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);
        seconds = parseInt(timeRemaining);
  
  
        document.getElementById("days").innerHTML = parseInt(days, 10);
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }
  
    function display(days, hours, minutes, seconds) {}
}
  
countdown ('12/27/2022 02:00:00 AM');

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: '.mc-slider-pagination',
        bulletClass: 'mc-slider-pag-bullet',
        bulletActiveClass: 'mc-slider-pag-bullet--active',
        renderBullet: function(index, className) {
          return '<div class="' + className + '"></div>';
        },
        clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
    }
});
  
