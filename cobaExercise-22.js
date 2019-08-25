function changeVocals(str) {
    
    var hasil = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'A'){
            if(str[i] == str[i].toUpperCase()){
                hasil += 'B'
            }else{
                hasil += 'b'
            }
        }else if(str[i] == 'i' || str[i] == 'I'){
            if(str[i] == str[i].toUpperCase()){
                hasil += 'J'
            }else{
                hasil += 'j'
            }
        }else if(str[i] == 'u' || str[i] == 'U'){
            if(str[i] == str[i].toUpperCase()){
                hasil += 'V'
            }else{
                hasil += 'b'
            }
        }else if(str[i] == 'e' || str[i] == 'E'){
            if(str[i] == str[i].toUpperCase()){
                hasil += 'F'
            }else{
                hasil += 'f'
            }
        }else if(str[i] == 'o' || str[i] == 'O'){
            if(str[i] == str[i].toUpperCase()){
                hasil += 'P'
            }else{
                hasil += 'p'
            }
        }else{
            hasil += str[i]
        }
    }

    return hasil
}
  
  function reverseWord(str) {
    //code di sini
  }
  
  function setLowerUpperCase(str) {
    //code di sini
  }
  
  function removeSpaces(str) {
    //code di sini
  }
  

  function passwordGenerator(name) {

    var changeVocals = changeVocals(str);
    var reverseWord = reverseWord(changeVocals);
    var setLowerUpperCase = setLowerUpperCase(reverseWord);
    var removeSpaces = removeSpaces(setLowerUpperCase);



    return removeSpaces;
  }

  console.log(changeVocals('Alexei')); // 'JFXFLb'
  
//   console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
//   console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'