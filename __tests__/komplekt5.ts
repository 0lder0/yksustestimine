import {täishäälikud_sõnas} from "../f3";
test('täishäälikud_sõnas', () => {
    expect(täishäälikud_sõnas("kala")).toBe(2);
    expect(täishäälikud_sõnas("tere")).toBe(2);
    expect(täishäälikud_sõnas("kass")).toBe(1);
    expect(täishäälikud_sõnas("aeiouõäöü")).toBe(9);
    expect(täishäälikud_sõnas("AEIOUÕÄÖÜ")).toBe(9);
});