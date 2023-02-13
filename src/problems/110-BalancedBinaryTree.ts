export default function balancedBinaryTree(root: TreeNode | null): boolean {
  // Traverse the tree
  // Calculate the height balance at every node, aka height delta of every node's subtrees
  // if all nodes have height deltas no larger than 1, the tree itself is height-balanced
  //
  // In other words: The absolute difference between heights of left and right
  // subtrees at any node should be less than 1.
  if (!root) return true

  return step(root)
}

function step(node: TreeNode | null): boolean {
  if (!node) return true
  if (Math.abs(heightStep(node.right, 0) - heightStep(node.left, 0)) > 1) {
    return false
  }
  return step(node?.left ?? null) && step(node?.right ?? null)
}

function heightStep(node: TreeNode | null, maxH: number): number {
  if (!node) return maxH
  return Math.max(
    heightStep(node?.left ?? null, maxH + 1), 
    heightStep(node?.right ?? null, maxH + 1)
  )
}