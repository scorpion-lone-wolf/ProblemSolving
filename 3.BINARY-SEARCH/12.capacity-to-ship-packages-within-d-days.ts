// * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/
function shipWithinDays(weights: number[], days: number): number {
  const n = weights.length;

  let start = Math.max(...weights);
  let end = weights.reduce((acc, ele) => {
    return (acc += ele);
  }, 0);

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    const isPossible = canTransfer(weights, mid, days);
    console.log(start, mid, end, isPossible);
    if (isPossible) end = mid;
    else start = mid + 1;
  }
  return end;
}

function canTransfer(weights: number[], mid: number, days: number) {
  let daysTaken = 0;
  let sum = 0;
  for (let i = 0; i < weights.length; ++i) {
    sum += weights[i];
    if (sum >= mid) {
      if (sum == mid) {
        sum = 0;
      } else {
        sum = weights[i];
      }
      daysTaken++;
    }
  }
  if (sum > 0) daysTaken++;
  return daysTaken <= days ? true : false;
}
