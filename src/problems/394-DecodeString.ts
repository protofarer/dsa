// ! consider
// alternative to slice (mutate?)
// use string methods instead of loops
// TODO improve my scratch algo
// TODO understand and implement https://leetcode.com/problems/decode-string/discuss/87543/0ms-simple-C%2B%2B-solution

export default function decodeString(s: string): string {
  let stack: string[] = [];
  f(s, stack);
  return stack.join("");
}

function f(
  s: string, 
  stack: string[]
): void {
  // console.log(`s:${s}`, );
  // console.log(`stack:${stack}`, );
  if (!s) {
    return;
  }
  
  // Collect characters of k
  if (Number(s[0]) || s[0] === "[") {
    let acc = "";
    let idx = 0;
    for (let c of s) {    // ! better loop?, are string methods faster? eg s.substring(0, s.indexOf("["))?
      if (!isNaN(Number(c))) {
        acc += c;
      }
      if (c === "[") {
        break;
      }
      idx++;
    }

    if (acc) {
      stack.push(acc);
    }
    
    f(s.slice(idx + 1), stack);

  // Apply k to top of stack or merge contiguous string elements
  } else if (s[0] === "]") {
    // TODO join all elements between ] and next k
    let substrings: string[] = [];
    while (!Number(stack[stack.length - 1])) {
      substrings.unshift(stack.pop() as string);
    }
    const joined = substrings.join("");
    
    // apply k
    if (Number(stack[stack.length - 1])) {
      const k = Number(stack.pop());
      stack.push(joined.repeat(k))
      f(s.slice(1), stack);
    }

    // Collect characters in group
  } else if (s[0]) {
    let substring = "";
    let idx = 0;
    for (let c of s) {
      if (Number(c) || c === "]") break;
      substring += c;
      idx++;
    }
    stack.push(substring);
    f(s.slice(idx), stack);
  }

  return;
}