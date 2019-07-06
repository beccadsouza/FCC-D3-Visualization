document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('getMessage').onclick=function(){
    req=new XMLHttpRequest();
    req.open("GET",'/json/cats.json',true);
    req.send();
    req.onload=function(){
      json=JSON.parse(req.responseText);
      var html = "";
      // Add your code below this line
      json = json.filter(function(val){
        return (val.id!=1);
      });
      // json = json.filter((val)=> (val.id!=1));
      // Add your code above this line
       json.forEach(function(val) {
         html += "<div class = 'cat'>"
         
         html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"
         
         html += "</div>"
       });
       document.getElementsByClassName('message')[0].innerHTML=html;
     };
   }; 
});