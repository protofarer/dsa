export default function naryTreePreorderTraversal(root: GraphNode | null): number[] {
  const path: number[] = [];
  walk(root, path);
  return path;
}

function walk(node: GraphNode | null, path: number[]) {
  if (node) {
    path.push(node.val)
    // node.children?.forEach(c => walk(c, path));
    for (let i = 0, n = node.children.length; i < n; ++i) {
      walk(node.children[i], path);
    }
  }
}