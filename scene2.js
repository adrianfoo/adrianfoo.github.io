updateScore(totalScore);

var msg = document.querySelector("#msg1");
msg.text= 'align:center; width:3; wrapCount:100; color:red; value:Stay on path.;'

var cam = document.querySelector('#cam');

var pos = cam.getAttribute('position');
cam.addEventListener('componentchanged', function (evt) {
  //console.log('CAMERA x/y:', pos.x, pos.y);
  if(pos.x < -0.5){
    msg.setAttribute('text', {
      align:'center',
      width:3,
      wrapCount:100,
      color:'red',
      value:'Stay on the side of the road'
    });
    totalScore -= 1;
    updateScore(totalScore);
  }
  else if(pos.x > 0.5){
    msg.setAttribute('text', {
      align:'center',
      width:3,
      wrapCount:100,
      color:'red',
      value:'Stay on the side of the road'
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
var grmd = ["Remember to check front and back lights!", "Use the front and back light when it's dark", "Always keep left!", "Remember to check tire pressure!", "Good job!", "Keep up the good work"];
var brmd = ["Remember to check front and back lights!", "Use the front and back light when it's dark", "Always keep left!", "Remember to check tire pressure!", "You can do better!", "Be more careful!"];
var count = 1;
rmd_msg.setAttribute('text', {
                width:3,
                wrapCount:100,
                color:'white',
                value: grmd[0]
                });

msgInterval= setInterval(function(){
                if(count < 6){
                  if(totalScore > 80){
                    rmd_msg.setAttribute('text', {
                    width:3,
                    wrapCount:100,
                    color:'white',
                    value:grmd[count]
                    });
                    count++;
                   }
                  else{
                    rmd_msg.setAttribute('text', {
                    width:3,
                    wrapCount:100,
                    color:'white',
                    value:brmd[count]
                    });
                    count++;
                  }
                }
                else{
                  count = 1;
                  rmd_msg.setAttribute('text', {
                  width:3,
                  wrapCount:100,
                  color:'white',
                  value:grmd[0]
                  });
                }
  
                
              }, 5000);