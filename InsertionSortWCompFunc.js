function insertionSort(arrIn, compFunc){
 let truth;
 let truthIn;
 let len = arrIn.length-1;
 
  for (let i = 0; i<len; i++){
    
     if(compFunc){
          truth = compFunc(arrIn[i+1], arrIn[i])<0
          console.log('forloop trigger', arrIn[i+1],arrIn[i],truth)
      }
    else truth = arrIn[i+1]<arrIn[i] 
    if(truth){
      let j = i;
      if(compFunc){
          truthIn = compFunc(arrIn[j+1], arrIn[j])<0
          console.log('initial trigger', arrIn[j+1],arrIn[j],truthIn)
      }
      else truthIn = arrIn[j+1]<arrIn[j] 
      
      while(truthIn){
        let temp = arrIn[j]
        arrIn[j]=arrIn[j+1]
        arrIn[j+1]=temp
         console.log(arrIn)
       j--
         if(compFunc && arrIn[j]){
          truthIn = compFunc(arrIn[j+1], arrIn[j])<0
          console.log('while loop trigger', arrIn[j+1],arrIn[j],truthIn)
      }
        else truthIn = arrIn[j+1]<arrIn[j]
      }
    }
  }
  console.log(arrIn)
  return arrIn
}

let kitties = ["Lilbub", "Garfield", "Heathcliff", "Blue", "Grumpy"]

function strC(a, b){
  if(a<b) return -1
  else if(a>b) return 1
  else return 0
}

insertionSort(kitties, strC)