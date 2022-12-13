let singleNonDuplicate = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let center = 0;
  
  for (let i = 0; i < nums.length; i++) {//O(log n)
    center = (right - left) / 2;
    if (right - left === 2) {
      if (nums[left] === nums[left + center]) return nums[right];
      return nums[left];
    }

    if (center % 2 !== 0) {
      if (nums[center + left] === nums[center + left - 1]) left += center + 1;
      else if (nums[center + left] === nums[center + left + 1]) right -= center - 1;
      else return nums[center + left]
    }

    else if (center % 2 === 0) {
      if (nums[center + left] === nums[center + left - 1]) right = right - center - 2
      else if (nums[center + left] === nums[center + left + 1]) left += center + 2;
      else return nums[center + left]
    }
  }
};//O(log n)


