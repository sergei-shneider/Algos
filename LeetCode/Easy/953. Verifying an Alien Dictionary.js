/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for(let i = 1; i<words.length; i++){
        let j = 0
        let currLen = Math.min(words[i].length, words[i-1].length)
        while(j<currLen){
            if(words[i][j]===words[i-1][j]) j++
            else if(order.indexOf(words[i][j])<order.indexOf(words[i-1][j])){
                return false
            }
            else{
                break
            }
        }
        if(j===currLen && words[i].length<words[i-1].length) return false
    }

    return true
};
