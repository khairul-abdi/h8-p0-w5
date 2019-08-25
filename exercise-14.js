function changeVocals (str) {
    //console.log(str);
    var vokal = 'aAiIuUeEoO';
    var konsonan = 'bBjJvVfFpP';
    var tampungWords ='';
  
    for (var i = 0; i<str.length; i++){
        var inisial = false;
        for(var j =0; j<vokal.length; j++){
        if(str[i] === vokal[j]) {
            tampungWords += konsonan[j] ;
            inisial = true;
        }
        } 
        if (inisial === false) {
            tampungWords += str[i]; 
        }
    }

    //console.log(tampungWords);
    return tampungWords;
}
  
function reverseWord (str) {
    var tampungWords = '';
    for (var i=str.length-1; i>= 0; i--){
        tampungWords += str[i];
    }

    //console.log(tampungWords1);
    return tampungWords;
}
  
function setLowerUpperCase (str) {
    var tampungWords = [];  
    for (var j=0; j< str.length; j++){
        if (str[j] ===  str[j].toLowerCase()) {
            tampungWords.push(str[j].toUpperCase());
        } else {
            tampungWords.push(str[j].toLowerCase());
        }
    }

    //console.log(tampungWords2.toString());
    return tampungWords;
}
  
function removeSpaces (str) {
    var tampungWords = [];
    for (var k=0; k< str.length; k++){
        if (str[k] !== ' '){
            tampungWords.push(str[k]);
        }
    }

    //console.log(tampungWords4);
    return tampungWords;
}
  
function passwordGenerator (name) {
    if (name.length <= 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }

    var recChangeVocals = changeVocals(name);
    //console.log(recChangeVocals);
    var recReverseWord = reverseWord(recChangeVocals);
    //console.log(recReverseWord);
    var recSetLowerUpperCase = setLowerUpperCase(recReverseWord);
    //console.log(recSetLowerUpperCase);
    var recRemoveSpaces = removeSpaces(recSetLowerUpperCase);
    //console.log(recRemoveSpaces);

    var resultRec = '';
    for (var i=0; i< recRemoveSpaces.length; i++){
        resultRec += recRemoveSpaces[i];
    }
    return resultRec;
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'