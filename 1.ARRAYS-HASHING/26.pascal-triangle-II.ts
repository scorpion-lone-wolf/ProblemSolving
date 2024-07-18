function getRow(n: number): number[] {

    if (n == 0) return [1]
    if (n == 1) return [1, 1]

    const array = [1]
    let prev = 1
    for (let i = 1; i <= n; ++i) {
        let value = prev * ((n - i) + 1) / i
        array.push(value)
        prev = value
    }
    return array
};