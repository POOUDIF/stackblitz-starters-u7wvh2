import { test, expect } from 'node:test';
import sum from './index.js';

test('sum with two positive numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

test('sum with a negative number', () => {
  expect(sum(-1, 5)).toBe(0);
});

test('sum with two negative numbers', () => {
  expect(sum(-1, -1)).toBe(0);
});

test('sum with non-numeric types', () => {
  expect(sum('a', 3)).toBe(0);
  expect(sum(3, 'b')).toBe(0);
  expect(sum({}, [])).toBe(0);
});

test('sum with zero', () => {
  expect(sum(0, 0)).toBe(0);
  expect(sum(0, 5)).toBe(5);
  expect(sum(5, 0)).toBe(5);
});

test('sum with large numbers', () => {
  expect(sum(1000000, 2000000)).toBe(3000000);
});
