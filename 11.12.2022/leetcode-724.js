let pivotIndex = function(nums) {
    if (nums.length === 1) return 0; //O(1)
    let x = 0; //O(1)
    let y = 0; //O(1) 
   
    for (let i = 1; i < nums.length; i++) { //O(n)
        x += nums[i]; //O(1)
    }

    for (let i = 1; i < nums.length; i++){ //O(n)
        if (x - y === 0) { //O(1)
           if (i === 1) return 0; //O(1)
            return i; //O(1)
        }
        
        y += nums[i - 1]; //O(1)
        x -= nums[i]; //O(1)

        if (i === nums.length - 1 && x - y !== 0 ) return -1; //O(1)
        if (x - y === 0) return i; //O(1)
    }
}; //O(1 + 1 + 1 + n + 1 + n + 1 + 1 + 1 + 1 + 1 + 1 + 1 ) = O(11 + 2n) = O(n)

/* 
    Big O rules
    1.constants rule: remove constants
    2.sum rule: find the fastest growing term
    3.product rule: take out the coefficient 
*/