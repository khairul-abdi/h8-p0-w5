function cobaSorting(num){


    for(var i = 0; i < num.length; i++){
    
        for(var j = 0; j < num.length; j++){
            if(num[i] < num[j]){
                var temp = num[j]
                num[j] = num[i]
                num[i] = temp
            }
        }
    }
    return num
}



function count(num){
    // for()
}



console.log(cobaSorting([2, 8, 4, 6, 8, 5, 8, 4]));
