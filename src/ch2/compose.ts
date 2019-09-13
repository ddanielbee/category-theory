export const compose = <A, B, C>(f1: (a: A) => B, f2: (b: B) => C) => (x: A): C => f2(f1(x));
