import { createPangram } from "../solutions/panagram";

describe("Pangram()", () => {
  test("empty sentence", () => {
    const pangram = createPangram("");
    expect(pangram.isPangram()).toBe(false);
  });

  test("pangram with only lower case", () => {
    const pangram = createPangram(
      "the quick brown fox jumps over the lazy dog"
    );
    expect(pangram.isPangram()).toBe(true);
  });

  test("missing character 'x'", () => {
    const pangram = createPangram(
      "a quick movement of the enemy will jeopardize five gunboats"
    );
    expect(pangram.isPangram()).toBe(false);
  });

  test("another missing character 'x'", () => {
    const pangram = createPangram(
      "the quick brown fish jumps over the lazy dog"
    );
    expect(pangram.isPangram()).toBe(false);
  });

  test("pangram with underscores", () => {
    const pangram = createPangram(
      "the_quick_brown_fox_jumps_over_the_lazy_dog"
    );
    expect(pangram.isPangram()).toBe(true);
  });

  test("pangram with numbers", () => {
    const pangram = createPangram(
      "the 1 quick brown fox jumps over the 2 lazy dogs"
    );
    expect(pangram.isPangram()).toBe(true);
  });

  test("missing letters replaced by numbers", () => {
    const pangram = createPangram(
      "7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog"
    );
    expect(pangram.isPangram()).toBe(false);
  });

  test("pangram with mixed case and punctuation", () => {
    const pangram = createPangram('"Five quacking Zephyrs jolt my wax bed."');
    expect(pangram.isPangram()).toBe(true);
  });

  test("pangram with non-ascii characters", () => {
    const pangram = createPangram(
      "Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich."
    );
    expect(pangram.isPangram()).toBe(true);
  });
});
