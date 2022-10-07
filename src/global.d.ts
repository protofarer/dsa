declare type ListNode = {
  val: number;
  next: ListNode | null;
};

declare type GraphNode = {
  val: number;
  children: GraphNode[];
};

declare type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};