function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var output =[]
    var genap =[]
    var ganjil = []
    var modTiga = []

    for ( i = 0; i < arr.length; i++){
      if (arr[i] % 3 === 0){
        modTiga.push(arr[i])
      } else if (arr[i] % 2 !== 0){
        ganjil.push(arr[i])
      } else if (arr[i] % 2 === 0){
        genap.push(arr[i])
      }

    } output.push(genap,ganjil,modTiga)
    return output
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  console.log (mengelompokkanAngka([70,71,72,73,74,75,76,95,96,97,98,99,100,10002,1003,104]))

  //PROBLEM

/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3

Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]*/