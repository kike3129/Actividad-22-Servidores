input = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";
input = input.toLowerCase().replace(/[\.\s]/g, '');
 countIt = (word) =>{
word = word.toLowerCase().trim();
 letterCount = {};
//creat a count variable and set it to 0
 count = 0;
 maxChar = "";
word.split("").forEach(letter => {
  
  if (letterCount[letter]){
    letterCount[letter]++;
  }else{
    letterCount[letter] = 1;
  }
})
 infoArray = Object.entries(letterCount);
 resultArray = [];
for (let i = 0; i < infoArray.length; i++){
  infoArray[i][0] = infoArray[i][0] + ':';
  resultArray.push(infoArray[i]);
}
 finalArray = [];
for ( j = 0; j < resultArray.length; j++){
 finalArray.push(resultArray[j].join(""));

}
let resultString = finalArray.join(" ");
return resultString;
}
