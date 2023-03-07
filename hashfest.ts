import HashTable from "src/core/HashTable";

let a = new HashTable();

a.insert("slab", "val1");
a.insert("slabs", "val2");
a.insert("hooligans", "val3");
a.insert("hooligamt", "val4");
a.insert(1, "val8");
a.print();
a.resize(400);
a.print();
