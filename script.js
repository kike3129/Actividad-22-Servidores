
const countIt = () =>{
     word = document.getElementById("word").value;
    // word = word.toLowerCase().replace(/[\.\s]/g, '');
    word = word.toLowerCase().match(/[a-z]/g).sort();
    let letterCount = {};
    //creat a count variable and set it to 0
    
    
    word.forEach(letter => {
    
    if (letterCount[letter]){
    letterCount[letter]++;
    }else{
    letterCount[letter] = 1;
    }
    })
     infoArray = Object.entries(letterCount);
    resultArray = [];
    for ( i = 0; i < infoArray.length; i++){
    infoArray[i][0] = infoArray[i][0] + ':';
    resultArray.push(infoArray[i]);
    }
     finalArray = [];
    for ( j = 0; j < resultArray.length; j++){
    finalArray.push(resultArray[j].join(""));
    
    }
     resultString = finalArray.join(" ");
    document.getElementById("result").innerHTML = resultString;
    document.getElementById("word").value = "";
    }
