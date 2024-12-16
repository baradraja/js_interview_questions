/* Problem: Find the Smallest Subarray to Sort
You are given an array of integers that may or may not be sorted. 
Write a function findSmallestSubarrayToSort that finds the smallest subarray which, 
when sorted, makes the entire array sorted in ascending order.

If the array is already sorted, return an empty array. If sorting the entire array is 
required, return the entire array.

Constraints:
Do not use built-in sorting functions.
The array can contain negative integers.

findSmallestSubarrayToSort([1, 3, 5, 4, 2, 6, 7]); // Output: [3, 5, 4, 2]
findSmallestSubarrayToSort([1, 2, 3, 4, 5]);       // Output: []
findSmallestSubarrayToSort([4, 3, 2, 1]);          // Output: [4, 3, 2, 1]
findSmallestSubarrayToSort([1, 2, 6, 5, 4, 3, 7]); // Output: [6, 5, 4, 3]
*/
function findSmallestSubarrayToSort(arr) {
    //Initialize
    const n = arr.length;
    let left=0, right=n-1;

    //1:find the left boundary
    while(left<n-1 && arr[left] <= arr[left+1]){
        left++;
    }
    //if the array is sorted
    if(left === n-1) return [];
    //2:find the right boundary
    while(right>0 && arr[right] >= arr[right-1]){
        right--;
    }

    //3: find min and max of subarray
    let subarrayMin = Infinity, subarrayMax = -Infinity;
    for(let i=left; i<=right; i++){
        subarrayMin = Math.min(subarrayMin, arr[i]);
        subarrayMax = Math.max(subarrayMax, arr[i]);
    }
    //4: expand the boundaries
    while(left >0 && arr[left-1]>subarrayMin){
        left--;
    }
    while(right<n-1 && arr[right+1] < subarrayMax){
        right++;
    }
    //return the array
    return arr.slice(left, right+1);
}
console.log(findSmallestSubarrayToSort([1, 3, 5, 4, 2, 6, 7])); // Output: [3, 5, 4, 2]
console.log(findSmallestSubarrayToSort([1, 2, 3, 4, 5]));       // Output: []
console.log(findSmallestSubarrayToSort([4, 3, 2, 1]));          // Output: [4, 3, 2, 1]
console.log(findSmallestSubarrayToSort([1, 2, 6, 5, 4, 3, 7])); // Output: [6, 5, 4, 3]