var numberOfLines = function(widths, s) {
    let current = 0
    let next = 0
    let lines = 0
    let charCode = 0
    let idx = 0
    for(let i = 0; i<s.length; i++){
        charCode = s.charCodeAt(i)
        idx = charCode-97
        next = widths[idx]
        if(next+current>100){
            lines++
            current = next
            next = 0
        }else{
            current+=next
        }
    }
    if(current) lines++
    return [lines, current]
};
