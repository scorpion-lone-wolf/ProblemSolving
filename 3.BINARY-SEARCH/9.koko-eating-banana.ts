// * https://leetcode.com/problems/koko-eating-bananas/description/
function minEatingSpeed(piles: number[], h: number): number {
  const n = piles.length;
  if (n == 1) return Math.ceil(piles[0] / h);
  let start = 1;
  let end = Math.max(...piles);

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const isTrue = ableToFinishAllPiles(piles, mid, h);
    if (!isTrue) start = mid + 1;
    else end = mid;
  }
  return start;
}

function ableToFinishAllPiles(piles: number[], speed: number, hours: number) {
  let timeTaken = 0;

  for (let i = 0; i < piles.length; ++i) {
    timeTaken += Math.ceil(piles[i] / speed);
  }
  return timeTaken <= hours ? true : false;
}
