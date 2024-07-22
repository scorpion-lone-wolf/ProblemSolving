function pushDominoes(str: string): string {

    const n = str.length

    let right = 0, left = 0
    let arr: string[] = []
    let output = ""
    arr.push('L')
    for (let i = 0; i < n; ++i) {
        arr.push(str[i])
    }
    arr.push('R')


    let i = 0, j = 1
    while (j < arr.length) {

        if (arr[j] != '.') {
            solveInBetween(arr, i, j)
            i = j
        }
        j++

    }
    for (let i = 1; i < arr.length - 1; ++i)output += arr[i]

    return output

};

function solveInBetween(arr: string[], i: number, j: number) {

    if (arr[i] == 'L' && arr[j] == 'L') {
        while (i < j) arr[i++] = 'L'
    } else if (arr[i] == 'R' && arr[j] == 'R') {
        while (i < j) arr[i++] = 'R'
    } else if (arr[i] == 'R' && arr[j] == 'L') {
        while (i < j) {
            arr[i++] = 'R'
            arr[j--] = 'L'
        }
    }
    return
}