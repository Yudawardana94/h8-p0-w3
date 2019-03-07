

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


// //latihan array 
function data(arr){
    for ( var i = 0; i < arr.length; i++ ){
        console.log('Id = '+ arr[i][0]);
        console.log('Name = '+ arr[i][1]);
        console.log('Tempat TanggalLahir = '+ arr[i][2]+', '+ arr[i][3]);
        console.log('Hobby = '+ arr[i][4]);
        console.log(' ');
}
}
console.log(data(input))


