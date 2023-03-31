function Foo(a) {
  this.a = a;
  this.b = a ** 2;
}

let a = new Foo(4);
console.log(a.b);

Foo.prototype.cube = function () {
  return this.a ** 3;
};

console.log(``, a.cube());

Foo.prototype.printProps = function () {
  console.log(`Printing own properties`);

  Object.getOwnPropertyNames(this).forEach((prop) => {
    console.log(`${prop}: ${this[prop]}`);
  });
};

a.printProps();

a.c = -1;

a.printProps();
