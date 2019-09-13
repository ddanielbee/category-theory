import { identity } from './identity';

describe('identity', () => {
  it('should return the same thats passed to it', () => {
    const expected = 1;
    const actual = identity(1);
    expect(expected).toEqual(actual);
  });
});
