/*
  check whether the number of bits in the value of 1 is odd or even
*/

function countOfOne(dec) {
  let count = 0;
  for (let i = 0 ; i < 32; i++) { 
    if (1 << i & dec) count++;
  } 
    return count % 2 === 0  
} /* time complexity = O(1) space complexity = O(1) */
