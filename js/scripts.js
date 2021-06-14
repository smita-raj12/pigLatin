function pigLatin(text){
  let vowels=['a','e','i','o','u'];
  let textArray=text.split(" ");
  console.log("textArray",textArray)
    let icount=0
    let piglatintext = " "
  textArray.forEach(function(i){
    let vowelFoundFlag = false
    let word=i.toLowerCase()
   for (let j=0; j<=vowels.length; j++){
     if(word.startsWith(vowels[j])){
      vowelFoundFlag = true
      break;
     }
     
    }
      console.log("vowelFoundFlag",vowelFoundFlag,i)

     if( vowelFoundFlag === true){
        console.log(i)
        
         word=word.concat('way');
       
         console.log(word)
       }else{
         if (word.slice(0,2) == 'qu'){
           word = word.slice(2) + word.slice(0,2) + 'ay'
           console.log('concatenated word' ,word)
         }else{
         console.log("first char",word.slice(0,1))
         console.log("remaining char",word.slice(1))
         word = word.slice(1) + i.slice(0,1) + 'ay'
         console.log('concatenated word' ,word)
         }
       }
       piglatintext = piglatintext + " " + word; 
     console.log("piglatintext",piglatintext)
  });
 
}
 $(document).ready(function(){
   $("form#word-counter").submit(function(event){
     event.preventDefault();
     const passage = $("#text-passage").val();
     const DispPigLatin=pigLatin(passage)
     $("#output").html(DispPigLatin);
      })
 });

