// TODO use a closure to save memory
// TODO rid booleans
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
];

export default function floodFill(
  image: number[][], 
  sr: number, 
  sc: number, 
  color: number
): number[][] {

  const oldColor = image[sr][sc];
  const drip = defineDrip(oldColor, color);
  drip(image, { x: sc, y: sr });
  return image;
}

function defineDrip(oldColor: number, newColor: number) {

  function drip(image: number[][], loc: Point) {
    // console.log(`checking: [${loc.x},${loc.y}]`, );
    
    if (loc.x < 0 || loc.x >= image[0].length ||
        loc.y < 0 || loc.y >= image.length) {
      return;
    }
  
    if (image[loc.y][loc.x] !== oldColor) {
      return;
    }
  
    if (image[loc.y][loc.x] === newColor) {
      return;
    }
  
    // console.log(`dripping [${loc.x},${loc.y}]`, );
    
    image[loc.y][loc.x] = newColor;
  
    for (let i = 0; i < dir.length; ++i) {
      const [x, y] = dir[i];
      drip(image, { x: loc.x + x, y: loc.y + y });
    }
    return;
  }

  return drip;
}