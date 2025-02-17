/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
*/

function stones(jewels, stones) {
    let count = 0;
    
  for (let elemento of stones) {
    if (jewels.includes(elemento)) {
      count++;
    }
  }
  return count;
}

function jewelsInStones(jewels, stones) {
    let resultado = 0;
    
    for(let elemento of jewels){
        for(let letra of stones){
            if(elemento === letra){
                resultado++
            }
        }
    }
    return resultado;
}

console.log(jewelsInStones("aA", "aAAbbbb"));
console.log(stones("aA", "aAAbbbb"));