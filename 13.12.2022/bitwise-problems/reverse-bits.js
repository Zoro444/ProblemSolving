/*
 reverse the bits of the number, for example: 11110000 -> 00001111
*/

function reverseBits(dec) {
  let x = 0;
  let y = 0;

  for (let i = 0, j = 31; i < 16; i++, j--) {
     1 << i & dec? x = 1 : x = 0;
     1 << j & dec? y = 1 : y = 0;
      
     if (x !== y){
      dec ^= (1 << i)
      dec ^= (1 << j)
     }
  }
    //for check -> console.log((dec >>> 0).toString(2));
    return dec;
} /* time complexity = O(1) space complexity = O(1) */
  