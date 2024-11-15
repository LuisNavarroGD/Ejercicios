/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let resultado = [];

  for (let i = 0; i <= nums.length; i++) {
    for (let k = i + 1; k <= nums.length; k++) {
      if (nums[i] + nums[k] == target) {
        return [i, k];
      }
    }
  }

  return [];
};
