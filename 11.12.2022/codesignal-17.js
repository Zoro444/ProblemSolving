function solution(n, k) {
  return  n & ~(n << k - 1); //O(1)      
};
