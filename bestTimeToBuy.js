// Space = 35 but speed = 140ms(top 10%, top 60%)
// var maxProfit = function(prices) {
//   let minprice = Infinity;
//   let maxprice = 0;
//   let priceDiff = 0;
//     for(let i = 0; i<prices.length-1; i++){
//       if(prices[i]<minprice){
//         minprice = prices[i];
//         maxprice = 0;
//       }
//       if(prices[i+1]>maxprice){
//          maxprice=prices[i+1]
//           priceDiff = Math.max(priceDiff, maxprice-minprice)
//           }
//       }
     
//   return priceDiff
// };

//space = 35.6(top 75%), 64ms(top 43%)
// var maxProfit = function(prices) {
//   let minprice = Infinity;
//   let maxprice = 0;
//   let priceDiff = 0;
//     for(let i = 0; i<prices.length-1; i++){
//       if(prices[i]<minprice){
//         minprice = prices[i];
//         maxprice = 0;
//       }
//       priceDiff = Math.max(priceDiff, prices[i+1]-minprice)
      
//     }
//   return priceDiff
// };
var maxProfit = function(prices) {
  let minprice = Infinity;
  let maxprice = 0;
  let priceDiff = 0;
    for(let i = 0; i<prices.length-1; i++){
      if(prices[i]<minprice){
        minprice = prices[i];
        maxprice = 0;
      }
      priceDiff>prices[i+1]-minprice ? priceDiff : priceDiff = prices[i+1]-minprice
      
    }
  return priceDiff
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5)
console.log(maxProfit([3, 2, 6, 5, 0, 3]), 4)
console.log(maxProfit([7, 6, 4, 3, 1]), 0)