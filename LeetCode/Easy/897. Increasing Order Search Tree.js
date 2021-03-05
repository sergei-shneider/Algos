var increasingBST = function(root) {
    let values = parseBST(root)
    values.sort((a, b)=>a[0]-b[0])
    console.log(values)
   for(let i = 0; i<values.length-1; i++){
       values[i+1][1].left = null
       values[i+1][1].right = null
       values[i][1].right = values[i+1][1]
       values[i][1].left = null
   }
   return values[0][1]
};

function parseBST(root){
    if(!root){
        return []
    }
    if(!root.left && !root.right){
        let retVal = [[root.val, root]]
        return retVal
    }
    let output = [[root.val, root]]
    let left
    let right
    if(root.left) output = output.concat(parseBST(root.left))
    if(root.right) output = output.concat(parseBST(root.right))
    return output
}
