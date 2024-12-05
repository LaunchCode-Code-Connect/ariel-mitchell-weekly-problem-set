// 1. Easy Difficulty - https://leetcode.com/problems/contains-duplicate/
//    - Youtube Solution - https://www.youtube.com/watch?v=3OamzN90kPg

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let containsDuplicate = function(nums) {
    const uniqueNums = new Set(nums);
    return uniqueNums.size !== nums.length;
};

let nums1 = [1, 2, 3, 4];
let nums2 = [1, 1, 2, 3, 4, 5];

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));