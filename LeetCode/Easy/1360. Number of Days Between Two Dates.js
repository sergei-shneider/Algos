/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    let dateArr1 = date1.split('-')
    let dateArr2 = date2.split('-')
    dateArr1 = dateArr1.map(x => parseInt(x))
    dateArr2 = dateArr2.map(x => parseInt(x))
    if(dateArr1[0]>dateArr2[0]){
        let temp = [...dateArr1]
        dateArr1 = [...dateArr2]
        dateArr2 = temp
    }
    if(dateArr1[0]===dateArr2[0]){
        if(dateArr1[1]>dateArr2[1]){
            let temp = [...dateArr1]
            dateArr1 = [...dateArr2]
            dateArr2 = temp
        }
        else if(dateArr1[1]===dateArr2[1] &&                    dateArr1[2]>dateArr2[2]){
            let temp = [...dateArr1]
            dateArr1 = [...dateArr2]
            dateArr2 = temp
        }
    }
    const year1 = dateArr1[0]
    const month1 = dateArr1[1]
    const day1 = dateArr1[2]
    const year2 = dateArr2[0]
    const month2 = dateArr2[1]
    const day2 = dateArr2[2]
    let leapDays = 0
    let i = year1+1
    let addToCount = 1
    while(i<year2){
        if(i%4===0){
            leapDays++
            addToCount = 4
        }
        i+=addToCount
    }
    
    if(year2%4===0 && year2!==2100){
        if(month2>2) leapDays++
    }
    if(year1%4===0){
        if(month1<2 || month1===2 && day1<29) leapDays++
    }
  
    let totalDays = (year2-year1)*365
    totalDays+=leapDays
    if(month1===month2) totalDays+=(day2-day1)
    else{
        const removeDays = calcDays(month1)
        const addDays = calcDays(month2)
        totalDays+=addDays
        totalDays-=removeDays
        totalDays+=day2
        totalDays-=day1
    }
    return totalDays
    
};

function calcDays(monthIn){
    const dayArray = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let sum = 0
    for(let i = 0; i<monthIn; i++){
        sum+=dayArray[i]
    }
    return sum
}
