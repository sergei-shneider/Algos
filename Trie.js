class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        let nextTrie;
        if(this.characters[word[index]]) nextTrie = this.characters[word[index]]
        else nextTrie = new Trie
        this.characters[word[index]] = nextTrie
        if(index===word.length-1){
          
            nextTrie.isWord = true;
            return this
        }
        else{
            index++
            nextTrie.addWord(word, index)
        }
    }
    getWords(word = [], currentWord = ""){
      if(this.isWord) word.push(currentWord)
      for (let key in this.characters){
          word.concat(this.characters[key].getWords(word, currentWord+key))
      }
      
      return word
    }
     findWord(word, index = 0) {
        if(this.characters[word[index]]){
   
          return this.characters[word[index]].findWord(word, ++index)
        }
        
        if(index === word.length) return this
        //else return undefined
    }
    autoComplete(word){
      const result = this.findWord(word)
      if(!result) return []
      const possiblePost = result.getWords()
      return possiblePost.map(x => word+x)
    }
     removeWord(word) {
      let result = this.findWord(word)
      if(Object.keys(result.characters).length){
        result.isWord = false;
        return;
      }
      let i = word.length-1
      while(i>-1){
        result = this.findWord(word.substring(0, i))
        console.log(4, word.substring(0, i))
           delete result.characters[word[i]]
        if(Object.keys(result.characters).length>1){
       
          return}
      
        
        i--;
      }
      
    }
}

let first = new Trie()
// first.addWord("fun")
// console.log(first.characters.f.characters.u)

first.addWord('fun')
first.addWord('fast')
first.addWord('fat')
first.addWord('fate')
first.addWord('father')
first.addWord('forget')
first.addWord('awesome')
first.addWord('argue')
console.log(first.characters.f.characters.u.characters)

console.log(first.getWords())

console.log(first.findWord('argue'))
console.log(first.autoComplete('fa'))

console.log(first.removeWord('argue'))
console.log(first.getWords())