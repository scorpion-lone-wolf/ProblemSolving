// *<------------------------> Using "HashMap and sorting" t = O(nlog(n)) s = O(n) <------------------------------------>

function topKFrequentWithSorting(nums: number[], k: number): number[] {
    const map = new Map()
    const n = nums.length;

    for (let i = 0; i < n; ++i) {
        if (map.get(nums[i]) != undefined) {
            let count = map.get(nums[i]);
            map.set(nums[i], ++count);
        } else {
            map.set(nums[i], 1);
        }
    }

    const arrayWithCount: number[][] = [];
    for (let key of map.keys()) {
        arrayWithCount.push([key, map.get(key)]);
    }

    // sort the array based on values
    arrayWithCount.sort((a, b) => b[1] - a[1]);
    const output: number[] = [];
    console.log(arrayWithCount)
    // find top k element
    for (let i = 0; i < k; ++i) {
        output.push(arrayWithCount[i][0]);
    }
    return output;

};




// *<------------------------> Using "max-heap" t = O(nlog(n)) s = O(n) <------------------------------------>

function topKFrequentWithHeap(nums: number[], k: number): number[] {
    const map: Map<number, number> = new Map()
    const n = nums.length;

    for (let i = 0; i < n; ++i) {
        if (map.get(nums[i]) != undefined) {
            let count = map.get(nums[i]) ?? 1;
            map.set(nums[i], ++count);
        } else {
            map.set(nums[i], 1);
        }
    }

    // create a map heap
    const maxHeap: number[] = [...map.keys()];
    let end = maxHeap.length - 1;
    for (let i = Math.floor((maxHeap.length) / 2); i >= 0; --i) {
        heapify(maxHeap, i, end, map);
    }
    // getting top k element
    for (let i = 0; i < k; ++i) {
        // swap between first and last ele
        let temp = maxHeap[0];
        maxHeap[0] = maxHeap[end];
        maxHeap[end] = temp;
        end--;
        heapify(maxHeap, 0, end, map);
    }

    const output: number[] = [];
    if (maxHeap.length > 0) {
        while (k) {
            output.push(maxHeap.pop() ?? 0)
            k--;
        }
    }
    return output;
};

function heapify(arr: number[], start: number, end: number, map) {
    let largestIndex = start;
    let leftChild = 2 * start + 1;
    let rightChild = 2 * start + 2;

    if (leftChild <= end && map.get(arr[leftChild]) > map.get(arr[largestIndex])) largestIndex = leftChild;
    if (rightChild <= end && map.get(arr[rightChild]) > map.get(arr[largestIndex])) largestIndex = rightChild;

    if (largestIndex != start) {
        // swap
        let temp = arr[start];
        arr[start] = arr[largestIndex];
        arr[largestIndex] = temp;
        // recursion
        return heapify(arr, largestIndex, end, map);
    }

}

// *<-----------------------> Using "Modified Bucket-sort"  t = O(n) s = O(n)<------------------------------------>


function topKFrequentWithBucket(nums: number[], k: number): number[] {
    const n = nums.length;
    const output: number[] = [];

    // Create a Map to store element frequencies
    const frequencyMap: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < n; ++i) {
        if (frequencyMap.get(nums[i]) != undefined) {
            let count = frequencyMap.get(nums[i]) ?? 0;
            frequencyMap.set(nums[i], ++count);
        } else {
            frequencyMap.set(nums[i], 1);
        }
    }

    // Create a bucket array to group elements by frequency
    const bucket: number[][] = new Array(n + 1).fill(null).map(() => [])
    for (let key of frequencyMap.keys()) {
        bucket[frequencyMap.get(key) ?? 0].push(key);

    }
    // Extract the top k frequent elements
    for (let i = n; i >= 1; --i) {
        let bucketElements: number[] = bucket[i];
        if (bucketElements.length > 0) {
            for (let j = 0; j < bucketElements.length; ++j) {
                if (k == 0) break; // we found all top k elements 
                output.push(bucketElements[j]);
                k--;
            }
        }
    }
    return output;
};

