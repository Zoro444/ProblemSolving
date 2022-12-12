let pivotIndex = function(nums) {
    if (nums.length === 1) return 0;
    let x = 0; y = 0;
   
    for (let i = 1; i < nums.length; i++) {
        x += nums[i];
    }

    for (let i = 1; i < nums.length; i++){
        if (x - y === 0) { 
           if (i === 1) return 0; 
            return i;
        }
        
        y += nums[i - 1];
        x -= nums[i];

        if (i === nums.length - 1 && x - y !== 0 ) return -1;
        if (x - y === 0) return i;
    }
};

console.log(pivotIndex([-1,-1,0,1,1,0]));