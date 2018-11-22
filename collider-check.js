AFRAME.registerComponent('collider-check-game', {
        init: function() {
          var timeOut;
          this.el.addEventListener('raycaster-intersected', function(e) {
            var collMsg = document.querySelector("#msg2");
            if(e.target.id != "clear"){
              
              clearTimeout(timeOut);
              collMsg.setAttribute('text', {
                align:'center',
                width:3,
                wrapCount:100,
                color:'red',
                value:'You have hit a ' + e.target.attributes.name.value
              });
              totalScore -= 10;
              updateScore(totalScore);
              
              timeOut = setTimeout(function(){
                collMsg.setAttribute('text', {
                align:'center',
                width:3,
                wrapCount:100,
                color:'red',
                value:''
                });
              }, 3000);
            }
            else{
              document.querySelector('#cam').setAttribute("wasd-controls",{enabled: 'false'});   
              collMsg.setAttribute('text', {
                align:'center',
                width:3,
                wrapCount:100,
                color:'black',
                value:'Stage Clear'
              });
              timeOut = setTimeout(function(){
                window.location.href = "player_score.html";
              }, 3000);
            }
            
          });
        }
      });