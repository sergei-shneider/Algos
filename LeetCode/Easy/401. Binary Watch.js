
var readBinaryWatch = function(num) {
    if(num===0) return ["0:00"]
    let minuteDict = {}
    let hourDict = {}
    for(let i = 0; i<12; i++){
        let len = [...(i).toString(2).matchAll('1')].length
        if(hourDict[len]) hourDict[len].push(i)
        else hourDict[len] = [i]
    }
    for(let i = 0; i<60; i++){
        let len = [...(i).toString(2).matchAll('1')].length
        if(minuteDict[len]) minuteDict[len].push(i)
        else minuteDict[len] = [i]
    }
    let outputs = []
    let i = 0
    if(num>6) i+=(num-6)
        while(i<=num){
            let possiblehour = hourDict[i]
            let possiblemin = minuteDict[num-i]
            outputs.push([possiblehour, possiblemin])
            i++
        }
    
    let tempOut = []
    //console.log(outputs)
      for(let i = 0; i<outputs.length; i++){
        if(!outputs[i][0]) continue
        for(let j = 0; j<outputs[i][0].length; j++){
            if(!outputs[i][1]) continue
            for(let k = 0; k<outputs[i][1].length; k++){
                tempOut.push([outputs[i][0][j], outputs[i][1][k]])
            }
        }
    }
    //console.log(tempOut)
    return tempOut.map(value=>{
        let tempVal = value[1].toString()
        if(tempVal.length===1){
            tempVal = '0'+tempVal
        }
        return value[0].toString()+':'+tempVal
    })
};
