/** 
 * @desc binary tree, binary search tree, depth first search
 * @desc BT, BST, DFS
 */  
export default function validateBinarySearchTree(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }
  return inspect(root, -Infinity, Infinity);
}

function inspect(node: TreeNode | null, min: number, max: number): boolean {
  if (node) {
    if (node.val <= min || node.val >= max) {
      return false
    }
    return (
      inspect(node.left, min, node.val) && 
      inspect(node.right, node.val, max)
    );
  }
  return true
}