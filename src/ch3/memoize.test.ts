import { memoize } from './memoize';

describe('memoize', () => {
  const testF = (x: number) => x * x;
  it('should return the same result as the function passed to it when called', () => {
    const expected = testF(2);
    const actual = memoize(testF);
    expect(actual(2)).toEqual(expected);
  });

  it('should only call the function passed once when called twice with the same argument', () => {
    const mockFn = jest.fn((x: any) => x);
    const memoized = memoize(mockFn);
    memoized(2);
    memoized(2);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
