trottr.service('WeaponService', function(){
  this.weaponDamage = 0;

  this.setWeaponDamage = function(weaponDamage){
    this.weaponDamage = weaponDamage;
  }

  this.getWeaponDamage = function(){
    return this.weaponDamage;
  }
});
