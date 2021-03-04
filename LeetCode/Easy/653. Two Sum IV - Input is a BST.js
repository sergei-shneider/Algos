var findTarget = function(root, k) {
    if(!root) return false
    if(!root.left && !root.right) return false
    let valueArr = iterate(root, k)
    for(let i = 0; i<valueArr.length; i++){
        let idx = valueArr.indexOf(k-valueArr[i])
        if(idx!==-1 && idx!==i) return true
    }
    
    return false
};

function iterate(root, k){
    if(!root.left && !root.right){
        return [root.val]
    }
    let left = []
    let right = []
    if(root.left) left = iterate(root.left, k)
    if(root.right) right = iterate(root.right, k)
    let output = left.concat(root.val).concat(right)
    return output
}
