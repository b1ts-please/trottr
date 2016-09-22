trottr.controller('BattleController', function($scope, $location, PlayerService, EnemyService){
  var enemyAttackInterval;
  var blockAttack = false;

  $('.defense a').css('left', '0');
  $('.attack a').css('top', '0');

  PlayerService.setPlayerHealth(500);
  PlayerService.setPlayerMaxHealth(500);
  EnemyService.setEnemyHealth(300);
  EnemyService.setEnemyMaxHealth(300);

  $scope.leaveBattle = function(){
    $location.path('/map');
  }

  $scope.attack = function(){
    if(!blockAttack){
      $('.attack a').css('top', '-3em');
      setTimeout(function(){ $('.attack a').css('top', '0'); }, 500);
      enemyAttackInterval = setInterval(function(){ demonAttacks() }, getRandom(2000, 5000));
      var damage = getRandom(0, 100);
      EnemyService.setEnemyHealth(EnemyService.getEnemyHealth() - damage);
      blockAttack = true;
      $('.attack a').css('opacity', '0.5');
      setTimeout(function(){ blockAttack = false; $('.attack a').css('opacity', '1'); }, 2000);
      updateHealthBars();
      checkWinLoose();
    }
  }

  $scope.defense = function(){
    $('.defense a').css('left', '-3em');
    setTimeout(function(){ $('.defense a').css('left', '0'); }, 500);
    PlayerService.setPlayerDefending(true);
    setTimeout(function(){ PlayerService.setPlayerDefending(false); }, 3000);
  }

  function demonAttacks(){
    // animation
    var scaleValue = 1;
    $('.demon img').css({
      '-webkit-transform' : 'scale(' + scaleValue + ')',
      '-moz-transform'    : 'scale(' + scaleValue + ')',
      '-o-transform'      : 'scale(' + scaleValue + ')',
      'transform'         : 'scale(' + scaleValue + ')'
    });
    scaleValue = 0.8;
    setTimeout(function(){
      $('.demon img').css({
        '-webkit-transform' : 'scale(' + scaleValue + ')',
        '-moz-transform'    : 'scale(' + scaleValue + ')',
        '-o-transform'      : 'scale(' + scaleValue + ')',
        'transform'         : 'scale(' + scaleValue + ')'
      });
    }, 500);

    // makes damage to player
    if(!PlayerService.getPlayerDefending()){
      var damage = getRandom(0, 70);
      PlayerService.setPlayerHealth(PlayerService.getPlayerHealth() - damage);
      updateHealthBars();
      checkWinLoose();
    }
    clearInterval(enemyAttackInterval);
    enemyAttackInterval = setInterval(function(){ demonAttacks(); }, getRandom(2000, 5000));
  }

  function updateHealthBars(){
    var demonHealthPercent = (EnemyService.getEnemyHealth() * 100) / EnemyService.getEnemyMaxHealth();
    if(demonHealthPercent <= 0)
      demonHealthPercent = 0;
    $('#demon-health .progress').css('width', demonHealthPercent + '%');
    $('#demon-health .progress-bar-cursor').css('left', (demonHealthPercent - 5) + '%');
    $('#demon-health .progress-bar-cursor').text(parseInt(EnemyService.getEnemyHealth()));
    var playerHealthPercent = (PlayerService.getPlayerHealth() * 100) / PlayerService.getPlayerMaxHealth();
    if(playerHealthPercent <= 0)
      playerHealthPercent = 0;
    $('#player-health .progress').css('width', playerHealthPercent + '%');
    $('#player-health .progress-bar-cursor').css('left', (playerHealthPercent - 5) + '%');
    $('#player-health .progress-bar-cursor').text(parseInt(PlayerService.getPlayerHealth()));
  }

  function checkWinLoose(){
    if(PlayerService.getPlayerHealth() <= 0){
      finishGame('enemy');
    }
    if(EnemyService.getEnemyHealth() <= 0){
      finishGame('player');
    }
  }

  function finishGame(winner){
    clearInterval(enemyAttackInterval);
    $('#ghost-battle .big-icon-wrapper i').removeClass('fa-smile-o');
    $('#ghost-battle .big-icon-wrapper i').removeClass('fa-times');
    if(winner == 'enemy'){
      $('#ghost-battle .big-icon-wrapper i').addClass('fa-times');
      $('#ghost-battle .ghost-head h2').text('You lost');
      $('#ghost-battle .ghost-body').text('You run away in terror the demon maintains control of here');
    }
    else if(winner == 'player'){
      $('#ghost-battle .big-icon-wrapper i').addClass('fa-smile-o');
      $('#ghost-battle .ghost-head h2').text('You win');
      $('#ghost-battle .ghost-body').text('You have earned soul shards from this demon');
    }
    else{
      console.log('error');
    }
    $('#ghost-battle').show();
  }

  function getRandom(min, max){
    return Math.random() * (max - min) + min;
  }
});
