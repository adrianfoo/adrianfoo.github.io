document.querySelector("#gameover").setAttribute("visible",false);
updateScore(totalScore);

var msg = document.querySelector("#msg1");
msg.text= 'align:center; width:3; wrapCount:100; color:red; value:Stay on path.;'

var cam = document.querySelector('#cam');

var pos = cam.getAttribute('position');
var x = pos.x;
var y = pos.y;
cam.addEventListener('componentchanged', function (evt) {
  //console.log('CAMERA x/y:', pos.x, pos.y);
  if(pos.x < -2){
    msg.setAttribute('text', {
      align:'center',
      width:3,
      wrapCount:100,
      color:'red',
      value:'Stay on path'
    });
    totalScore -= 1;
    updateScore(totalScore);
  }
  else if(pos.x > 2){
    msg.setAttribute('text', {
      align:'center',
      width:3,
      wrapCount:100,
      color:'red',
      value:'Stay on path'
    });
    totalScore -= 1;
    updateScore(totalScore);
  }
  else{
      msg.setAttribute('text', {
      align:'center',
      width:3,
      wrapCount:100,
      color:'red',
      value:''
      });
  }
  x = pos.x;
  y = pos.y;
    return; 
});





