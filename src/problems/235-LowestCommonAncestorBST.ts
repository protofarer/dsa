/** 
 * @desc binary tree, binary search tree, depth first search
 * @desc BT, BST, DFS
 */
export default function lowestCommonAncestorBST(
  root: TreeNode | null, 
  p: TreeNode | null, 
  q: TreeNode | null
): TreeNode | null {

  if (!p || !q) {
    return null;
  }

  const pathP = pathfind(root, p.val);
  if (!pathP?.map(x => x.val).includes(p.val)) {
    return null;
  }

  const pathQ = pathfind(root, q.val);
  if (!pathQ?.map(x => x.val).includes(q.val)) {
    return null;
  }

  const [shorterPath, longerPath] = pathP.length < pathQ.length 
    ? [pathP, pathQ]
    : [pathQ, pathP];
  
  let LCA: TreeNode | null = null;
  for (let i = 0; i < shorterPath.length; ++i) {
    if (shorterPath[i].val === longerPath[i].val) {
      LCA = shorterPath[i];
    }
  }

  return LCA;
}

function pathfind(root: TreeNode | null, val: number): TreeNode[] | null {
  let path: TreeNode[] = [];
  walk(root, val, path)
  return path;
}

function walk(node: TreeNode | null, val: number, path: TreeNode[]): void {
  if (node) {
    path.push(node);

    if (val < node.val) {
      walk(node.left, val, path);
    } else if (val > node.val) {
      walk(node.right, val, path);
    }
  }
  // if (!path.includes(val)) {
  //   console.log(`search val doesn't exist in tree`, )
  // }
}