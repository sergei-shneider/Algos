/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
      if(!lists.length) return null
      if(lists.length===1) return lists[0]
      lists = lists.filter(x=> x!==null)
      if(!lists.length) return null
      lists.sort((a,b)=>a.val-b.val)
      const finalNode = lists[0]
      let currentNode
      let checkNode
      while(lists.length){
          currentNode = lists[0]
          if(lists.length===1) break
          if(!currentNode) return null
          lists.shift()
          if(currentNode.next){
              checkNode = currentNode.next
                  for(let i = 0; i<lists.length; i++){
                       if(checkNode.val<=lists[i].val){
                           lists.splice(i, 0, checkNode)
                           break
                       }else if(i===lists.length-1){
                           lists.push(checkNode)
                           break
                       }
                  }
          }else if(!lists.length) break
          
          if(lists[0]) currentNode.next = lists[0]
         // console.log(finalNode)
      }
      return finalNode
};
