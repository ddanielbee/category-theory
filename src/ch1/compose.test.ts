import { identity } from './identity';

const compose = <A, B, C>(f1: (a: A) => B, f2: (b: B) => C) => (x: A): C => f2(f1(x));

describe('compose', () => {
  const f1 = (x: number) => x + 1;
  const f2 = (x: number) => x + 3;

  it('should compose 2 functions correctly', () => {
    const expected = f2(f1(1));
    const actual = compose(
      f2,
      f1,
    )(1);
    expect(actual).toBe(expected);
  });

  it('should respect identity', () => {
    const expected = f2(1);
    const actualOne = compose(
      f2,
      identity,
    )(1);

    expect(actualOne).toBe(expected);

    const actualTwo = compose(
      identity,
      f2,
    )(1);
    expect(actualTwo).toBe(expected);
  });
});
