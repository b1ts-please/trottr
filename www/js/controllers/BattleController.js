var BattleController = function ()
{
  this.canvas = document.getElementById('battle-canvas'),
  this.context = this.canvas.getContext('2d'),
};

BattleController.prototype =
{

  shieldPress: function ()
  {

  },

  shieldRelease: function ()
  {

  },

  weaponPress: function ()
  {

  },

  weaponRelease: function ()
  {

  },

  addTouchEventHandlers: function ()
  {
    BattleController.canvas.addEventListener(
       'touchstart',
       BattleController.touchStart
    );

    BattleController.canvas.addEventListener(
       'touchend',
       BattleController.touchEnd
    );
  },

  touchStart: function (e)
  {
    if (BattleController.playing)
    {
       // Prevent players from inadvertently dragging the game canvas
       e.preventDefault();
       var x = e.changedTouches[0].pageX;
       if (BattleController.playing)
       {
          if (x < BattleController.canvas.width/2)
          {
              BattleController.shieldPress();
          }
          else if (x > BattleController.canvas.width/2)
          {
              BattleController.weaponPress();
          }
        }
    }
  },

  touchEnd: function (e)
  {
    var x = e.changedTouches[0].pageX;
    if (BattleController.playing)
       {
          if (x < BattleController.canvas.width/2)
          {
              BattleController.shieldRelease();
          }
          else if (x > BattleController.canvas.width/2)
          {
              BattleController.weaponRelease();
          }
        }
       // Prevent players from double
       // tapping to zoom into the canvas
        e.preventDefault();
    }

});

var BattleController = new BattleController();
