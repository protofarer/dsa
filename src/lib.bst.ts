export function LLMaker(a: number[]): ListNode[] {
  const list: ListNode[] = [{ val: a[0], next: null }];
  for (let i = 1; i < a.length; ++i) {
    list.push({ val: a[i], next: null });
    list[i - 1].next = list[i];
  }
  return list;
}

export function LLLister(head: ListNode | null) {
  if (!head) {
    return null;
  }

  const list: number[] = [];
  let curr: ListNode | null = head;
  while (curr) {
    list.push(curr.val);
    curr = curr.next;
  }
  return list;
}

// TODO TreeMaker
// given: [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// nulls indicate the children follow for the parent node(s) previously specified
export function makeBinaryTreeFromList(
  list: (number | null)[]
): TreeNode | null {
  // turns a flat list like [3,9,20,null,null,15,7] into a binary tree:
  //       3
  //     /   \
  //    9     20
  //  /  \   /  \
  // n    n 15   7

  if (!list[0]) return null;

  const root = {
    val: list[0],
    left: null,
    right: null,
  };

  let q: (TreeNode | null)[] = [];
  let curr: TreeNode | null | undefined = root;
  q.push(curr);

  for (let i = 0; i < list.length; ++i) {
    curr = q.shift();
    // console.log(`list[${i}]=${list[i]}, curr.val=${curr?.val}`, )

    if (curr === undefined) continue;

    if (curr === null) {
      q.push(null);
      // TODO we have to push da nulls
      continue;
    }

    const leftVal = list[2 * i + 1];
    // console.log(`leftVal=${leftVal}`, `Li: ${(2*i)+1}` )
    if (leftVal !== undefined) {
      if (leftVal === null) {
        q.push(null);
      } else {
        curr.left = {
          val: leftVal,
          left: null,
          right: null,
        };
        q.push(curr.left);
      }
    }

    const rightVal = list[2 * i + 2];
    // console.log(`rightVal=${rightVal}`, `Ri: ${(2*i)+2}`)
    if (rightVal !== undefined) {
      if (rightVal === null) {
        q.push(null);
      } else {
        curr.right = {
          val: rightVal,
          left: null,
          right: null,
        };
        q.push(curr.right);
      }
    }

    // console.log(`==================`, )
  }

  return root;
}

export function printBFSPath(pathBFS: (number | null)[][]): string {
  // not for binary trees
  // inspect 102's output
  let s = "[";
  pathBFS.forEach((level) => {
    s += "[";

    level?.forEach((x) => {
      s += `${x},`;
    });

    s += "]";
  });
  s += "]";

  // console.log(s);

  return s;
}

export function listBinaryTreeBFS(root: TreeNode | null): (number | null)[][] {
  if (!root) return [];

  let levels: (TreeNode | null)[][] = [[root]];
  let h = 0;

  while (true) {
    let level: (TreeNode | null)[] = [];

    levels[h].forEach((n) => {
      level.push(n?.left ?? null);
      level.push(n?.right ?? null);
    });

    console.log(
      `level@${h}:`,
      level.map((n) => n?.val ?? "x")
    );

    if (level.every((x) => x === null)) break;

    levels[h + 1] = level;
    h++;
  }

  return levels.map((l) => l.map((n) => n?.val ?? null));
}
