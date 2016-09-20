trottr.controller('ProfileController', function($scope){
  $scope.openTab = function(tabName){
    $('#tab-armor').removeClass('active');
    $('#tab-achievement').removeClass('active');
    $('#tab-equipment').removeClass('active');
    $('#armor').css('display', 'none');
    $('#achievement').css('display', 'none');
    $('#equipment').css('display', 'none');
    $('#tab-' + tabName).addClass('active');
    $('#' + tabName).css('display', 'block');
    if(tabName == 'equipment'){
      $('.weapons').owlCarousel({
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
      })
    }
  }

  $scope.openTab('armor');
});
