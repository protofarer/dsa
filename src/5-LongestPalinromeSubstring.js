function longestPalindrome(s) {
    var palindromes = [];
    for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j <= s.length; j++) {
            var substr = s.substring(i, j);
            console.log("", substr);
            isPalindrome(substr) && palindromes.push(substr);
        }
    }
    if (palindromes.length > 0) {
        var largest = palindromes.reduce(function (prev, curr) { return (curr.length > prev.length
            ? curr
            : prev); });
        return largest;
    }
    return;
}
function isPalindrome(s) {
    if (s.length === 1)
        return true;
    for (var i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
var s = "a";
// console.log(``, isPalindrome('kadak'))
console.log(longestPalindrome(s));
