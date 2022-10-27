export default function backspaceStringCompare(s: string, t: string): boolean {
  return evalString(s) === evalString(t);
}

function evalString(s: string): string {
  let out: string = "";

  for (let i = 0; i < s.length; ++i) {
    out = s[i] === "#"
      ? out.slice(0, -1)
      : out += s[i];
  }

  return out;
}