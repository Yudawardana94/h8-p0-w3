
//target terdekat

// function targetTerdekat(arr) {
//     // you can only write your code here!
//     var hitungX = 0
//     var counter = 0
//     var onOff = false
//     var xoAwal = ''
//     var i = 0

//     while (i < arr.length){
//       if ( onOff === false ){
//         if (counter === 0){
//           // jika count 0 masuk sini
//           if (arr[i] === 'x' || arr[i] === 'o'){
//             // console.log('masuk sini'+i)
//             xoAwal = arr[i];
//             counter++
//             i++
//               if (arr[i] === 'x'){
//                 hitungX++
//               }
//           } else {
//             // console.log('eh disini arr ke'+i)
//             i++;
//             if (arr[i] === 'x'){
//               hitungX++
//             }
//           }
//         } else {
//           // jika > 0 jadinya kesini
//           // console.log(xoAwal+'hehe')
//           if (arr[i] === xoAwal){
//             counter = 1 
//             i++
//               if (arr[i] === 'x'){
//                 hitungX++
//               }
//           } else if (arr[i] === ' '){
//             counter++;
//             i++
//             if (arr[i] === 'x'){
//               hitungX++
//             }
//             // console.log('ini adlaah i ke '+i+' dan x nya ada' + hitungX)
//           } else {
//           // console.log('loh kok disini ?'+i)
//           // counter++
//           // i++
//           if (arr[i] === 'x'){
//             hitungX++
//           }
//           onOff = true
//           }
//         }
//       } else {
//         if (i === arr.length && hitungX === 0){
//           console.log(x)
//           return hitungX
//         } else {
//           // console.log(x)
//           return counter
//         }
//       }
//     }
// }
  
function targetTerdekat(arr){
  var posO = 0;
  var toRight = 0;
  var toLeft = 0;

  for (i = 0; i < arr.length; i++){
    if (arr[i] === 'o' ){
      posO = i
    }
  }  
  for (i = posO; i < arr.length ; i++){
    if (arr[i] === 'x' ){
      toRight = i-posO;
      break
    }
  }
    // console.log(posO,'-----')
  for (j = posO; j >= 0; j--){
    if ( arr[j] === 'x'){
      toLeft = j;
      break;
    } 
  }
  if (toLeft === 0){
    return toRight
  } else {
    return posO-toLeft
  }
}

//   // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat(['x','x',' ',' ',' ','x','o',' ','x'])) // 1

  /* P R O B L E M

  Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
  */


  