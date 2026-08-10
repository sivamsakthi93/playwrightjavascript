import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed1', { tag: '@smoke' }, async ({ page }) => {
    console.log("Testcases1");
  });
  test('seed2', { tag: '@smoke' },async ({ page }) => {
    console.log("Testcases2");
  });
  test('seed3', { tag: '@smoke' },async ({ page }) => {
    console.log("Testcases3");
  });
});
