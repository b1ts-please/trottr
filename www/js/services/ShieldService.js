trottr.service('ShieldService', function(){
  this.shieldDefense = 0;

  this.setShieldDefense = function(shieldDefense){
    this.shieldDefense = shieldDefense;
  }

  this.getShieldDefense = function(){
    return this.shieldDefense;
  }
});
