export default function diameterBinaryTree(root: TreeNode | null): number {
  // for a given node, add the heights of each subtree to get the diameter@node
  // repeat via DFS
  if (!root) return 0

  let d = 0;
  return bigStep(root, d)
}

function bigStep(node: TreeNode | null, d: number): number {
  // DFS
  if (!node) return d
  const localD = diameterOf(node)
  return Math.max(
    bigStep(node?.left ?? null, localD > d ? localD : d),
    bigStep(node?.right ?? null, localD > d ? localD : d)
  )
}

function diameterOf(node: TreeNode | null): number {
  return heightOf(node?.left ?? null, 0) + heightOf(node?.right ?? null, 0)
}

function heightOf(node: TreeNode | null, h: number): number {
  if (!node) return h
  return Math.max(
    heightOf(node?.left ?? null, h + 1), 
    heightOf(node?.right ?? null, h + 1)
  )
}
