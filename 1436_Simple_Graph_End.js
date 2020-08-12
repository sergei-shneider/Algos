var destCity = function(paths) {
    let start = [];
    let end = [];
    paths.forEach(x=>{
        start.push(x[0]);
        end.push(x[1]);
    })
    for(let i = 0; i<end.length; i++){
        if(start.indexOf(end[i])===-1) return end[i];
    }
    return -1;
};
