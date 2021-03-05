var subdomainVisits = function(cpdomains) {
    let dict = {}
    for(let i = 0; i<cpdomains.length; i++){
        
        let dataSplit = cpdomains[i].split(" ")
        let num = parseInt(dataSplit[0])
        let domain = dataSplit[1]
        
        while(domain.indexOf('.')!==-1){
            if(dict[domain]) dict[domain] += num
            else dict[domain] = num    
            domain = domain.substring(domain.indexOf('.')+1)
        }
        if(dict[domain]) dict[domain] += num
        else dict[domain] = num  
    }
    const output = []
    for(let key in dict){
        output.push(dict[key]+' '+key)
    }
    return output
};
