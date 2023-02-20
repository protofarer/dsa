import { BinarySearchTree, BSTNode } from "./BST";
import { inOrder } from "./BSTTraversals";
import { printInOrder } from "./BSTHelpers";

describe("Binary Search Tree", () => {
  it("dfs", () => {
    const a = new BinarySearchTree([5, 3, 4, 2, 6, 7]);

    const foo = <T>(node: BSTNode<T>) => {
      console.log(node.key);
    };
    // inOrder(a.root, foo);

    // closure for printing dfs traversal path
    // const path: number[] = [];
    // const makePath = <T>(arr: T[]) => {
    //   return (node: BSTNode<T>) => {
    //     arr.push(node?.key);
    //   };
    // };

    // const pathy = makePath(path);
    // inOrder(a.root, pathy);
  });
});
