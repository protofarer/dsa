import { isExportDeclaration } from "typescript";
import f from "../problems/202-HappyNumber";

describe("main", () => {
  it("core", () => {
    expect(f(19)).toBe(true);
    expect(f(2)).toBe(false);
  });
});
