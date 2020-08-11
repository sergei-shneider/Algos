
var isHappy = function(n) {
    let numRay = [];
    let been = [];
    while(n!=1){
        if(been.indexOf(n)!==-1) return false;
        been.push(n);
        numRay = [];
        while(n>0){
            numRay.push(n%10);
            n=Math.floor(n/10);
        }
        for(let i = 0; i<numRay.length; i++){
            n+=(numRay[i]*numRay[i])
        }
    }
    return true;
};
