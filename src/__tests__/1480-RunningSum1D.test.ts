import runningSum from '../problems/1480-RunningSum1D';

describe('main', () => {
  it('core', () => {
    const a1 = [1,2,3,4];
    expect(runningSum(a1)).toStrictEqual([1,3,6,10]);
  })
})