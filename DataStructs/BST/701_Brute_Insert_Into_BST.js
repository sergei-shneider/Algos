var insertIntoBST = function(root, val) {
    
    
    let newNode = new TreeNode(val)
    if(!root) return newNode;
    let current = root;
    if(!current.val){
        current.val = val
        return current
    }
    while(current){
        if(current.val>val){
            if(!current.left){
                current.left = newNode;
                return root
            }
            else{
                current = current.left
            }
        }
        else if(current.val<val){
            if(!current.right)
            {
                current.right = newNode;
                return root;
            }
            else {
                current = current.right;
            }
        }
    }
};