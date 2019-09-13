import { same, opposite, always, never } from './bools';

describe('all possible boolean functions', () => {
  it('true -> true && false -> false', () => {
    expect(same(true)).toBe(true);
    expect(same(false)).toBe(false);
  });

  it('true -> false && false -> true', () => {
    expect(opposite(true)).toBe(false);
    expect(opposite(false)).toBe(true);
  });

  it('true -> true && false -> true', () => {
    expect(always(true)).toBe(true);
    expect(always(false)).toBe(true);
  });

  it('true -> false && false -> false', () => {
    expect(never(true)).toBe(false);
    expect(never(false)).toBe(false);
  });
});
