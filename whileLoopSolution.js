// random array:
let arr = [2, 10, 20, 8, 6, 7, 5, 3, 0, 9];

// worst case, O(n^2):
// let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// best case, O(n):
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const bubbleSort = (arr) => {
  // swap variable will be used to check condition of while loop
  let swap;
  // totalChecks is the number of times it compares two numbers
  // totalLoops is the number of times it loops through the array
  // these are just to see what's happening
  let totalChecks = 0;
  let totalLoops = 0;
  // do {some function} while (swap is true,
  // meaning a swap happened in that pass)
  do {
    // set swap to false at the beginning of each loop
    swap = false;
    console.log("Current", arr);
    // for loop to loop through the array, one index at a time
    for (let i = 0; i < arr.length; i++) {
      // if the first number is less than the second number,
      // they need to be swapped
      if (arr[i] > arr[i + 1]) {
        // set a temp variable to hold the first value
        let temp = arr[i];
        // set the first value to the second value
        arr[i] = arr[i + 1];
        // set the second value to the old value of the first
        // (stored in temp)
        arr[i + 1] = temp;
        // a swap just happened, set swap to true
        swap = true;
      }
      // increment our checks and loops
      totalChecks += 1;
    }
    totalLoops += 1;
  } while (swap);
  // once it makes it through the loop for a full iteration
  // without hitting the if statement, and thus without a swap
  // we can log our final array (and our checks and loops)
  console.log(
    "Final",
    arr,
    "completed in",
    totalChecks,
    "checks, and",
    totalLoops,
    "loops"
  );
};

bubbleSort(arr);
