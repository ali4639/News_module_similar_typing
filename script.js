window.onload = function(){
   let text = document.querySelector('.text');
   let str = text.innerText;
   let start = 0;
   
   if(str.length > 0){
      text.innerText = ''; // first clean all character then typing :)
      window.setInterval(typing_text, 200);
   }
   
   function typing_text(){

      let curser = '';
      if(start % 2 == 0){
         curser = '|';
      }

      if(start <= str.length){
         text.innerText = str.slice(0, start) + curser;
         start ++;
      }else{
         start = 0;
      }
   }

}