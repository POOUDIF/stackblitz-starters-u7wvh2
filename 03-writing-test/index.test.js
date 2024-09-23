import { test, expect } from 'node:test';
import { sum } from './index.js';

test('sum adds two numbers correctly', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 1)).toBe(0);
  expect(sum(0, 0)).toBe(0);
  expect(sum(2.5, 1.5)).toBe(4);
});
