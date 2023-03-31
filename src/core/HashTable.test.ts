import HashTable from "./HashTable";

describe("hash table", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("core", () => {
    let a = new HashTable();

    a.insert("slab", "val1");
    a.insert("slabs", "val2");

    // success: input keys hash to different table keys
    expect(a.search("slab")).toBe("val1");
    expect(a.search("slabs")).toBe("val2");
    expect(a.getTableIndexElement(81)?.next).toBe(undefined);

    a.insert("hooligans", "val3");
    a.insert("hooligamt", "val4");

    // success: accepts natural numbers
    a.insert(1, "val8");
    expect(a.search(1)).toBe("val8");

    // fail: natural numbers only
    expect(() => a.insert(-1, "val")).toThrow();

    // TODO
    // fail: objects are not valid keys
    // fail: arrays are not valid keys

    // success: return null if key not found
    expect(a.search("none")).toBe(null);

    // success: overwrite when input key already stored
    a.insert(1, "val999");
    expect(a.search(1)).toBe("val999");
  });

  it("manual resize", () => {
    let a = new HashTable();

    a.insert("slab", "val1");
    a.insert("slabs", "val2");
    a.insert("hooligans", "val3");
    a.insert("hooligamt", "val4");
    a.insert(1, "val8");

    // a.print();
    const spy = jest.spyOn(a, "insert");
    a.resizeToMinSlots(400);
    // a.print();

    // success: invokes insert method for each key/value pair aka ListNode
    expect(spy).toHaveBeenCalledTimes(5);

    // failure: cannot resize to smaller than current number of slots
    expect(() => a.resizeToMinSlots(100)).toThrow();
  });

  it("dynamic resize", () => {
    let a = new HashTable();

    // success: initializes to 2 slots
    expect(a.getSlots()).toBe(2);

    for (let i = 0; i < 5; ++i) {
      a.insert(`${i}inputKey`, `val${i}`);
    }

    a.insert("4inputKey", "valOVERWRITE");

    // success: overwrite of existing key doesnt trigger resize
    expect(a.getSlots()).toBe(2);

    // resizes before adding (n == m * 3)th element (max load factor = 3)
    // success: resizes to smallest prime larger than n, during insert for 6th element, eg when n >= max_load_factor * m_slots
    a.insert("5inputKey", "val5");
    expect(a.getSlots()).toBe(7);

    for (let i = 6; i < 21; ++i) {
      a.insert(`${i}inputKey`, `val${i}`);
    }

    // success: resize to m = 23 during insert for n == 21
    expect(a.getSlots()).toBe(23);
  });

  it("delete", () => {
    let a = new HashTable();

    a.insert("slab", "val1");
    a.insert("slabs", "val2");
    a.insert("hooligans", "val3");
    a.insert("hooligamt", "val4");
    a.insert("hooligalu", "val5");
    a.insert(1, "val8");

    // a.print();
    a.delete("hooligans");
    // a.print();
  });
});
