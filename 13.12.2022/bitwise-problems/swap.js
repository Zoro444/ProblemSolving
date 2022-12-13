/*
  perform a swap operation to shift bits i and j of a number
*/

function countOfOne(dec, i ,j) {
  let x = 0;
  let y = 0;

  1 << i - 1 & dec? x = 1 : x = 0;
  1 << j - 1 & dec? y = 1 : y = 0;

  if (x === y) {
    return dec;
  } 

  dec ^= (1 << i - 1)
  dec ^= (1 << j - 1)

  return dec;
}
 /* time complexity = O(1) space complexity = O(1) */
