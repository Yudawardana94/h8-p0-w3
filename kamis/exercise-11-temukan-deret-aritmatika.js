// temukan deret aritmatika

function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var newArr = []
    
    for( i = arr.length-1; i >= 0; i--){
        // console.log('i ke '+i+'adalah arr[i] ke '+arr[i])
        var tempo = 0;
        if(i > 0){
            tempo=(arr[i]-arr[i-1])
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
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false