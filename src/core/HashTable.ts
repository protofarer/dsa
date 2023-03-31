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
  resizeToMinSlots(m: number): void;
  getSlots(): number;
}

export default class HashTable implements IHashTable {
  private _slotCount = 2;
  private _table: (Element | undefined)[] = new Array(this._slotCount);
  private _size = 0; // number of elements stored
  private _maxLoadFactor = 3;

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

  public getSlots(): number {
    return this._slotCount;
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
      let sum = 0;
      const alphabetSize = 94;
      const len = key.length;
      for (let i = 0; i < len; ++i) {
        sum += Math.pow(alphabetSize, len - (i + 1)) * key.charCodeAt(i);
      }
      const hashedString = sum % this._slotCount;
      // console.log(`str:`, key, "hashedTo:", hashedString);
      return hashedString;
    }
    return key % this._slotCount;
  }

  // TODO overwrite duplicate element key
  public insert(key: Key, value: Value): void {
    this.validateKey(key);

    const idx = this.hash(key);
    // console.log(`INSERT inKey:`, key, "hashKey:", idx, "val", value);

    let curr = this._table[idx];
    if (!curr) this._table[idx] = { key, value };
    else {
      let prev = curr;
      while (curr) {
        if (curr.key === key) {
          // console.log(`found dupe key, replacing value, k,v`, key, value);
          curr.value = value;
          return;
        }
        prev = curr;
        curr = curr?.next;
      }
      prev.next = { key, value, prev: curr };
    }

    this.increaseSize();
  }

  private increaseSize(): void {
    this._size++;
    if (this._size / this._slotCount >= this._maxLoadFactor) {
      this.resizeToMinSlots(this._size);
    }
  }

  public resizeToMinSlots(m: number): void {
    if (m < this._slotCount)
      throw Error(`New size must be greater than current ${this._slotCount}`);

    this.setSlots(m);

    const prevTable: (Element | undefined)[] = new Array(...this._table);
    this._table = new Array(this._slotCount);

    this._size = 0;
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

  public search(searchKey: Key): Value | null {
    this.validateKey(searchKey);

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
    this.validateKey(searchKey);

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

  public print() {
    console.log(this.toString());
  }

  public toString() {
    let stringVal = "";
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
        stringVal += s + "\n";
      }
    });
    return stringVal;
  }

  private validateKey(key: Key) {
    function isNaturalNumber(x: any): boolean {
      if (Number.isInteger(x) && x >= 0) return true;
      return false;
    }

    if (typeof key !== "string" && !isNaturalNumber(key)) {
      throw Error("numeric keys must be a natural number");
    }
  }
}
