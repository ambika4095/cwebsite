unction showAnswer(id)
 {
  
  var answer = document.getElementById(id);

 
   if 
(answer.hidden)
 {
        
answer.hidden = false;
 
   }
 else {
 
       answer.hidden = true;
 
   }

}