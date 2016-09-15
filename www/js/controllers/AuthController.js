trottr.controller('AuthController', function($scope, EnemyService){
  // TODO: remove in next commit
  var enemy = EnemyService;
  enemy.enemyHealth = 100;
  enemy.setEnemyHealth(200);
  // end todo
});
