# Bubble Sort

**Bubble Sort** or **Sinking Sort** is a simple sorting method that will sort an array by comparing adjacent elements in an array and swaps their positions if they are in the wrong order. In effect causing each item to "bubble" to the position it belongs.

Bubble Sort is mainly used to introduce the concept of an algorithm, or a sorting algorithm and due to poor performance not widely used in the "real world."

## Diagram

![Step 1](./images/bubble-sort-step1-iteration-stages.png)
![Step 2](./images/bubble-sort-step2-iteration-stages.png)

![Step 3](./images/bubble-sort-step3-iteration-stages.png)
![Step 4](./images/bubble-sort-step4-iteration-stages.png)

[Visual](https://visualgo.net/en/sorting)

[![Dancing Bubble Sort](./images/dance.png)](https://www.youtube.com/watch?v=lyZQPjUT5B4)

## Time Complexity

### Worst Case Complexity: O(n<sup>2</sup>)

When the array is not sorted this sorting algorithm uses nested loops to compare all items and sort them. This sorting algorithm performs poorly with large data sets or if the data set is in a reversed order.

`array = [7,6,5,4,3,2,1]`

### Best Case Complexity: O(N)

Bubble Sort can have near linear time on an already sorted array in the case that the code has been optimized.

`array = [1,2,3,4,5,6,7]`

`array = [7,1,2,3,4,5,6]`

### Use Cases

This simple algorithm performs poorly in real world use and is used primarily as an educational tool.

#### Resources

[E Question Answers](equestionanswers.com/c/c-bubble-sort.php)

[Bubble Sort Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
