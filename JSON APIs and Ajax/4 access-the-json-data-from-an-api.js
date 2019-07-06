document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('getMessage').onclick=function(){
    req=new XMLHttpRequest();
    req.open("GET",'/json/cats.json',true);
    req.send();
    req.onload=function(){
      json=JSON.parse(req.responseText);
      document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
      // Add your code below this line
      console.log(json[2].codeNames[1])
      
      // Add your code above this line
    };
  };
});