import { test, expect } from '@playwright/test';

test('Verify DemoBlaze homepage opens', async ({ page }) => {

    await page.goto('/');

    await expect(page).toHaveTitle('STORE');

});