
function QuickSort(arrIn, lessHalf, moreHalf){
  if((moreHalf-lessHalf)<=1) {
    return }
  const pivot = randomPivot(moreHalf, lessHalf)
  swapTwo(arrIn, pivot, lessHalf)
  let more = lessHalf+1
  for(let i = lessHalf+1; i<moreHalf; i++){
    if(arrIn[i]<arrIn[lessHalf]){
      if(i===more) more++
      else if(i>more){
        swapTwo(arrIn, i, more)
        more++
      }
    }
  }
  

  if(arrIn[lessHalf]>arrIn[more-1]) swapTwo(arrIn, lessHalf, more-1)

  QuickSort(arrIn, lessHalf, more-1)
  QuickSort(arrIn, more, moreHalf)
}

function randomPivot(arrLen, min){
  return Math.floor(Math.random() * (arrLen - min) + min)
}

function swapTwo(arrIn, source, destination){
  let temp;
  temp = arrIn[source]
  arrIn[source] = arrIn[destination]
  arrIn[destination] = temp
}
