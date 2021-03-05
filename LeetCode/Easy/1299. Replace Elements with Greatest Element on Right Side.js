
var replaceElements = function(arr) {
    let max = arr[arr.length-1]
    for(let i = arr.length-2; i>=0; i--){
        let temp = Math.max(max, arr[i])
        arr[i] = max
        max = temp
        
    }
    arr[arr.length-1] = -1
    return arr
};
