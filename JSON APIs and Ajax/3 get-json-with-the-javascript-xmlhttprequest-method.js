document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('getMessage').onclick=function(){
    // Add your code below this line
    req=new XMLHttpRequest();
    req.open("GET",'/json/cats.json',true);
    req.send();
    req.onload=function(){
    json=JSON.parse(req.responseText);
    document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
};
    // Add your code above this line
  };
});