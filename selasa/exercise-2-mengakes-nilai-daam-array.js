
function balikString(str){
    var tampung =''
    for( i=str.length-1;i>=0;i--){
        tampung+=str[i]
    }return tampung
}

console.log(balikString('Hello world!'))
console.log(balikString('Daring Fox batch 30'))
console.log(balikString('besok bisakan ?'))