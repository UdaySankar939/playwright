// All test files extension should be .spec.js

// let{test,expect} = require('@playwright/test')

// require -- import function to import required module
// importing @playwright/test module to our practice file
// We need to select the required packages for testing and validation they are test and expect. 
// In curly braces we write the packages names. They may be let or var or const.

// test("homepage", async({page}) => {
// await page.goto("file:///C:/Users/HP/Downloads/JS/Practice/index.html")
// await expect(page).toHaveTitle("Document")
// await expect(page).toHaveURL("file:///C:/Users/HP/Downloads/JS/Practice/index.html")
// await page.close();
// }
// )


// test("Playwright",async({page}) => {
// await page.goto("https://playwright.dev/docs/writing-tests");
// await expect(page).toHaveTitle("Writing tests | Playwright");
// await expect(page).toHaveURL("https://playwright.dev/docs/writing-tests");
// await page.close();
// } )


// test("btnclick", async ({page}) => {
//   await page.goto("https://www.google.co.in/");
 
//   await expect(page.getByLabel("Search")).toBeTruthy()
// }) 


// test('get started link', async ({page}) => {
//     await page.goto("https://playwright.dev/");
   
//     await page.getByRole('link', {name: 'Get started'}).click()
   
//     await expect(page.getByRole('heading', {name: "Installation"})).toBeVisible();
//   })



// Playwright day 2


// const { test, expect } = require('@playwright/test');
 
// test("githubme", async ({page}) => {
//   await page.goto("https://github.com/aryan1403");
 
//   await expect(page).toHaveTitle(/aryan1403/)
// })
 
// test("btnclick", async ({page}) => {
//   await page.goto("https://www.google.co.in/");
 
//   await expect(page.getByLabel("Search")).toBeTruthy()
// })
 
// test('get started link', async ({page}) => {
//   await page.goto("https://playwright.dev/");
 
//   await page.getByRole('link', {name: 'Get started'}).click()
 
//   await expect(page.getByRole('heading', {name: "Installation"})).toBeVisible();
// })

// const { test, expect } = require('@playwright/test');
// test('my test', async ({page}) => {
//   await page.goto("https://playwright.dev/")
//   const h1 = await page.locator(".highlight_gXVj").first()
//   await expect(h1).toHaveText(/Playwright/)
// })

// const { test, expect } = require('@playwright/test');
// test('cloud that', async ({page}) => {
//   await page.goto("https://testprep.cloudthat.com/login/index.php");
//   await page.getByPlaceholder("Username or email").fill('xyz@gmail.com');
//   await page.getByPlaceholder("Password").fill("123");
//   await page.locator("#loginbtn").click()
 
  // T&C
  // checkbox
  // await page.getByLabel("I agree to the terms & conditions").check()
 
  // radio btn
  // await expect(page.getByLabel("I agree to the terms & conditions")).toBeChecked()
// });
 


//practicing facebook page
// const{test,expect}=  require('@playwright/test')
// test('facebook', async ({page}) => {
//   await page.goto("https://www.facebook.com/");
//   await page.getByPlaceholder("Email address or phone number").fill('9398084451');
//   await page.getByPlaceholder("Password").fill("123");
// })


// const { test, expect } = require('@playwright/test');
// test('cloud that', async ({page}) => {
//   await page.goto("https://testprep.cloudthat.com/login/index.php");
//   await page.getByPlaceholder("Username or email").fill('xyz@gmail.com');
//   await page.getByPlaceholder("Password").fill("123");
//   await page.locator("#loginbtn").click();
// })


// const { test, expect } = require('@playwright/test');
// test('get started link', async ({page}) => {
//   await page.goto("https://playwright.dev/");
 
//   await page.getByRole('link', {name: 'Get started'}).click()
 
//   await expect(page.getByRole('heading', {name: "Installation"})).toBeVisible();
// })


