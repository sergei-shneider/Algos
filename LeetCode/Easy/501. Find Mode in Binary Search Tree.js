/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    const allNode = iterate(root)
    console.log(allNode)
    let dict = {}
    let max = 0
    for(let i = 0; i<allNode.length; i++){
        if(dict[allNode[i]]) dict[allNode[i]]++
        else dict[allNode[i]]=1
        if(dict[allNode[i]]>max) max = dict[allNode[i]]
    }
    let outArr = []
    for(let key in dict){
        if(dict[key]===max) outArr.push(parseInt(key))
    }
    return outArr
};

function iterate(root){
    let outArr = []
    if(!root) return [] 
    if(root.left) outArr.push(...iterate(root.left))
    if(root.right) outArr.push(...iterate(root.right))
    outArr.push(root.val)
    return outArr
}
