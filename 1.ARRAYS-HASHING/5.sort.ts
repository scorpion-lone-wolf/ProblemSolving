function sortArray(nums: number[]): number[] {
    // return heapSort(nums, 0, nums.length - 1);
    return mergeSort(nums, 0, nums.length - 1);
}

// *--------------------------------------------------MergeSort ----------------------------------------------------------------
function mergeSort(nums: number[], low: number, high: number): number[] {
    if (low >= high) return nums;

    const mid = Math.floor((low + high) / 2);
    nums = mergeSort(nums, low, mid);
    nums = mergeSort(nums, mid + 1, high);
    nums = merge(nums, low, mid, high);
    return nums;
}

function merge(nums: number[], low: number, mid: number, high: number): number[] {

    let l1 = low, h1 = mid;
    let l2 = mid + 1, h2 = high;
    const tempArray: number[] = [];

    while (l1 <= h1 && l2 <= h2) {

        if (nums[l1] <= nums[l2]) {
            tempArray.push(nums[l1++]);
        } else {
            tempArray.push(nums[l2++]);
        }
    }

    while (l1 <= h1) tempArray.push(nums[l1++]);
    while (l2 <= h2) tempArray.push(nums[l2++]);

    // copying the tempArray to original array
    let j = 0;

    for (let i = low; i <= high; ++i) {
        nums[i] = tempArray[j++];
    }

    return nums;
}

//  * ------------------------- Heap sort => time = 0(nlogn) space = O(1) , inplace algorithm, unstable (i.e change the order of elements with equal keys) ------------------------------------


function heapSort(nums: number[], low: number, high: number): number[] {

    let start = low;
    let end = high;
    buildHeap(nums, start, end);

    while (end > start) {
        const temp = nums[end]
        nums[end] = nums[start];
        nums[start] = temp;
        end--;
        heapify(nums, 0, end);
    }
    return nums;
}


function buildHeap(nums: number[], start: number, end: number) {

    for (let i = Math.floor((start + end) / 2); i >= 0; i--) {
        heapify(nums, i, end);
    }
}

function heapify(nums: number[], start: number, end: number) {
    const leftChildIndex = (2 * start) + 1;
    const rightChildIndex = (2 * start) + 2;

    let largestIndex = start;

    if (leftChildIndex <= end && nums[leftChildIndex] > nums[largestIndex]) {
        largestIndex = leftChildIndex;
    }
    if (rightChildIndex <= end && nums[rightChildIndex] > nums[largestIndex]) {
        largestIndex = rightChildIndex;
    }
    if (largestIndex != start) {
        // swap
        const temp = nums[start];
        nums[start] = nums[largestIndex];
        nums[largestIndex] = temp;
        // recursive call with the largest index
        heapify(nums, largestIndex, end);
    }

}

