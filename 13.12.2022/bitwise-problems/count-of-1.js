/* 
  count the number of bits in a number with a value of 1
*/

function countOfOne(dec) {
  let count = 0;
  for (let i = 0 ; i < 32; i++) { 
    if (1 << i & dec) count++;
  } 
  return count;
} /* time complexity = O(1) space complexity = O(1) */
