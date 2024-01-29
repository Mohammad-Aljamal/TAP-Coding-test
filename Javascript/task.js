// Q2: Javascript Question
// Write a JavaScript function that takes an array of numbers as a parameter and returns a number based on the following requirements.

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


function findMissingNum (nums) {
    const n = nums.length;
    const totalSum = (n * (n+1))/2;
    let numsSum = 0;

    for(let i=0; i<nums.length; i++){
        numsSum += nums[i];
    }
    return totalSum - numsSum;
}