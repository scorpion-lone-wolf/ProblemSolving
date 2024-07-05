function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const length = flowerbed.length;

    let i = 0;
    let count = 0;
    while (i < length) {
        let prev = (i - 1) >= 0 ? flowerbed[i - 1] : 0;
        let next = (i + 1) < length ? flowerbed[i + 1] : 0;

        if (flowerbed[i] == 0) {
            if (prev == 0 && next == 0) {
                count++;
                flowerbed[i] = 1;
            }
        }
        i++;
    }
    return count >= n ? true : false;
};