// const arr1 = [2,8,15,19];
// const arr2 = [5,9,12,17];

const conquer = function(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else {
      merged.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
};

const rmergeSort = function(arr, low , high) {
  divide(low, high);
}
const divide = function(low, high) {
  if (low < high) {
    const mid = (low + high) / 2;
    divide(low, mid);
    divide(mid + 1, high);
    const left = arr.slice(low, mid);
    const right = arr.slice(mid);
    conquer(left, right);
  }
}

exports.rmergeSort = rmergeSort;