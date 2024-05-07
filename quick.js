/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            swapIdx++;
            [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
        }
    }
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
    return swapIdx;
}

// quickSort accepts an array, left index, and right index
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

module.exports = quickSort;
