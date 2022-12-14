/*
  A phrase is a palindrome if, after converting all uppercase letters
   into lowercase letters and removing all non-alphanumeric characters,
   it reads the same forward and backward. Alphanumeric characters include 
   letters and numbers. 
 Given a string s, return true if it is a palindrome, or false otherwise.
*/

let isPalindrome = function(s) {
    let str = ''; //space O(1)
    
    for (let i = 0; i < s.length; i++) { //time O(n)
      if (s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57 
       || s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90 
       || s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122
       ) { 
        if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90 ) {
            str += String.fromCodePoint(s[i].charCodeAt() + 32); 
        }
        else {
            str += s[i]; //space O(n)
        }
      }
    }

    for (let i = 0, j = str.length - 1; i < Math.floor(str.length / 2); i++, j--) { //time O(n/2)
      if (str[i] !== str[j]) return false;
    }
    return true; 
}; /* time complexity = O(2n + n/2) = O(n) space complexity = O(1 + n) = O(n) */
