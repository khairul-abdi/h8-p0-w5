function changeVocals (str) {
    // var vokalBesar = [['A', 'B'],['I', 'J'],['U', 'V'],['E','F'],['O','P']]
    var vokalKecil = [['a', 'b'],['i', 'j'],['u', 'v'],['e','f'],['o','p']]
    
    // var strArr = []

    var temp = ''
    var tempS = []
    for(var j = 0; j < vokalKecil.length; j++){
        for(var i = 0; i < str.length; i++){
        
            console.log('--->STR:', str[i])
            console.log('===>J:',vokalKecil[j])
            // console.log('=====>K:',vokalBesar[k])

            if(str[i] == vokalKecil[j][0]){

                temp += vokalKecil[j][1]
                break                

            }else if(str[i] != vokalKecil[j][0]){
                temp += str[i]
                // break
            }   
        }
    }
    
    return temp
}

console.log(changeVocals('Alexei')); // 'JFXFLb'

// AAAAAllllleeefexxxxxeeefeijiii