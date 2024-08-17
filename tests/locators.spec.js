// Locators -- used in every automated testing to find the location 
//or whether the element is present or not by giving the property. 
//The property may be css or xml. 
// something used to locate or goto the particular location in the web page. 
// in order to browsing a webside, click or type something znd press like user does, we use these locators.
// We need to apply our knowledge to automate any website.

// page.locator() -- must use while using x path or css locator

// Locators represent a way to find elements on the webpage at any moment.
// Examples of locators

// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


// import {test, expect} from '@playwright/test'
// test('title',async({page})=>{

//     await page.goto('https://www.youtube.com');
//     await expect(page).toHaveTitle('YouTube');
//     await expect(page).toHaveURL('https://www.youtube.com');
//     await page.close();
// });


// code by using all locators

import {test,expect} from"@playwright/test"
test('Youtube',async({page})=>{

    await page.goto("https://www.google.co.in/");
    await page.getByLabel('Search', { exact: true }).fill("youtube")
    await page.getByRole('button', { name: 'Google Search' }).click();
    await page.getByRole('link', { name: 'YouTube: Home YouTube https' }).click();
    await page.getByPlaceholder('Search').fill('Playwright Tutorials');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
})



































// import {test, expect} from '@playwright/test'
// test('filtering', async ({page}) => {
//     await page.goto("https://www.amazon.in/Bajaj-GX-Mixer-Grinder-Function/dp/B0BB3SDD7J/ref=lp_85164349031_1_2?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=9YKKKGXG12TGQDC8J43D&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1");
//     await page.getByRole("Add to Cart")
//       .filter({ hasText: 'Add to Cart' })
//       .getByRole('button', {name: "Add to Cart"})
//       .click()
//   });
   
