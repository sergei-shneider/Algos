var checkIfExist = function(arr) {
    let mult, div
    for(let i = 0; i<arr.length; i++){
        mult = arr.indexOf(arr[i]*2)
        div = arr.indexOf(arr[i]/2)
        if(mult!==-1 || div!==-1){
            if(mult!==i || div!==i) return true
        }
    }
    return false
};
