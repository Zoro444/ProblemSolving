let productExceptSelf = function(nums) {
    let count = 1;
    let count2 = 1;
    let countOfZero = 0;

    for (let i = 0; i < nums.length; i++){
        count *= nums[i];
      
        if (nums[i] === 0) countOfZero++;
        else count2 *= nums[i];
    }

    if (countOfZero === nums.length) return nums.map(v => 0)
    return nums.map((v) => {
        if (v !== 0) return count / v;
        if (countOfZero > 1) return 0;
        return count2;
    })
};



console.log(productExceptSelf([0,4,0]));