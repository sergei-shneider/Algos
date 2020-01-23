function bubbleSort(arrIn, comp){
  let swapped = 1;
  while(swapped){
      swapped = 0;
      for(let i = 0; i<arrIn.length-1; i++){
        let check = arrIn[i]>arrIn[i+1]
        if(comp) check = comp(arrIn[i],arrIn[i+1])>0
         if(check){
             let temp = arrIn[i]
             arrIn[i]=arrIn[i+1]
             arrIn[i+1]=temp
             swapped=1;
         }   
      }
  }
  return arrIn;
}

bubbleSort([3, 4, 5, 2, 1, 15, 22, 6, 9])