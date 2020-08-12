var rangeSumBST = function(root, L, R,) {
    let right=0, left=0, sum= 0;
    
    if(root.val>=L && root.val<=R) sum = root.val;
    if(root.left){
       // console.log('left: ', root.left.val)
        left = rangeSumBST(root.left, L, R)
    }
    if(root.right)
    {   
       // console.log('right: ',root.right.val)
        right = rangeSumBST(root.right, L, R)
    }
   // console.log('res', right, left)
    return sum+left+right
};
    
