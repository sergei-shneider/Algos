
var removeOuterParentheses = function(s) {
    // let arrOne = [];
    // let arrTwo = [S];
    // let output = '';
    // let trigger = true;
    // while(trigger){
    //     trigger = false
    //     arrOne = [...arrTwo]
    //     arrTwo = []
    //     for(let j = 0; j<arrOne.length; j++){
    //         let s = arrOne[j]
    //         let start = 0;
    //         let countOpen = 0;
    //         let countClose = 0;
    //         if(s.length>2){
    //         for (let i = 0; i<s.length; i++){
    //             if(s[i]=='(') countOpen++;
    //             if(s[i]==')') countClose++;
    //             if(countClose===countOpen){
    //                 if(countClose*2!==s.length) trigger = true;
    //                 arrTwo.push(s.substring(start, i+1))
    //                 start=i+1
    //             }  
    //         }
    //         }
    //         console.log(arrTwo)
    //     }
    // }
    // return arrTwo.join('')
    let output = '';
    let countB = 0;
    for(let i = 0; i<s.length; i++){
        if(s[i]=='('){
            if(countB>0) output+=s[i]
            countB++;
        }
        else{
            if(countB>1) output+=s[i]
            countB--;
        }
    }
    return output
};