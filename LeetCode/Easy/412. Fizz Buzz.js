var fizzBuzz = function(n) {
    let i = 1
    const outArr = []
    let strFB = ""
    while(i<=n){
        strFB = ""
        if(i%3===0) strFB+="Fizz"
        if(i%5===0) strFB+="Buzz"
        if(!strFB.length) strFB+=i
        outArr.push(strFB)
        i++
    }
    return outArr
};
