trottr.service('PlayerService', function(){
  this.playerHealth = 0;
  this.playerLevel = 0;
  this.playerDefending = false;
  this.playerMaxHealth = 0;

  this.setPlayerHealth = function(playerHealth){
    this.playerHealth = playerHealth;
  }

  this.getPlayerHealth = function(){
    return this.playerHealth;
  }

  this.setPlayerLevel = function(playerLevel){
    this.playerLevel = playerLevel;
  }

  this.getPlayerLevel = function(){
    return this.playerLevel;
  }

  this.setPlayerDefending = function(playerDefending){
    this.playerDefending = playerDefending;
  }

  this.getPlayerDefending = function(){
    return this.playerDefending;
  }

  this.setPlayerMaxHealth = function(playerMaxHealth){
    this.playerMaxHealth = playerMaxHealth;
  }

  this.getPlayerMaxHealth = function(){
    return this.playerMaxHealth;
  }

});
