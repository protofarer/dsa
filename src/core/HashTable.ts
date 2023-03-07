type Key = number | string;
type Value = number | string;
type Element = {
  key: Key;
  value: Value;
  next?: Element;
  prev?: Element;
};

interface IHashTable {
  getTableIndexElement(idx: number): Element | undefined;
  sizeOf(): number;
  insert(key: Key, value: Value): void;
  search(searchKey: Key): Value | null;
  set(key: Key, value: Value): void;
  get(key: Key): Value | null;
  delete(key: Key): void;
  getElementByKey(searchKey: Key): Element | null;
}

export default class HashTable implements IHashTable {
  private _slotCount = 337; // expect ~1000 values, accept chain lengths of 3
  private _table: (Element | undefined)[] = new Array(this._slotCount);
  private _size = 0; // number of elements stored

  constructor(init_slotCount?: number) {
    this.setSlots(init_slotCount || this._slotCount);
  }

  // for test
  public getTableIndexElement(idx: number): Element | undefined {
    return this._table[idx];
  }

  public sizeOf() {
    return this._size;
  }

  private setSlots(minSlotCount: number) {
    function isPrime(x: number) {
      if (x < 2) return false;
      for (let i = 2; i <= Math.sqrt(x); ++i) {
        if (x % i === 0) return false;
      }
      return true;
    }

    let n = minSlotCount;
    while (!isPrime(n)) {
      n++;
    }

    this._slotCount = n;
  }

  private hash(key: Key): number {
    if (typeof key === "string") {
      let charCodeSum = 0;
      key.split("").forEach((c: string) => (charCodeSum += c.charCodeAt(0)));
      return charCodeSum % this._slotCount;
    }
    return key % this._slotCount;
  }

  // TODO overwrite duplicate element key
  public insert(key: Key, value: Value): void {
    if (typeof key === "number") {
      if (key < 0 || !Number.isInteger(key))
        throw Error("numeric keys must be a natural number");
    }
    const idx = this.hash(key);
    let head = this._table[idx];
    this._size++;

    if (head) {
      let curr = head;
      while (curr?.next) {
        curr = curr?.next;
      }
      curr.next = { key, value, prev: curr };
    }

    this._table[idx] = { key, value };
  }

  public search(searchKey: Key): Value | null {
    const hashedKey = this.hash(searchKey);
    if (this._table[hashedKey]) {
      let curr = this._table[hashedKey];
      while (curr) {
        if (curr.key === searchKey) {
          return curr.value;
        }
        curr = curr.next;
      }
    }
    return null;
  }

  // alias for insert
  public set(key: Key, value: Value): void {
    return this.insert(key, value);
  }

  // alias for search
  public get(key: Key): Value | null {
    return this.search(key);
  }

  public delete(key: Key): void {
    const node = this.getElementByKey(key);
    if (!node) return;

    this._size--;

    if (node?.prev) {
      node.prev.next = node.next;
    }
    if (node?.next) {
      node.next.prev = node.prev;
    }

    const hashedKey = this.hash(key);
    if (this._table[hashedKey] === node && node.next) {
      this._table[hashedKey] = node.next;
    }
  }

  public getElementByKey(searchKey: Key): Element | null {
    const hashedKey = this.hash(searchKey);
    if (this._table[hashedKey]) {
      let curr = this._table[hashedKey];
      while (curr) {
        if (curr.key === searchKey) {
          return curr;
        }
        curr = curr.next;
      }
    }
    return null;
  }

  // for debug
  public print() {
    this._table.forEach((element: Element, idx) => {
      if (element) {
        let s = `${idx}: `;

        let curr: typeof element | undefined = element;
        while (curr) {
          s += `(${curr.value ?? ""}) => `;
          curr = curr.next;
          if (curr?.prev) {
            s += `<= `;
          }
        }
        console.log(s);
      }
    });
  }

  // TODO make dynamic
  resize(m: number) {
    if (m < this._slotCount)
      throw Error(`New size must be greater than current ${this._slotCount}`);

    this.setSlots(m);

    const prevTable: (Element | undefined)[] = new Array(...this._table);
    this._table = new Array(this._slotCount);

    prevTable.forEach((head: Element) => {
      if (head) {
        let curr: typeof head | undefined = head;
        while (curr) {
          this.insert(curr.key, curr.value);
          curr = curr.next;
        }
      }
    });
    prevTable.fill(undefined);
  }
}
