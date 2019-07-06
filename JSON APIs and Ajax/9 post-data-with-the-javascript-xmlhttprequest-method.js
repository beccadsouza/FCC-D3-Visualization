document.addEventListener('DOMContentLoaded',function(){
    
  document.getElementById('sendMessage').onclick=function(){
  
    var userName=document.getElementById('name').value;
    // Add your code below this line
    req = new XMLHttpRequest();
    try {
      req.open("POST",url,true);
    }
    catch (e) {
      console.log(e);
    }
    req.setRequestHeader('Content-Type', 'text/plain');
    req.onreadystatechange=function(){
      if(req.readyState==4 & req.status==200){
            document.getElementsByClassName('message')[0].innerHTML=req.responseText;
      }
    }
    req.send(userName);
    // Add your code above this line
  };
});