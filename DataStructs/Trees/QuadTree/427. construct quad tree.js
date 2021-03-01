var construct = function(grid) {
 //  console.log(grid)
   // if(!grid||grid.length<2) return new Node
    let output = []
    let nN = new Node()
    let sum = 0
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[i].length; j++){
           sum+=grid[i][j] 
        }
    }
    if(sum===(grid.length*grid.length) || sum===0){
        nN.isLeaf = true
        nN.topLeft = null
        nN.topRight = null
        nN.bottomLeft = null
        nN.bottomRight = null
        nN.val = sum
        return nN
     }else{
         nN.isLeaf = false
         nN.val = 42
         nN.topLeft = construct(divideQT(grid, 0))
         nN.topRight = construct(divideQT(grid, 1))
         nN.bottomLeft = construct(divideQT(grid, 2))
         nN.bottomRight = construct(divideQT(grid, 3))
         return nN
     }
};

function divideQT(gridIn, quadIn){
    const half = gridIn.length/2
    const full = gridIn.length
    let left = 0
    let right = half
    let top = 0
    let bottom = half
    switch(quadIn){
        case 1:
            left = half
            right = full
            break;
        case 2:
            top = half
            bottom = full
            break;
        case 3:
            left = half
            right = full
            top = half 
            bottom = full
            break;
    }
    const outArr = []
    let tempArr
    for(top; top<bottom; top++){
        tempArr = []
        for(let i = left; i<right; i++){
            tempArr.push(gridIn[top][i])
        }
        outArr.push(tempArr)
    }
    return outArr
}
// /**
//  * // Definition for a QuadTree node.
//  * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
//  *    this.val = val;
//  *    this.isLeaf = isLeaf;
//  *    this.topLeft = topLeft;
//  *    this.topRight = topRight;
//  *    this.bottomLeft = bottomLeft;
//  *    this.bottomRight = bottomRight;
//  * };
//  */
//     // let sum = grid[0][0]+grid[0][1]+grid[1][0]+grid[1][1]
//     // if(sum===4 || sum===0){
//     //     nN.isLeaf = true
//     //     nN.topLeft = null
//     //     nN.topRight = null
//     //     nN.bottomLeft = null
//     //     nN.bottomRight = null
//     //     nN.val = sum
//     //     return nN
//     // }else{
//     //     nN.isLeaf = false
//     //     nN.val = 42
//     //     nN.topLeft = new Node(grid[0][0], true, null, null, null, null)
//     //     nN.topRight = new Node(grid[0][1], true, null, null, null, null)
//     //     nN.bottomLeft = new Node(grid[1][0], true, null, null, null, null)
//     //     nN.bottomRight = new Node(grid[1][1], true, null, null, null, null)
//     //     return nN
//     // }
// /**
//  * @param {number[][]} grid
//  * @return {Node}
//  */
// var construct = function(grid) {
//  //  console.log(grid)
//    // if(!grid||grid.length<2) return new Node
//     let nN = new Node()
//     //console.log(grid)
//     if(grid.length<1){
//         console.log("there")
//         return null
//     }
//     else if(grid.length<2){
//         console.log("here")
//         nN.isLeaf = true
//         nN.topLeft = null
//         nN.topRight = null
//         nN.bottomLeft = null
//         nN.bottomRight = null
//         return nN
//     } 
//     // let sum = 0
//     // for(let i = 0; i<grid.length; i++){
//     //     for(let j = 0; j<grid[i].length; j++){
//     //        sum+=grid[i][j] 
//     //     }
//     // }
//     if(grid.length === 2){
//         let sum = grid[0][0]+grid[0][1]+grid[1][0]+grid[1][1]
//         if(sum === 4 || sum === 0){
//             nN.isLeaf = true
//             nN.topLeft = null
//             nN.topRight = null
//             nN.bottomLeft = null
//             nN.bottomRight = null
//             nN.val = 1
//             return nN
//         }else{
//             nN.isLeaf = false
//             nN.val = 42
//             nN.topLeft = new Node(grid[0][0], true, null, null, null, null)
//             nN.topRight = new Node(grid[0][1], true, null, null, null, null)
//             nN.bottomLeft = new Node(grid[1][0], true, null, null, null, null)
//             nN.bottomRight = new Node(grid[1][1], true, null, null, null, null)
//             return nN
//         }
//      }else{
//          let tleft = construct(divideQT(grid, 0))
//          let tright = construct(divideQT(grid, 1))
//          let bleft = construct(divideQT(grid, 2))
//          let bright = construct(divideQT(grid, 3))
//          nN.topLeft = tleft
//          nN.topRight = tright
//          nN.bottomLeft = bleft
//          nN.bottomRight = bright
//          let sum = tleft.val+tright.val+bleft.val+bright.val
//          if(sum===4||(sum === 0 &&tleft.val && tright.val && bleft.val && bright.val)){
//              nN.isLeaf = true
//              nN.val = sum
//          }
//          else{
//         // if(tleft.isLeaf && tright.isLeaf && bleft.isLeaf && bright.isLeaf){
//              nN.isLeaf = false
//              nN.val = 42
//              nN.topLeft = new Node(42, true, null, null, null, null)
//              nN.topRight = new Node(42, true, null, null, null, null)
//              nN.bottomLeft = new Node(42, true, null, null, null, null)
//              nN.bottomRight = new Node(42, true, null, null, null, null)
//          }
//          // else{
//          //     nN.isLeaf = true
//          //     nN.val = sum
//          // }
//          return nN
//      }
// };

// function divideQT(gridIn, quadIn){
//     const half = gridIn.length/2
//     const full = gridIn.length
//     let left = 0
//     let right = half
//     let top = 0
//     let bottom = half
//     switch(quadIn){
//         case 1:
//             left = half
//             right = full
//             break;
//         case 2:
//             top = half
//             bottom = full
//             break;
//         case 3:
//             left = half
//             right = full
//             top = half 
//             bottom = full
//             break;
//     }
//     const outArr = []
//     let tempArr
//     for(top; top<bottom; top++){
//         tempArr = []
//         for(let i = left; i<right; i++){
//             tempArr.push(gridIn[top][i])
//         }
//         outArr.push(tempArr)
//     }
//     console.log(outArr)
//     return outArr
// }
