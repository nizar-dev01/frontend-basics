let h1 = document.getElementById('mainheading');
let h2 = document.getElementById('subheading');

h1.onclick = function(){
    if(h2.style.color == "red"){
        h2.style.color = "blue"
    } else{
        h2.style.color ="red"
    }
  }
  
  h2.onclick = function(){
    if(h1.style.color == "red"){
        h1.style.color = "blue"
    } else{
        h1.style.color ="red"
    }
  }
  