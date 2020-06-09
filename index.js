const quickSort = require('./quicksort');
const mergeSort = require('./mergesort');

/** Unsorted array */
let arr = [7, 2, 5, 1, 4, 9, 6, 3, 10, 8];

/**------------------ Quick Sort End ----------------- */
// quickSort.rquickSort(arr, 0, arr.length - 1);
// quickSort.iquickSort(arr, 0, arr.length - 1);
/**------------------ Quick Sort End ----------------- */


/**------------------ Merge Sort Start ----------------- */
mergeSort.rmergeSort(arr, 0, arr.length - 1);
/**------------------ Merge Sort End ----------------- */





/** Print Sorted array */
console.log(arr);



/** Rough */

// const ar = [1,2,3,4];

// const parent = function (arr) {
//   child();
// }
// const child = function() {
//   console.log('line 35', arr);
// }
// parent(ar);