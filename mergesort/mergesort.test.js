import { test, expect, describe } from "@jest/globals";
import { mergeSort } from "./mergesort.js";

test("empty list", () => {
  expect(mergeSort([])).toStrictEqual([]);
});

test("List with one element", () => {
  expect(mergeSort([73])).toStrictEqual([73]);
});

test("List already sorted", () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("Sorted a medium list", () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([
    0, 1, 1, 2, 3, 5, 8, 13,
  ]);
});

test("Sorted a medium list part 2", () => {
  expect(mergeSort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
});

test("List with duplicates", () => {
  expect(mergeSort([105, 79, 100, 110, 105])).toStrictEqual([
    79, 100, 105, 105, 110,
  ]);
});
