document.onreadystatechange = function(){
  if(document.readyState == "interactive"){
    console.log("hello reactive")

    function getRandomColor() {
	 	 var letters = '0123456789ABCDEF'.split('');
	 	 var color = '#';
	 	 for (var i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
	 	 }
	 	 return color;
	 	 }

     var box = document.getElementById("box")
     var clickedTime,
         createdTime,
         reactionTime;

      function getRandomInt(min, max) {
         min = Math.ceil(min);
          max = Math.floor(max);
         return Math.floor(Math.random() * (max - min)) + min;
         }

         function createBox(){
           var time = getRandomInt(0, 4);
           var top = getRandomInt(0, 250);
           var left = getRandomInt(0, 400);

         setTimeout(function(){
           if(getRandomInt(0,2) ===0){
             box.style.borderRadius = "50%"
           }else{
             box.style.borderRadius = "0"
           }
           box.style.top= top + "px";
           box.style.left= left + "px"
           box.style.background=getRandomColor()
           box.style.display ="block"
           createdTime=Date.now();
         },time)

       }
       box.onclick = function(){
         clickedTime = Date.now();
         reactionTime = (clickedTime-createdTime)/1000;
         document.getElementById("time").innerHTML=reactionTime;
         box.style.display = "none"

         createBox();
       }
       createBox();


  }
}
