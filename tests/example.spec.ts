import { test, expect } from '@playwright/test';

test('Inicio de Sesión Redmine', async ({ page }) => {
  await page.goto('https://redmine.sqasa.co/');

});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
