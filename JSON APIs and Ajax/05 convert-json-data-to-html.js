document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('getMessage').onclick=function(){
    req=new XMLHttpRequest();
    req.open("GET",'/json/cats.json',true);
    req.send();
    req.onload=function(){
      json=JSON.parse(req.responseText);
      var html = "";
      // Add your code below this line
json.forEach(function(val) {
var keys = Object.keys(val);
html += "<div class = 'cat'>";
keys.forEach(function(key) {
  html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
});
html += "</div><br>";
});
      
      // Add your code above this line
      document.getElementsByClassName('message')[0].innerHTML=html;
    };
  };
});