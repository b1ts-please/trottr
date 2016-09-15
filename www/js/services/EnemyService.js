trottr.service('EnemyService', function(){
  this.enemyHealth = 0;
  this.enemyDamage = 0;
  this.enemySpeed = 0;
  this.enemyBlock = true;
  this.experience = 0;
  this.enemyLevel = 0;

  this.setEnemyHealth = function(enemyHealth){
    this.enemyHealth = enemyHealth;
  }

  this.getEnemyHealth = function(){
    return this.enemyHealth;
  }
});
