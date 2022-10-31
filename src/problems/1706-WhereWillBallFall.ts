// https://leetcode.com/problems/where-will-the-ball-fall

export default function whereWillBallFall(grid: number[][]): number[] {
  let answer: number[] = [];

  for (let i = 0; i < grid[0].length; ++i) {
    let x = i;
    let y = 0;

    while (y < grid.length) {
      if (grid[y][x] === 1) {
        if (
          grid[y][x + 1] === -1 ||
          x + 1 >= grid[0].length
        ) {
          [x, y] = [-1, Infinity];
          break;
        } else {
          x++;
          y++;
        }
      } else {
        if (
          grid[y][x - 1] === 1 ||
          x - 1 < 0
        ) {
          [x, y]= [-1, Infinity];
          break;
        } else {
          x--;
          y++;
        }
      }
    }
    answer.push(x);
  }

  return answer;
}
