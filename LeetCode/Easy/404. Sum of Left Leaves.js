var sumOfLeftLeaves = function(root) {
    if(!root) return 0
    if(!root.left && !root.right) return 0
    let sum = 0
    if(root.left){
        if(!root.left.right && !root.left.left) sum+=root.left.val
        else sum+=sumOfLeftLeaves(root.left)
    }
    if(root.right){
        sum+=sumOfLeftLeaves(root.right)
    }
    return sum
};
