const swap = function(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const partition = function(arr, low, high) {
  const pivot = low;
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= arr[pivot]) {
      i++;
    }
    while ((arr[j] > arr[pivot]) && j > pivot) {
      j--;
    }
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, pivot, j);
  console.log(j);
  return j;
}

const rquickSort = function(arr, low, high) {
  if (low < high) {
    const partitionIndex = partition(arr, low, high);
    rquickSort(arr, low, partitionIndex);
    rquickSort(arr, partitionIndex + 1, high);
  }
}

const iquickSort = function(arr, low, high) {
  const stack = [];
  let top = -1;

  stack[++top] = low;
  stack[++top] = high;

  while (top >= 0) {
    let h = stack[top--];
    let l = stack[top--];

    const partitionIndex = partition(arr, l, h);

    if (partitionIndex > l) {
      stack[++top] = l;
      stack[++top] = partitionIndex;
    }
    if (partitionIndex < h) {
      stack[++top] = partitionIndex + 1;
      stack[++top] = h;
    }
  }
}

exports.rquickSort = rquickSort;
exports.iquickSort = iquickSort