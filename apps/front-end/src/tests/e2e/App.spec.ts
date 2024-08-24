import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test('App page should display fetch and display response from api', async ({ page }) => {
  await page.goto('/');
  const dataFromApi = page.getByRole('heading', { name: 'Hello, World!!' });
  await expect(dataFromApi).toBeVisible();
});

test('Title should be set correctly', async ({ page }) => {
  await page.goto('/');
  const title = await page.title();
  expect(title).toBe('Vite + React + TS');
});