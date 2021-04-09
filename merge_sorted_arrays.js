function mergeSortedArrays(array1, array2){
    const mergedArray = [array1.length+array2.length];
    let i = 0;
    let j = 0;
    let k=0;
    
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            mergedArray[k] =array1[i];
            i++;
            k++;
     }   
     else {
       mergedArray[k] = array2[j];
       j++;
       k++;
     }
    }
    while(i<array1.length){
        mergedArray[k] =array1[i];
        i++;
        k++;

    }
    while(j<array2.length){
        mergedArray[k] = array2[j];
        j++;
        k++;
    }
    return mergedArray;
  }
  
 console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));