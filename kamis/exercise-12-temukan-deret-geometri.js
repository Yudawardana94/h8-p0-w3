// function tentukanDeretGeometri(arr) {
//     // you can only write your code here!
//   }
  
function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var newArr = []
    
    for( i = arr.length-1; i >= 0; i--){
        // console.log('i ke '+i+'adalah arr[i] ke '+arr[i])
        var tempo = 0;
        if(i > 0){
            tempo=(arr[i]/arr[i-1])
            newArr.push(tempo)
        }
    }
    // return newArr

    if (newArr[0]===newArr[1]){
        return true
    } else{
        return false
    }
}

  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  