

function palindrome(word){
    var backward = ''
    for( i=0; i<word.length; i++){
        backward= word[i]+backward
    }
    // console.log(word + ' '+ backward+ 'word ke i adalah '+ word[i])
    if (word === backward){
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
