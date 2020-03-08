function solution(number){
  // convert the number to a roman numeral
  let dict = {1:"I", 4:"IV", 5:"V", 9:"IX", 10:"X", 40:"XL", 50:"L", 90:"XC", 100:"C", 400:"CD", 500:"D", 900:"CM", 1000: "M"}
  let output = []
  let x = 10
  while(number>0){
    let toCheck = number % x
    console.log(toCheck)
    if(toCheck === 0) x*=10
    else if(dict[toCheck]){
      output.unshift(dict[toCheck])
      }
    else{
      toCheck=Math.ceil(toCheck/x)*(x/10)
       output.unshift(dict[toCheck])
    }
    number-=toCheck
  }
  return output.join('')
}

console.log(solution(2007))

// TODO: create a RomanNumerals helper object
class RomanNumerals {
constructor(){
}
toRoman(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer  
  let dict = {"I": 1, "IV" : 4, "V": 5, "IX": 9, "X": 10, "XL": 40, "L": 50, "XC": 90, "C": 100, "CD": 400, "D": 500, "CM": 900, "M": 1000}
  let sum = 0;
  for(let i = 0; i<roman.length; i++){
    if(i+1<roman.length && dict[roman[i]]<dict[roman[i+1]]){
    sum+=dict[roman[i]+roman[i+1]]
    i++;
    }
    else sum+=dict[roman[i]]
  }
  return sum
}
fromRoman(number){
  // convert the number to a roman numeral
  let dict = {1:"I", 4:"IV", 5:"V", 9:"IX", 10:"X", 40:"XL", 50:"L", 90:"XC", 100:"C", 400:"CD", 500:"D", 900:"CM", 1000: "M"}
  let output = []
  let x = 10
  while(number>0){
    let toCheck = number % x
    if(toCheck === 0) x*=10
    else if(dict[toCheck]){
      output.unshift(dict[toCheck])
      }
    else{
      toCheck=Math.ceil(toCheck/x)*(x/10)
       output.unshift(dict[toCheck])
    }
    number-=toCheck
  }
  return output.join('')
}
}