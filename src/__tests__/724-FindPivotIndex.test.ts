import f from '../problems/724-FindPivotIndex';

describe('main', () => {
  it('core', () => {
    const a = [1,7,3,6,5,6];
    expect(f(a)).toStrictEqual(3);
  });

  it('array of 1 element', () => {
    const a = [0];
    expect(f(a)).toStrictEqual(0);
  });
})