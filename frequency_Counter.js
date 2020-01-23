function freqCounter(arrIn, numIn){
  let start = Math.ceil(arrIn.length/4);
  let end = Math.ceil(arrIn.length*0.75)
  let oldstart =0;
  let oldend =arrIn.length-1;
  let startfound = 0;
  let endfound = 0;
  while(!startfound || !endfound){
    //console.log(arrIn[start], end, start)
    if(!startfound){
      
      if(start===0){
        if(arrIn[start]===numIn) startfound = 1;
        if(arrIn[start]>numIn) return -1;
      }
      else{
        if(arrIn[start]===numIn){
          if(arrIn[start+1]>numIn){
            end = start;
            endfound = 1;
          }
          if(arrIn[start-1]<numIn){
            startfound = 1;
          }
          else{
            if(start-1===0){
              console.log('one', start)
              start=start-2;
              console.log('two', start)
              startfound=1;
            }
            else{
            let temp = start;
            start=start-Math.ceil((start-oldstart)/2)
            oldstart = temp;
            }
          }
        }
        else if(arrIn[start]<numIn){
          
          if(arrIn[start+1]===numIn){
            start++
            console.log(start)
            startfound=1;
          }
          else{
            let temp = start;
            
            start=start+Math.ceil((oldstart-start)/2)
            oldstart=temp;
          }
        }
        else if(arrIn[start]>numIn){
          if(arrIn[start-1]===numIn){
            end=start-1;
            endfound=1;
          }
            let temp = start;
            console.log(start)
            start=start-Math.ceil((start-oldstart)/2)
            console.log(start, Math.ceil(start-oldstart)/2)
            if(Math.ceil(start-oldstart)/2===0) return 0
            oldstart = temp;
        }
      }
    }
    if(!endfound){
      
      //console.log(arrIn[end], arrIn[end-1])
      if(end===arrIn.length-1){
        //console.log(end)
        if(arrIn[end]===numIn) endfound = 1;
        //if(arrIn[end-1]===numIn) 
        if(arrIn[end]<numIn) return -1;
      }
          // else{
        if(arrIn[end]===numIn){
          if(arrIn[end-1]<numIn){
            start=end;
            startfound = 1;
          }
          if(arrIn[end-1]<numIn) endfound = 1;
          else{
            let temp = end;
            end=end+Math.ceil((oldend-end)/2)
            
            oldend = temp;
          }
        }
        else if(arrIn[end]>numIn){
          if(arrIn[end-1]===numIn){
        
            endfound=1;
          }
          else{
            let temp = end;
            end=end-Math.ceil((end-start)/2)
            
            oldstart=temp;
          }
        }
        else if(arrIn[end]<numIn){
          if(arrIn[end+1]===numIn){
            start=end+1;
            startfound=1;
          }
          else{
            let temp = end;
            end=end+Math.ceil((oldend-end)/2)
            //console.log(end)
            oldend = temp;
          }
        }
      //}
    }
  }
  //console.log(end, start)
  if(end===start && arrIn[start]===numIn) return 1;
  return end-start
}
let arr = () => {
  let output = []
  let i = 0
  while(i<100){
    output.push(i)
    i++
  }
  return output
}
//console.log(freqCounter([0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2], 1))
//freqCounter([1, 1, 2, 2, 2, 2, 3], 2)
//freqCounter([1, 1, 2, 2, 2, 2, 3], 3)
//freqCounter([1, 1, 2, 2, 2, 2, 3], 1)
//freqCounter([1, 1, 2, 2, 2, 2, 3], 4)
let inA = arr();
freqCounter(inA, 33)
