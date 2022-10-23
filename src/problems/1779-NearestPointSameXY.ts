export default function nearestPointSameXY(x: number, y: number, points: number[][]): number {
  let minVal = Infinity;
  let idx = -1;
  for (let i = 0; i < points.length; ++i) {
    if (points[i][0] === x || points[i][1] === y) {
      const manVal = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
      if (manVal < minVal) {
        minVal = manVal;
        idx = i;
      };
    }
  }
  if (minVal === Infinity) return -1;

  return idx;
}
