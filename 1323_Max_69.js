var maximum69Number  = function(num) {
    let strNum = num.toString().split('');
    for(let i = 0; i<strNum.length; i++)
    {
        if(strNum[i]==='6') {
            strNum[i]='9';
            break;
        }
    }
    return +strNum.join('')
    
};
