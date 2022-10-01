class HashMap<T> {
  list: Array<T | undefined>;

  constructor() {
    this.list = new Array<T | undefined>();
  }

  put(key: number, value: T | undefined): void {
    this.list[key] = value;
  }

  get(key: number): T | undefined{
    if (this.list[key] != undefined) {
      return this.list[key] as T;
    }
    return;
  }

  remove(key: number): void {
    if (this.list[key] != undefined) {
      this.list[key] = undefined;
    }
  }
}

// from LastAlg

type Nodule<T> = {
    value: T,
    next?: Nodule<T>,
    prev?: Nodule<T>
};

// from LastAlg
class DoublyLinkedList<T> {
    public length: number;
    head?: Nodule<T>;
    tail?: Nodule<T>;
    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): Nodule<T> {
      const node = { value: item } as Nodule<T>;

      if (!this.head) {
          // Assume equivalent to length === 0
          this.head = this.tail = node;
      } else {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
      }
      this.length++;
      return node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw Error('Insertion index out of bounds');
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;

        const curr = this.getAt(idx);
        
        if (curr) {
            const node = { value: item } as Nodule<T>;
            node.next = curr;
            node.prev = curr.prev;
            curr.prev = node;
            if (node.prev) {
                node.prev.next = node;
            }
        }
    }

    append(item: T): void {
        const node = { value: item } as Nodule<T>;
        if (!this.tail) {
            // Assume equiv to length === 0
            this.tail = this.head = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        if (this.length == 0) throw Error('LinkedList is empty, nothing to remove');

        let curr = this.head;
        while (curr && curr.value !== item) {
            curr = curr.next;
        }

        if (!curr) return;

        const value = this.removeNodule(curr);

        return value;
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    getAt(idx: number): Nodule<T> | undefined {
        let curr = this.head as Nodule<T>;
        for(let i = 0; i < idx; ++i) {
            if (curr.next)
                curr = curr.next;
            else
                throw Error('List is discontinuous, missing curr.next, cannot reached insertion index')
        }
        return curr;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node) return;

        const value = this.removeNodule(node);
        return value;
    }

    removeNodule(node: Nodule<T>): T {
        // called only when a node is found
        this.length--;

        // if (this.length === 0) {
        //     this.tail = this.head = undefined;
        // }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.next = undefined;
        node.prev = undefined;
        const val = node.value;
        return val;
    }
}

export default class LRUCache {
  hmap = new HashMap<Nodule<number | undefined>>();
  inverseHmap = new Map<Nodule<number | undefined>, number>();  // for key lookups
  links = new DoublyLinkedList<number>();
  capacity: number;
  #size: number = 0;

  constructor(capacity: number) {
    if (capacity < 1) throw Error('capacity must be >= 1');
    this.capacity = capacity;
  }

  get(key: number): number {
    const node = this.hmap.get(key);

    if (node == undefined) {
      return -1;
    }

    const val = this.links.removeNodule(node as Nodule<number>);
    this.links.prepend(val);
    return val;
  }

  put(key: number, value: number): void {
    // if key exists, replace and unshift by relinknig to head
    let existingNode = this.hmap.get(key);
    const newNode = this.links.prepend(value);

    // if key new, unshift by relink to head
    if (existingNode == undefined) {
      this.hmap.put(key, newNode);
      this.inverseHmap.set(newNode, key);
      this.#size++;

      // if over capacity
      //  remove LRU node from list
      //  remove LRU key from hmap
      if (this.#size > this.capacity) {
        const removalKey = this.inverseHmap.get(this.links.tail as Nodule<number>);
        this.hmap.put(removalKey as number, undefined);
        this.inverseHmap.delete(this.links.tail as Nodule<number>);
        this.links.removeNodule(this.links.tail as Nodule<number>);
        this.#size--;
      }        
    } else {
      this.links.removeNodule(existingNode as Nodule<number>);
    }
  }
}