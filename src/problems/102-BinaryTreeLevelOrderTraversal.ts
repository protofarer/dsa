/** 
 * @desc binary tree, breadth first search
 * @desc BT, BFS
 */
export default function binaryTreeLevelOrderTraversal(root: TreeNode | null): ((number | null)[])[]{
  // use queue
  // dequeue from queue, then queue up its children
  // when done queueing up children (hit null or last valid op), repeat
  // end condition: queue empty
  const level: (TreeNode | null)[] = [];
  const q: (TreeNode | null)[] = [];
  const path: ((number | null)[])[] = [];

  if (root) {
    level.push(root);
  } else {
    return [];
  }

  while (level.some(x => x !== null)) {
    // console.log(`level`, level)
    
    const layerOfNodes = level.splice(0, level.length);
    // console.log(`layerOfNodesVals`, layerOfNodes.map(x => x?.val ?? null))

    path.push(layerOfNodes.map(x => x?.val ?? null).filter(x => x !== null));
    // console.log(`path`, path)

    q.push(...layerOfNodes)
    // console.log(`Q after push layerOfNodes`, q);
    
    while (q.length > 0) {
      const curr = q.shift() as TreeNode;
  
      if (curr) {
        if (curr.left) {
          level.push(curr.left);
        } else if (!curr.left) {
          level.push(null)
        }
    
        if (curr.right) {
          level.push(curr.right);
        } else if (!curr.right) {
          level.push(null)
        }
      }
    }
  }

  return path;
}
