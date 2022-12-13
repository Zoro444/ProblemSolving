let singleNumber = function(nums) {
    let obj = {}; 
    let arr = []; 

    for (let i = 0; i < nums.length; i++){ //O(n)
       if (obj[nums[i]] === undefined) obj[nums[i]] = 1; 
       else obj[nums[i]]++; 
    }

    arr = Object.keys(obj); //O(n)
    for (let i = 0; i < arr.length; i++) { //O(n)
        if (obj[arr[i]] === 1) return arr[i]; 
    }
    
    return -1; 
}; //O(3n) = O(n)


