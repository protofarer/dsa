export function LLMaker(a: number[]): ListNode[] {
    const list: ListNode[] = [{ val: a[0], next: null }];
    for (let i = 1; i < a.length; ++i) {
      list.push({ val: a[i], next: null });
      list[i-1].next = list[i]
    };
    return list;
}