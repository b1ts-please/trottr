trottr.controller('StoreController', function($scope){
  setTimeout(function(){
    jQuery('.weapons, .shields, .coins').owlCarousel({
      loop:false,
      margin:15,
      nav:false,
      responsive:{
        0:{
          items:3
        },
        600:{
          items:5
        },
      }
    });
  }, 0);
});
