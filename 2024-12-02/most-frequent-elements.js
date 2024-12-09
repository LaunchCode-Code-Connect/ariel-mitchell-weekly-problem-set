// 3. Medium Difficulty - https://leetcode.com/problems/top-k-frequent-elements/description/
//    - Youtube Solution - https://www.youtube.com/watch?v=YPTqKIgVk-k

//    Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

let topKFrequent = function(nums, k) {
    if (k === nums.length) {
        return nums;
    }

    let uniqueNums = new Set(nums);
    let counters = {};
    let topKNums = [];

    for (let value of uniqueNums) {
        let counter = 0;
        for (let j=0; j<nums.length; j++) {
            if (nums[j] === value) {
                counter++;
            }
        }
        counters[value] = counter;
    }

    while (topKNums.length < k) {
        let highestCount = 0;
        let highestCountNum;

        for (key in counters) {
            if (counters[key] > highestCount) {
                highestCount = counters[key];
                highestCountNum = Number(key);
            }
        }

        topKNums.push(highestCountNum);
        delete counters[highestCountNum];
    }

    return topKNums;
    
};