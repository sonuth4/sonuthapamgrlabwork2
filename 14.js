function sortArray(arr) {
    return arr.sort((a, b) => a - b); 
}
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
var sortedArray = sortArray(arr1);
console.log("Sorted Array:", sortedArray.join(","));
