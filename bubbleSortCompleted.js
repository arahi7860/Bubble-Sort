// Bubble Sort

// Loops through an array
// compares one value to the next value
// if the next value is less than the current value
// they swap places in the array.

// let arr = [4, 7, 8, 2, 5, 1];
let arr = [6, 1, 2, 3, 4, 5];
console.log("Original", arr);

function bubbleSort(arr) {
  let noSwap;
  let totalPasses = 0;
  //loop through arr
  for (let v = arr.length; v > 0; v--) {
    noSwap = true;
    console.log("need to check", v);
    for (let j = 0; j < v - 1; j++) {
      // if compare current > next swap
      console.log("Comparing", arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    totalPasses += 1;
    console.log("Pass", totalPasses, arr);
    if (noSwap) break;
  }
}

function swap(arr, idx1, idx2) {
  // take current switch with next
  console.log("Swapping", arr[idx1], arr[idx2]);
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  console.log("AFTER SWAP", arr);
}

bubbleSort(arr);
console.log("Sorted", arr);
