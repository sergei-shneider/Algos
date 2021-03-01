var makeGood = function(s) {
    if(!s.length) return s
    if(s.length===1) return s
    if(s.toLowerCase()===s || s.toUpperCase() ===s) return s
    const sArr = s.split("")
    let toProc = true
    while(toProc){
        toProc = false
        for(let i = 1; i<sArr.length; i++){
            if(Math.abs(sArr[i].charCodeAt(0)-sArr[i-1].charCodeAt(0))===32) {
                toProc = true
                sArr.splice(i-1, 2)
                break
            }
        }    
    }
    return sArr.join("")
};
