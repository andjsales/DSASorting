# DSA Sorting

## Overview

- This contains various sorting algorithms (JavaScript) along with comprehensive test suites using Jest.
- Each algorithm is contained in its own file with a corresponding test file to validate its functionality.

## Algorithms Included

- Bubble Sort (bubble.js): Compares and swaps adjacent elements if they are in the wrong order.
- Insertion Sort (insertion.js): Builds the final sorted array one item at a time by placing each new element into the correct position.
- Selection Sort (selection.js): Improves on bubble sort by making only one exchange for every pass through the list.
- Merge Sort (merge.js): A divide and conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
- Quick Sort (quick.js): Selects a pivot element and partitions the array around the pivot, recursively sorting the subarrays.
- Radix Sort (radix.js): Sorts integers by processing individual digits.

## Setup

`npm install`

## Testing

Run all the test suites for the sorting algorithms and output the results to make sure that each function behaves as expected:

`npm test`
