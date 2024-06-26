// * https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/
function minDays(bloomDay: number[], m: number, k: number): number {
  const n = bloomDay.length;
  if (m * k > n) return -1;
  let start = Math.min(...bloomDay);
  let end = Math.max(...bloomDay);

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    const isPossible = canMakeBouquet(bloomDay, mid, m, k);

    if (isPossible) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function canMakeBouquet(
  bloomDay: number[],
  day: number,
  m: number,
  k: number
): boolean {
  let count = 0;
  for (let i = 0; i < bloomDay.length; ++i) {
    if (bloomDay[i] <= day) {
      count++;
      if (count == k) {
        m--;
        count = 0;
      }
    } else {
      count = 0;
    }
  }
  return m <= 0 ? true : false;
}
