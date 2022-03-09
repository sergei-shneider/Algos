function iterator(arrIn, output, remainder, currIdx, possible){
    if(remainder<0) return;
    if(!remainder){
        output.push([...possible])
        possible = []
        return
    }
    for(let i = currIdx; i<arrIn.length; i++){
        possible.push(arrIn[i])
        iterator(arrIn, output, remainder-arrIn[i], i+1, possible)
        possible.pop()
    }
}
function findCombinations(arrIn, total) {
    const output = []
    iterator(arrIn, output, total, 0, [])
    return output
};
