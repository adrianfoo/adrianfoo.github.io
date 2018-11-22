function gameover(score){
  if(score <= 0){
    document.querySelector('#cam').setAttribute("wasd-controls",{enabled: 'false'});
    window.location.href = "gameover.html";
  }
  return;
}


function updateScore(score){
  var scoreEl = document.querySelector('#scoreMsg');
  scoreEl.setAttribute('text', {
              align:'center',
              width:3,
              wrapCount:100,
              color:'black',
              value: 'Score: ' + score
            });

  gameover(score);

}