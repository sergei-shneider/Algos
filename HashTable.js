class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }
  _hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
  }
  set(key, value){
    
    let idx = this._hash(key, this.keyMap.length)
    
    while(this.keyMap[idx]){
      idx++;
    }
    
    this.keyMap[idx]=[key, value];
  }
  get(key){
    let idx = this._hash(key, this.keyMap.length)
    while(!this.keyMap[idx] || this.keyMap[idx][0]!==key){
      idx++
    }
    return this.keyMap[idx]
  }
  keys(){
    let output = [];
    this.keyMap.forEach((x) => {
      if(output.indexOf(x[0])===-1) output.push(x[0])
    })
    return output;
  }
  values(){
    let output = [];
    this.keyMap.forEach((x) => {
      if(output.indexOf(x[1])===-1) output.push(x[1])
    })
    return output;
  }
}

let ht = new HashTable(7)
ht.set('cake', 'money')

ht.set('kace', 'no')
ht.set('aeck', 1)
ht.set('aeck', 3)
ht.set('aaaa', 2)
console.log(ht)
ht.get('cake')
ht.keys()
ht.values()
