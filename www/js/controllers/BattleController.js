trottr.controller('BattleController', function($scope){

  var canvas = angular.element(document.querySelector('#battle-canvas'))[0];
  var context = canvas.getContext('2d');

  var shield;
  var weapon;

  canvas.addEventListener(
     'touchstart',
     console.log("touch banter")
  );

  canvas.addEventListener(
     'touchend',
     console.log("untouch banter")
  );

  function attack(enemy){};
  function defend(enemy){};
  function enemyAttack(){};
  function enemyDefend(){};

  $scope.battle = function(){

  };

});
