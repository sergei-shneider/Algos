var countBalls = function(lowLimit, highLimit) {
    let arrLen = splitNum(highLimit)
    let boxArr = new Array(arrLen).fill(0)
    let sumArr =[]
    let max = 0
    while(lowLimit<=highLimit){
        let boxToAdd = splitNum(lowLimit)
        sumArr.push(boxToAdd)
        if(boxToAdd>boxArr.length-1){
            let extraArr = new Array(boxToAdd+1-boxArr.length).fill(0)
            boxArr = boxArr.concat(extraArr)
        }
        boxArr[boxToAdd]++
        if(boxArr[boxToAdd]>max) max = boxArr[boxToAdd]
        lowLimit++
    }
    return max
};

function splitNum(num){
    let sum = 0
    while(num>0){
        sum+=num%10
        num = Math.floor(num/10)
    }
    return sum
}
