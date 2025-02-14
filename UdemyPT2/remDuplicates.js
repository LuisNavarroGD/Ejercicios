

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums [j++] = nums[i];
    }
  }

  return j + 1;
};

console.log(removeDuplicates([1, 1, 2]));
