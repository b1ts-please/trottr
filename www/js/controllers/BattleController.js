trottr.controller('BattleController', function($scope){

  var canvas = angular.element(document.querySelector('#battle-canvas'))[0];
  var context = canvas.getContext('2d');


  function clear()
  {
    context.clearRect(0,0,100,100);
  }
  context.fillStyle = "red";
  context.fillRect(0,0,100,100);

  clear();

  var rosalka = new Image();
  rosalka.src = 'img/rosalka.png';

  rosalka.onload = function() {
    context.drawImage(rosalka, 250,50,600,800);
  };

  // context.d

  context.fill();



  var weapon    = 7,
  health        = 100,
  enemyWeapon   = 5,
  enemeyHealth  = 100;









  canvas.addEventListener(
     'touchstart',
     console.log("touch banter")
  );

  canvas.addEventListener(
     'touchend',
     console.log("untouch banter")
  );

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function attack(){
    //do animation and lower enemy health by weapon*random number + 3
    var damage = getRandomArbitrary(3,weapon);
      enemyHealth = enemyHealth-damage;
  };
  function enemyAttack(){
    //do animation and lower player health by weapon*random number + 1
    var damage = getRandomArbitrary(1,weapon);
      health = enemyHealth-damage;
  };
  function defend(){
    //if enemyAttack = true player health increases by enemy attack value
  };
  // function enemyDefend(){
  //
  // };
  function potion(){
    health += 10;
  }

  $scope.battle = function(){

  };

});
