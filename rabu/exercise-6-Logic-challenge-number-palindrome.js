
//Number palindrome 

/* in this exercise we search for palindrome number, when forward number is same with the backward number, it means the number is palindrome, if that so we must looking for thenext palindrome number and return its value
*/
/* the steps
 1. first we must check if the number is palindrome or not, 
 2. if it palindrom add the number until we get the next palindrome number
 3. 
*/


function angkaPalindrome(num){
    var palCheck = false;
    while (palCheck === false){
        num++;

        var toString = num + ''
        var balik = '' ;
        for(i = 0; i < toString.length; i++){
            balik = toString[i]+ balik
        }

        if (toString === balik){
            palCheck = true
        } else {
            paCheck = false
        }
    }return balik = Number(balik)
}




// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001