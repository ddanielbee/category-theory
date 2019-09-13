export const memoize = (f: (...args: any[]) => any) => {
  const memo = {};
  return (...args: any[]) => {
    if (typeof memo[args.join(',')] === 'undefined') {
      memo[args.join(',')] = f(...args);
    }
    return memo[args.join(',')];
  };
};
