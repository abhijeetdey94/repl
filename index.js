const quickSort = require('./quicksort');
const mergeSort = require('./mergesort');


// const arr = [7, 2, 5, 1, 4, 9, 6, 3, 10, 8];
// const arr = [1,2,3,4,5,6,7]
// quickSort.rquickSort(arr, 0, arr.length - 1);
// quickSort.iquickSort(arr, 0, arr.length - 1);

// console.log(arr);

/**------------------ Quick Sort End ----------------- */

const arr1 = [2,8,15,19];
const arr2 = [5,9,12,17];

console.log(mergeSort.merge(arr1, arr2).join(', '));