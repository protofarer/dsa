const dir = [
  [0,1],
  [1,0],
  [0,-1],
  [-1,0]
];

export default function numberOfIslands(grid: string[][]): number | null {
  const H = grid.length;    // height
  const W = H && grid[0].length;    // width

  if (!W) return null;

  let nIslands = 0;
  const explore = defineExplore(grid, H, W);

  for (let row = 0; row < H; ++row) {
    for (let col = 0; col < W; ++col) {
      if (grid[row][col] === "1") {
        nIslands++;
        explore(row, col);
      }
    }
  }
  return nIslands;
}


function defineExplore(grid: string[][], H: number, W: number) {
  
  function explore(row: number, col: number): void {
    if (
      row < 0 || row >= H || 
      col < 0 || col >= W ||
      grid[row][col] === "0"
    ) {
      return;
    }
  
    grid[row][col] = "0";
  
    for (let i = 0; i < 4; ++i) {
      const [x, y] = dir[i];
      explore(row + y, col + x);
    }

    return;
  }

  return explore;
}