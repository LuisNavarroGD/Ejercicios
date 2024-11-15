/**
 * @param {number[]} nums
 * @return {boolean}
 */

let resultado = 0;
let cortar = 0;

var canJump = function (nums) {
  let maximo = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maximo) {
      return false;
    }
    maximo = Math.max(maximo, i + nums[i]);
  }

  return true;
};
