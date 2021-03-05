var bitwiseComplement = function(N) {
    if(N===0) return 1
    let binary = toBinary(N)
    return fromBinary(binary)
};

function toBinary(n){
    let binary = []
    while(n){
        binary.push(n%2)
        n=Math.floor(n/2)
    }
    return binary.reverse().join("")
}

function fromBinary(n){
    let num = 0
    for(let i = 0; i<n.length; i++){
        num+=(Math.pow(2, n.length-i-1)*(+!parseInt(n[i])))
    }
    return num
}
