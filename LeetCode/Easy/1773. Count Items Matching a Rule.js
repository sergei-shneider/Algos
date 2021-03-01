var countMatches = function(items, ruleKey, ruleValue) {
    let idx = 0
    switch(ruleKey){
        case "color":
            idx = 1
            break
        case "name":
            idx = 2
            break
    }
    return items.filter(x => x[idx]===ruleValue).length
    
};
