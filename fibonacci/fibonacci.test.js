import { test, expect, describe } from "@jest/globals";
import { fibs, fibsRec } from "./fibonacci.js";

describe("Test fibs", () => {
  test("1", () => {
    expect(fibs(1)).toStrictEqual([0]);
  });

  test("2", () => {
    expect(fibs(2)).toStrictEqual([0, 1]);
  });

  test("3", () => {
    expect(fibs(3)).toStrictEqual([0, 1, 1]);
  });
  test("8", () => {
    expect(fibs(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe("Test fibsRec", () => {
  test("1", () => {
    expect(fibsRec(1)).toStrictEqual([0]);
  });

  test("2", () => {
    expect(fibsRec(2)).toStrictEqual([0, 1]);
  });

  test("3", () => {
    expect(fibsRec(3)).toStrictEqual([0, 1, 1]);
  });
  test("8", () => {
    expect(fibsRec(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
