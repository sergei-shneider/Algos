
function countChange(amount, coins) {
    arr = [1].concat(new Array(amount).fill(0)) 
    for (let i = 0; i<coins.length; i++){
      console.log("coins[i]: ", coins[i])
      for (let j = coins[i]; j<amount+1; j++){
        //console.log("j ", j)
        console.log('whats getting added: ', arr[j-coins[i]])
        console.log('the index: ', j-coins[i])
        arr[j]+=arr[j-coins[i]]
        console.log('arr[j]: ', arr[j])
      }
      console.log(arr)
    }
    if (amount === 0) return 1
    else return arr[amount]
}
countChange(46, [1, 5, 10])
var countChange = function(money, coins) {

  if(money < 0 || coins.length === 0)
    return 0
  else if(money === 0)
    return 1
  else
    return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}

//countChange(46, [1, 5, 10])