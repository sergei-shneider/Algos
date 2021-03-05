var backspaceCompare = function(S, T) {
    let Sarr =[]
    for(let i = 0; i<S.length; i++){
        if(S[i]==='#') Sarr.pop()
        else Sarr.push(S[i])
    }
    let Tarr = []
    for(let i = 0; i<T.length; i++){
        if(T[i]==='#') Tarr.pop()
        else Tarr.push(T[i])
    }
    return Sarr.join("")===Tarr.join("")
};
