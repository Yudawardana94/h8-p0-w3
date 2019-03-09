
/* we must count the number or word from one sentence

steps :
// use bild in function
1. we must break the sentence to be separated using split,
2. we count the total of splited sentences using array.length

but if we cannot use build in function,then we must look for a manual way
1. if its not variable make it one container
2. after that push it to an array
3. count array length
*/

// function hitungJumlahKata(kalimat){
//     var kata = kalimat.split(' ');
//     return kata.length
// }


// function hitungJumlahKata(kalimat){
//     var kata = []
//     var penambah = '';
//     for(i = 0; i < kalimat.length; i++){
//         var counter = 0
//         if (kalimat[i] !== ' '){
//             penambah = penambah+kalimat[i];

//             // console.log(kalimat[i]+' keluar dr if')
//         } else {
//             counter = 0
//         }
//         // console.log ('i ke '+i+' adalah huruf '+kalimat[i])
//         // console.log(penambah)
//     }kata.push(penambah)
//     return kata
// }

// function hitungJumlahKata(kalimat){
//     var kata = []
//     var penambah = ''
//     for(i = 0; i < kalimat.length; i++){
//         if (kalimat[i] !== ' '){
//             penambah+=kalimat[i];
//             kata.push(penambah)
//         } else {
//             penambah = ''
//         }
//     }return kata
// }

function hitungJumlahKata(kalimat){
    var jumlahSpasi = 0
    for(i = 0; i<kalimat.length; i++ ){
        if (kalimat[i] === ' '){
            jumlahSpasi++
        }
    }return jumlahSpasi+1
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5


