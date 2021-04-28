$(function () {

  wow = new WOW(
    {
      boxClass: 'wow',     
      animateClass: 'animate__animated',
      offset: 0,         
      mobile: true,      
      live: true       
    }
  )
  wow.init();

    $('.header-burger').on('click', function () {
      $('.header-nav__list').toggleClass('active')
    });

});