import { DoublyLinkedList, TwoWayNode } from "./DoublyLinkedList";

describe("doubly linked list", () => {
  it("basic", () => {
    let a = new DoublyLinkedList();

    // success: initialization
    expect(a.head).toBe(null);
    expect(a.tail).toBe(null);
    expect(a.size()).toBe(0);
    expect(a.isEmpty()).toBe(true);
    expect(a.search(1)).toBe(null);

    const node = { key: 777 };
    a.insert(node);

    // success: insert an element
    expect(a.head?.key).toBe(777);
    expect(a.tail?.key).toBe(777);
    expect(a.size()).toBe(1);
    expect(a.isEmpty()).toBe(false);
    expect(a.search(777)?.key).toBe(777);

    a.delete(node);

    // success: delete an element, now empty
    expect(a.head).toBe(null);
    expect(a.tail).toBe(null);
    expect(a.size()).toBe(0);
    expect(a.isEmpty()).toBe(true);
    expect(a.search(777)).toBe(null);

    a.insertByKey(55);
    a.insertByKey(44);
    a.insertByKey(33);

    // success: insert by key, size > 1
    expect(a.head?.key).toBe(33);
    expect(a.tail?.key).toBe(55);
    expect(a.size()).toBe(3);
    expect(a.isEmpty()).toBe(false);
    expect(a.search(44)?.key).toBe(44);

    a.deleteByKey(44);

    // success: delete by key
    expect(a.search(44)).toBe(null);
    expect(a.size()).toBe(2);

    a.deleteByKey(33);

    // success: delete by key, shifts head and tail
    expect(a.head?.key).toBe(55);
    expect(a.tail?.key).toBe(55);

    let b = new DoublyLinkedList([3, 2, 1]);

    // success: initialize using array, insertByKey
    expect(b.head?.key).toBe(1);
    expect(b.head?.next?.key).toBe(2);
    expect(b.head?.next?.next?.key).toBe(3);
    expect(b.size()).toBe(3);
  });

  it("reverse", () => {
    let a = new DoublyLinkedList([5, 4, 3, 2, 1]);

    expect(a.head?.key).toBe(1);
    expect(a.tail?.key).toBe(5);

    a.reverse();

    expect(a.head?.key).toBe(5);
    expect(a.head?.prev).toBe(undefined);
    expect(a.head?.next?.key).toBe(4);
    expect(a.tail?.key).toBe(1);
    expect(a.tail?.next).toBe(undefined);
    expect(a.tail?.prev?.key).toBe(2);
  });

  it("split", () => {
    let a = new DoublyLinkedList([5, 4, 3, 2, 1]);
    let b = a.split(2);

    // success: list a is well-formed
    expect(a.size()).toBe(2);
    expect(a.head?.key).toBe(1);
    expect(a.head?.prev).toBe(undefined);
    expect(a.tail?.key).toBe(2);
    expect(a.tail?.next).toBe(undefined)

    // success: list b is well-formed
    expect(b?.size()).toBe(3)
    expect(b?.head?.key).toBe(3)
    expect(b?.head?.prev).toBe(undefined)
    expect(b?.tail?.key).toBe(5)
    expect(b?.tail?.next).toBe(undefined)


    let c = new DoublyLinkedList();

    // fail: cannot split empty list
    expect(c.split(0)).toBe(null)

    c.insert({ key: 1 })

    // fail: cannot split a single element list
    expect(c.split(0)).toBe(null)

    c.insert({ key: 2 });
    c.insert({ key: 3 })

    // fail: split index out of range
    expect(c.split(-1)).toBe(null)
    expect(c.split(2)).toBe(null)

    // fail: cannot split at head
    expect(c.split(0)).toBe(null)
  });
});
