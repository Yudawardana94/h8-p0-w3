
//contoh output
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
input.splice(4,1,"Pria","SMA Internasional Metro")
console.log(input)
console.log('---------------------------------')

var tanggalBulanTahun = input[3]
console.log(tanggalBulanTahun)
console.log('---------------------------------')

var pisah = tanggalBulanTahun.split("/"); 
console.log(pisah)
console.log('---------------------------------')

var tanggal = pisah[0];
var bulan = pisah[1];
var tahun = pisah[2];

console.log(tanggal);
switch (bulan) {
    case '01':
    console.log('January')
    break;
    case '02':
    console.log('February');
    break;
    case '03':
    console.log('March');
    break;
    case '04':
    console.log('April');
    break;
    case '05':
    console.log('May');
    break
    case '06':
    console.log('June');
    break;
    case '07':
    console.log('July');
    break;
    case '08':
    console.log('Agustus');
    break;
    case '09':
    console.log('September');
    break;
    case '10':
    console.log('Oktober');
    break;
    case '11':
    console.log('November');
    break;
    case '12':
    console.log('December');
    break;
    default:
    console.log('ada yang aneh')
}
console.log(bulan);
console.log(tahun);
console.log('---------------------------------')

pisah.sort()
console.log(pisah)
console.log('---------------------------------')

console.log(pisah.join('-'))
console.log('---------------------------------')

var hasilSlice = input[1].slice(0,15)
console.log(hasilSlice)

