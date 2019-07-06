document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('getMessage').onclick=function(){
    req=new XMLHttpRequest();
    req.open("GET",'/json/cats.json',true);
    req.send();
    req.onload=function(){
      json=JSON.parse(req.responseText);
      var html = "";
      json.forEach(function(val) {
        html += "<div class = 'cat'>";
        // Add your code below this line
        html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
        
        // Add your code above this line
        html += "</div><br>";
      });
      document.getElementsByClassName('message')[0].innerHTML=html;
    };
   };
});