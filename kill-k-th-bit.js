function solution(n, k) {
  return parseInt((n >>> 0).toString(2).split('').map((v, i, arr) => { if (arr.length - k === i) v = 0; return v;})
    .reduce((aggr, v) => aggr += v, ''), 2); 
 };
 