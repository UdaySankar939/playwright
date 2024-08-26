// import{test,expect} from"@playwright/test"
// test('Google', async({page})=>{
// await page.goto("https://www.google.co.in/");
// await page.waitForLoadState('networkidle');
// await expect(page).toHaveTitle("Google");
// });


// import{test,expect} from"@playwright/test"
// test('Checking Visibilities', async({page})=>{
// await page.goto("https://www.google.co.in/");
// await page.waitForLoadState('networkidle');
// await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
// await expect(page.getByRole('button', { name: 'Google Search' })).toBeVisible();
// });
// test('Checking Google Apps', async({page})=>{
// await page.goto("https://www.google.co.in/")
// await page.waitForLoadState('networkidle');
// await page.getByRole('button', { name: 'Google apps' }).click();
// });
// test('Error Website Name', async({page})=>{
// await page.goto("https://www.google.co.in/")
// await page.waitForLoadState('networkidle');
// await page.getByTitle("Search").fill("moggduhv");
// await page.getByLabel('Clear').click();
// });


// import {test,expect} from'@playwright/test' test("checking", async({page})=>{
//     await page.goto("https://www.saucedemo.com/v1/");
//     await expect(page.getByPlaceholder("Username")).toBeVisible();
//     await expect(page.getByPlaceholder("Password")).toBeVisible();
//     });
//     test("LOGIN", async({page})=>{
//     await page.goto("https://www.saucedemo.com/v1/");
//     await page.getByPlaceholder("Username").fill('standard_user');
//     await page.getByPlaceholder("Password").fill('secret_sauce');
//     await page.getByRole("button",{name:"LOGIN"}).click();
//     });
//     test("Selection Page", async({page})=>{
//     await page.goto("https://www.saucedemo.com/v1/inventory.html");
//     await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
//     await expect(page).toHaveTitle("Swag Labs");
//     },{
//     retries: {
//     maxAttempts: 3, minTimeout: 1000, maxTimeout: 30000, }, });
//     test("Filter", async({page})=>{
//     await page.goto("https://www.saucedemo.com/v1/inventory.html");
//     await page.getByRole('combobox').click();
//     await page.locator('div').filter({ hasText: /^ProductsName \(A to Z\)Name \(Z toA\)Price \(low to high\)Price \(high to low\)$/ }).first().click();
//     });


// import{test,expect} from"@playwright/test"
// test('Assertions', async({page})=>{
// await page.goto('https://demo.nopcommerce.com/register');
// await page.waitForLoadState('networkidle');
// await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
// await expect(page).toHaveTitle("nopCommerce demo store. Register");
// });
// test('Assertions01', async({page})=>{
// await page.goto('https://demo.nopcommerce.com/register');
// await page.waitForLoadState('networkidle');
// const logoElement =await page.locator(".header-logo");
// await expect(logoElement).toBeVisible();
// });
// test('Assertions02', async({page})=>{
// await page.goto('https://demo.nopcommerce.com/register');
// await page.waitForLoadState('networkidle');
// const maleRadioButton= await page.locator("#gender-male")
// await maleRadioButton.click();
// await expect(maleRadioButton).toBeChecked();
// });
// test('Assertions03', async({page})=>{
// await page.goto('https://demo.nopcommerce.com/register');
// await page.waitForLoadState('networkidle');
// const newsLetterCheckbox = await page.locator('#Newsletter');
// await expect (newsLetterCheckbox).toBeChecked();
// });