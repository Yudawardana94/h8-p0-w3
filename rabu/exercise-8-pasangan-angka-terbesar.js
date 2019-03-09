
//pasangan terbesar angka

function pasanganTerbesar(num){
    var kumpulanAngka = num+''
    var arrNum = []
    for( i = 0; i < kumpulanAngka.length-1; i++){
        var kum ='';
        kum=kumpulanAngka[i]+kumpulanAngka[i+1];
        arrNum.push(kum)
    }
    var max = arrNum[0]
    for(i = 1; i < arrNum.length; i++){
        if(arrNum[i]>max){
            max = arrNum[i]
        }
    }
    return max
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
// console.log(pasanganTerbesar(12783456)); // 83
// console.log(pasanganTerbesar(910233)); // 91
// console.log(pasanganTerbesar(71856421)); // 85
// console.log(pasanganTerbesar(79918293)); // 99