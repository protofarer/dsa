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

    // success: input keys hash to same table keys, chain
    expect(a.search("hooligans")).toBe("val3");
    expect(a.search("hooligamt")).toBe("val4");
    expect(a.getTableIndexElement(290)?.key).toBe("hooligans");
    expect(a.getTableIndexElement(290)?.next?.key).toBe("hooligamt");

    // success: accepts natural numbers
    a.insert(1, "val8");
    expect(a.search(1)).toBe("val8");

    // fail: natural numbers only
    expect(() => a.insert(-1, "val")).toThrow();

    // success: return null if key not found
    expect(a.search("none")).toBe(null);
  });

  // TODO make dynamic
  it("resize", () => {
    let a = new HashTable();

    a.insert("slab", "val1");
    a.insert("slabs", "val2");
    a.insert("hooligans", "val3");
    a.insert("hooligamt", "val4");
    a.insert(1, "val8");

    // a.print();
    const spy = jest.spyOn(a, "insert");
    a.resize(400);
    // a.print();

    // success: invokes insert method for each key/value pair aka ListNode
    expect(spy).toHaveBeenCalledTimes(5);

    // failure: cannot resize to smaller than current number of slots
    expect(() => a.resize(100)).toThrow();
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

    expect(a.getElementByKey("hooligamt")?.next?.key).toBe("hooligalu");
    expect(a.getElementByKey("hooligamt")?.prev).toBe(undefined);
  });
});
