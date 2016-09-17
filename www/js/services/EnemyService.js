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

  this.setEnemyDamage = function(enemyDamage){
    this.enemyDamage = enemyDamage;
  }

  this.getEnemyDamage = function(){
    return this.enemyDamage;
  }

  this.setEnemySpeed = function(enemySpeed){
    this.enemySpeed = enemySpeed;
  }

  this.getEnemySpeed = function(){
    return this.enemySpeed;
  }

  this.setEnemyBlock = function(enemyBlock){
    this.enemyBlock = enemyBlock;
  }

  this.getEnemyBlock = function(){
    return this.enemyBlock;
  }

  this.setEnemyExperience = function(enemyExperience){
    this.enemyExperience = enemyExperience;
  }

  this.getEnemyExperience = function(){
    return this.enemyExperience;
  }

  this.setEnemylevel = function(enemyLevel){
    this.enemylevel = enemyLevel;
  }

  this.getEnemyLevel = function(){
    return this.enemyLevel;
  }

});
