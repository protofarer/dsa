import f from "../problems/412-FizzBuzz";

describe("main", () => {
  it("core", () => {
    expect(f(3)).toStrictEqual(["1","2","Fizz"]);
    expect(f(5)).toStrictEqual(["1","2","Fizz","4","Buzz"]);
    expect(f(15)).toStrictEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
  });
});
