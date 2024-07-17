import { getIJ, getIndex } from './App';

describe('getIJ', () => {
  it('tests borders', () => {
    expect(getIJ(0, 38)).toStrictEqual({
      i: 0,
      j: 0,
    });
    expect(getIJ(15, 38)).toStrictEqual({
      i: 0,
      j: 15,
    });
    expect(getIJ(37, 38)).toStrictEqual({
      i: 0,
      j: 37,
    });
    expect(getIJ(38, 38)).toStrictEqual({
      i: 1,
      j: 0,
    });
    expect(getIJ(39, 38)).toStrictEqual({
      i: 1,
      j: 1,
    });
    expect(getIJ(40, 38)).toStrictEqual({
      i: 1,
      j: 2,
    });
    expect(getIJ(80, 38)).toStrictEqual({
      i: 2,
      j: 4,
    });
    expect(getIJ(1026, 38)).toStrictEqual({
      i: 27,
      j: 0,
    });
    expect(getIJ(1027, 38)).toStrictEqual({
      i: 27,
      j: 1,
    });
    expect(getIJ(1063, 38)).toStrictEqual({
      i: 27,
      j: 37,
    });
    expect(getIJ(1064, 38)).toStrictEqual({
      i: 28,
      j: 0,
    });
  });
});

describe('getIndex', () => {
  it('tests borders', () => {
    expect(getIndex(0, 0, 38)).toStrictEqual(0);
    expect(getIndex(0, 15, 38)).toStrictEqual(15);
    expect(getIndex(0, 37, 38)).toStrictEqual(37);
    expect(getIndex(1, 0, 38)).toStrictEqual(38);
    expect(getIndex(1, 1, 38)).toStrictEqual(39);
    expect(getIndex(1, 2, 38)).toStrictEqual(40);
    expect(getIndex(2, 4, 38)).toStrictEqual(80);
    expect(getIndex(27, 0, 38)).toStrictEqual(1026);
    expect(getIndex(27, 1, 38)).toStrictEqual(1027);
    expect(getIndex(27, 37, 38)).toStrictEqual(1063);
    expect(getIndex(28, 0, 38)).toStrictEqual(1064);
  });
});