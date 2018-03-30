function pairwise(arr, arg) {
  var arrInd=[];
  for (var i=0;i<arr.length;i++){
    arrInd.push([]);
    arrInd[i][0]=arr[i]+0;
    arrInd[i][1]=i;
  }
  var sumInd=[];
  
  var j=0;
  while (j<(arrInd.length-1)){
    var k=j+1;
    while (k<arrInd.length){
      //console.log(arrInd[j][0]+arrInd[k][0]);
      if ((arrInd[j][0]+arrInd[k][0])===arg){
        sumInd.push(arrInd[j][1]+arrInd[k][1]);
        console.log('loop '+j+" "+k);
        arrInd.splice(k,1);
        arrInd.splice(j,1);
        console.log("array length "+arrInd.length);
        j--;
        //console.log(j+" "+k);
        break;
      }
      console.log(j+" "+k);
      k++;
    }
    j++;
  }
  
   return sumInd.reduce(function(sum,value){
    return sum+value;
  },0);
  
}

pairwise([1,4,2,3,0,5], 7);