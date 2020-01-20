function hasBalancedBrackets(strIn){
  let dict = {"[":"]", "{":"}", "(":")"}
  // let regex=/[[|\]|{|}|\(|\)]/g
  // let newStr = strIn.match(regex).join('')
  let newStr=strIn
  let keys = []
  for(let i = 0; i<newStr.length; i++){
    
    if(Object.keys(dict).includes(newStr[i])){
      keys.push(newStr[i])
    }
    else if(Object.values(dict).includes(newStr[i])){
      if(newStr[i]!==dict[keys.pop()]) return false;
    }
  }
 if(keys.length) return false
 return true;
}


console.log(hasBalancedBrackets('[][(){}')); // false
console.log(hasBalancedBrackets('({)}')); // false
console.log(hasBalancedBrackets('({[]})')); // true
console.log(hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}')); // true