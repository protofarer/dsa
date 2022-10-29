const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

export default function spiralMatrix(matrix: number[][]): number[] {
  let xMin = -1;
  let xMax= matrix[0].length;
  let yMin = -1;
  let yMax = matrix.length;
  let di = 0;
  let curr: Point = { x: 0, y: 0 }
  let seen: number[] = [matrix[curr.y][curr.x]];

  while (xMin !== xMax && yMin !== yMax) {
    const tentative = step(dir[di], curr);
    if (isInBound(tentative, xMin, xMax, yMin, yMax)) {
      curr = tentative;
      seen.push(matrix[curr.y][curr.x]);
    } else {
      di = (di + 1) % 4;

      // on every turn, close in appropriate wall
      switch (di) {
        case 0:
          xMin++;
          break;
        case 1:
          yMin++;
          break;
        case 2:
          xMax--;
          break;
        case 3:
          yMax--;
          break;
        default:
          throw Error('di out of range');
      }
    }
  }
  console.log(`seen`, seen)
  
  return seen;
}

function step(dir: number[], curr: Point) {
  return { x: curr.x + dir[0], y: curr.y + dir[1] };
}

function turn(dirN: number): number[] {
  return dir[(dirN + 1) % 4];
}

function isInBound(
  loc: Point, xMin: number, xMax: number, yMin: number, yMax: number
): boolean {
  if (
    loc.x > xMin &&
    loc.x < xMax &&
    loc.y > yMin &&
    loc.y < yMax
  ) return true;
  return false;
}