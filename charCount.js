function countLetters(randString){
var sChars = randString.split(" ").join("");
var oResult = {};

for(var i = 0; i < sChars.length; i++){
  if (oResult[sChars[i]] === undefined){
    oResult[sChars[i]] = 1;
  }else{oResult[sChars[i]]++;}
}
return(oResult);

}

var uInput = process.argv.slice(2);
var sInput = uInput.join("");
countLetters(sInput);

console.log(countLetters(sInput));