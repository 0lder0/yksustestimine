import {a_loendaja} from "../f2";
test('a_loendaja', () => {
    expect(a_loendaja("a")).toBe(1);
    expect(a_loendaja("b")).toBe(0);
    expect(a_loendaja("A")).toBe(1);
    expect(a_loendaja("aa")).toBe(2);
    expect(a_loendaja("ba")).toBe(1);
    expect(a_loendaja("Aa")).toBe(2);
});