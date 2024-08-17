// //checkig google pages

// import {test, expect} from '@playwright/test'
// test('practice', async({page})=>{

//     await page.goto('https://www.google.co.in/');
//     await expect(page).toHaveTitle('Google');
//     await expect(page).toHaveURL('https://www.google.co.in/');
//     await page.close();
// });

// Saucedemo


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.google.com/search?q=saucedemo&oq=saucedemo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDUxMjJqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
//   await page.getByRole('link', { name: 'Swag Labs Swag Labs https://' }).click();
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.getByRole('button', { name: 'LOGIN' }).click();
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.getByRole('link', { name: 'Logout' }).click();
// });

