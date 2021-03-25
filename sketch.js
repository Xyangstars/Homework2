var g = document.getElementById('g');

var left = 0;

var step_num = 1;

var move_g = function(){
  left = left + 20;

  if(step_num > 4){

    step_num = 1;

  } else(step_num<3);{

    step_num=0;
}


if ()

g.style.left = left + 'px';

g.src = 'g_walking_'+step_num+'.png';

    step_num = step_num + 1;{
    setTimeout(move_g,100);
}

function Bio() {
  alert("Gyrados evolved from a small fish pokemon call Magicarp");
}

function goattack(){
  alert("attacking");
}