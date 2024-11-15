/**
 * @param {number[]} nums
 * @return {number}
 */

let resultado = 0;
let cortar = 0;

var jump = function (nums) {
  if (nums.length === 1) return 0;

  let max = 0,
    prev = 0,
    jump = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);

    if (i === prev) {
      jump++;
      prev = max;
    }
  }
  return jump;
};
