// const arr1 = [2,8,15,19];
// const arr2 = [5,9,12,17];

const merge = function(arr1, arr2) {
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

exports.merge = merge;