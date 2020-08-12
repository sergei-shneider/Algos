var isValid = function(s) {
    const bDict = {'{':'}', "[":"]", "(":")"};
    const stack = [];
    const sLen = s.length;
    if(sLen===0) return true;
    if(sLen%2!==0) return false;
    for (let i = 0; i<sLen; i++){
        if(s[i] in bDict){
            stack.push(s[i]);
        }
        else{
            if(i<1) return false;
            if(bDict[stack.pop()]!=s[i]) return false;
        }
    }
    if(stack.length!=0) return false;
    return true;
};
