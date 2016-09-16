trottr.service('PlayerService', function(){
  this.playerHealth = 0;
  this.playerLevel = 0;

  this.setPlayerHealth = function(playerHealth){
    this.playerHealth = playerHealth;
  }

  this.getplayerHealth = function(){
    return this.playerHealth;
  }

  this.setPlayerLevel = function(playerlevel){
    this.playerLevel = playerlevel;
  }

  this.getPlayerLevel = function(){
    return this.playerLevel;
  }

});
