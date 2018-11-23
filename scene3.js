updateScore(totalScore);

var msg = document.querySelector("#msg1");
msg.text= 'align:center; width:3; wrapCount:100; color:red; value:Stay on path.;'

var cam = document.querySelector('#cam');

var pos = cam.getAttribute('position');
cam.addEventListener('componentchanged', function (evt) {
  //console.log('CAMERA x/y/z:', pos.x, pos.y, pos.z);
  if(pos.x < -2){
    msg.setAttribute('text', {
      align:'center',
      width:3,
      wrapCount:100,
      color:'red',
      value:'Stay on the path'
    });
    totalScore -= 1;
    updateScore(totalScore);
  }
  else if((pos.x > 2 && pos.x < 14) && (pos.z > -18.5 || pos.z < -22.5)){
    msg.setAttribute('text', {
      align:'center',
      width:3,
      wrapCount:100,
      color:'red',
      value:'Stay on the path'
    });
    totalScore -= 1;
    updateScore(totalScore);
  }
  else if(pos.x > 18){
    msg.setAttribute('text', {
      align:'center',
      width:3,
      wrapCount:100,
      color:'red',
      value:'Stay on the path'
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
    return; 
});


var msgInterval;
var rmd_msg = document.querySelector("#rmd");
var rmd = ["Remember to check your tire presure!", "Ring bell only when necessary!", "Always keep left!"];
var count = 1;
rmd_msg.setAttribute('text', {
                width:3,
                wrapCount:100,
                color:'black',
                value: rmd[0]
                });

msgInterval= setInterval(function(){
                if(count < 3){
                  rmd_msg.setAttribute('text', {
                  width:3,
                  wrapCount:100,
                  color:'black',
                  value:rmd[count]
                  });
                  count++;
                }
                else{
                  count = 1;
                  rmd_msg.setAttribute('text', {
                  width:3,
                  wrapCount:100,
                  color:'black',
                  value:rmd[0]
                  });
                }
  
                
              }, 5000);