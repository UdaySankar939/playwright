// filtering locators   -- a) Filter by text
//                      -- b) Filter by not having text
//                      -- c) Filter by child/descendant
//                         d) Filter by not having child/descendant
  

// trying with sauce demo website -- filter having text

// import{test, except} from "@playwright/test"
// test('sauceDemo', async({ page }) => {
//     await page.goto('https://www.saucedemo.com/v1/');
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('secret_sauce');
//     await page.getByRole('button').click(); 
//     await page.locator("xpath=(//*[@class='inventory_item'])")
//     .filter({hasText :'Sauce Labs Bike Light'}).getByRole('button').click();

// })


// trying with amazon website later it is asking for captch so code did not run

// import{test, expect} from "@playwright/test"
// test("Amazon", async({page}) =>{
//     await page.goto("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3Dlogin%2Bamazon%2Baccount%26adgrpid%3D59671903835%26ext_vrnc%3Dhi%26hvadid%3D590652406969%26hvdev%3Dc%26hvlocphy%3D9197649%26hvnetw%3Dg%26hvqmt%3De%26hvrand%3D3488024621660549259%26hvtargid%3Dkwd-837441119212%26hydadcr%3D24542_2265395%26tag%3Dgooginhydr1-21%26ref%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
//     await page.getByLabel("Email or mobile phone number").fill('9398084451');
//     await page.getByRole('button',{name:"continue"}).click();
//     await page.getByLabel('Password').fill('Uday1211@');
//     await page.getByRole('button',{name:"Sign in"}).click();
//     await page.getByLabel('Enter the letters and numbers above').fill('2tsym6');
//     await page.getByPlaceholder("Search Amazon.in").fill("shirts for men");
//     await page.locator("xpath=(//input[@id='nav-search-submit-button'])");

// })



// movierulz

// import {test, expect} from"@playwright/test"
// test('movierulz', async({page})=>{
//    await page.goto("https://www.google.co.in/");
//    await page.locator("//textarea[@id='APjFqb']").fill('movierulz');
//    await page.getByRole("button",{name:'Google Search'}).click();
//    await page.getByRole('link', { name: 'Movierulz Today 5movierulz.' }).click();
//    await page.getByRole('link',{name:"HOME"}).click();
//    await page.getByRole('link', { name: 'Committee Kurrollu (2024)' }).first().click();
//    await page.getByRole('link',{name:"HOME"}).click();
//    await page.getByRole('link', { name: 'Bhavanam (2024) DVDScr Telugu' }).first().click();
//    await page.getByRole('link',{name:"HOME"}).click();
//    await page.getByRole('link', { name: 'Bharateeyudu 2 (2024) HDRip' }).click();
//    await page.close();
// })







// c) Filter by child/descendant

// trying with sauce demo website -- Filter by child/descendant

// import{test, except} from "@playwright/test"
// test('sauceDemo', async({ page }) => {
//     await page.goto('https://www.saucedemo.com/v1/');
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('secret_sauce');
//     await page.getByRole('button').click(); 
//     await page.locator("xpath=(//*[@class='inventory_item'])")
//     .filter({ has: page.getByRole('link', { name: 'Test.allTheThings() T-Shirt (Red)' }) })
//     .getByRole('button').click();

// })