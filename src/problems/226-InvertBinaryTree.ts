export default function invertBinaryTree(
  root: TreeNode | null
): TreeNode | null {
  if(!root) {
    return null
  }

  step(root)

  return root
}

function step(node: TreeNode): void {
  const tmp = node.left
  node.left = node.right
  node.right = tmp
  if (node?.left) step(node.left)
  if (node?.right) step(node.right)
}
