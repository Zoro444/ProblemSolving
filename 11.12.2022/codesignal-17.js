function solution(n, k) {
  return  n & ~(n << k - 1);       
};
