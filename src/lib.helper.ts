export function LLMaker(a: number[]): ListNode[] {
    const list: ListNode[] = [{ val: a[0], next: null }];
    for (let i = 1; i < a.length; ++i) {
      list.push({ val: a[i], next: null });
      list[i-1].next = list[i]
    };
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

export function makeBinaryTreeFromList(list: (number | null)[]): TreeNode | null {
  // turns a flat list like [3,9,20,null,null,15,7] into a binary tree:
  //       3
  //     /   \
  //    9     20
  //  /  \   /  \
  // n    n 15   7

  let root: TreeNode | null;

  if (list[0]) { 
    root = {
      val: list[0],
      left: null,
      right: null
    };
  } else {
    // empty list
    return null;
  }

  let q: (TreeNode | null)[] = [];
  let curr: TreeNode | null = root;
  q.push(root);

  for (let i = 0; i < list.length; ++i) {
    curr = q.shift() ?? null;
    // console.log(`popped ${curr?.val} from q`, )
    
    if (curr === null) continue;

    const leftVal = list[(2 * i) + 1];
    // console.log(`leftVal=${leftVal}`, )
    if (leftVal) {
      curr.left = {
        val: leftVal,
        left: null,
        right: null
      }
      q.push(curr.left);
    }

    const rightVal = list[(2* i) + 2];
    // console.log(`rightVal=${rightVal}`, )
    if (rightVal) {
      curr.right = {
        val: rightVal,
        left: null,
        right: null
      }
      q.push(curr.right);
    }

    // console.log(`==================`, )
  }

  return root;
}

export function printBFSPath(pathBFS: ((number | null)[])[]): string {
  // inspect 102's output
  let s = "[";
  pathBFS.forEach(level => {
    s += "[";

    level?.forEach(x => {
      s += `${x},`;
    })

    s += "]";
  })
  s += "]";

  // console.log(s);
  
  return s;
}