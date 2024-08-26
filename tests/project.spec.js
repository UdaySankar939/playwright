import {test,expect} from'@playwright/test'

test("visible", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
});

test("LOGIN", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole("button",{name:"LOGIN"}).click();
});

test("Selection Page", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/inventory.html");
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
    await expect(page).toHaveTitle("Swag Labs");
     },
      {
        retries: {
           maxAttempts: 3,
           minTimeout: 1000,
           maxTimeout: 30000,
       },
       });
    
        test("Product Sorting", async({page})=>{
        await page.goto("https://www.saucedemo.com/v1/inventory.html");
        await page.getByRole('combobox').click();
        await page.locator('div').filter({ hasText: /^ProductsName \(A to Z\)Name \(Z to A\)Price \(low to high\)Price \(high to low\)$/ }).first().click();

    });
   