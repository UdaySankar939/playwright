// // checking multiple websites

// import{test,expect} from"@playwright/test"
// test('Checking website', async({page})=>{
//     await page.goto("https://www.watchmovierulz.vet/");
//     await page.waitForLoadState('networkidle');
//     await page.getByRole('link', { name: 'Telugu', exact: true }).click();
//     await page.getByRole('link', { name: 'Telugu Movies 2024' });
//     await page.getByRole('link', { name: 'Home', exact: true }).click();
    
// }, {
//     retries: {
//       maxAttempts: 3,
//       minTimeout: 1000,
//       maxTimeout: 30000,
//     },
//   });
  
// test('Visibility', async({page})=>{
//     await page.goto('https://www.watchmovierulz.ph/');
//     await page.waitForLoadState('networkidle');
//     await expect(page).toHaveTitle("Movierulz | Watch Bollywood and Hollywood Full Movies Online Free");
//     await expect(page.getByPlaceholder('Search...')).toBeVisible();
//     await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
// });

// test('checking different pages', async({page})=>{
//     await page.goto('https://www.watchmovierulz.ph/');
//     await page.waitForLoadState('networkidle');
//     await page.getByRole('link', { name: 'older ->' }).click();
//     await page.getByText('1', { exact: true }).click();
//     await page.getByText('2', { exact: true }).click();
//     await page.getByText('3', { exact: true }).click();
//     await page.getByRole('link', { name: 'Last »' }).click();
//     await page.getByText('189', { exact: true }).click();
// });

// test('Changing Quality', async({page})=>{
//     await page.goto('https://www.watchmovierulz.ph/');
//     await page.waitForLoadState('networkidle');
//     await expect(page.getByRole('link', { name: 'Quality' })).toBeVisible();
//     await page.getByRole('link', { name: 'Quality' }).click();
//     await page.getByRole('link', { name: 'HDRip Movies' }).click();
// });

// test('Checking Movie Pages', async({page})=>{
//     await page.goto('https://www.watchmovierulz.ph/');
//     await page.waitForLoadState('networkidle');
//     await page.getByRole('link', { name: 'Home', exact: true }).click();
//     await page.getByRole('link', { name: 'Mr. Bachchan' }).click();
//     await page.getByRole('link', { name: 'Home', exact: true }).click();
//     await page.getByTitle('Kalki 2898 AD (2024) HDRip Telugu Movie Watch Online Free MovieRulz').first().click();
//     await page.getByRole('link', { name: 'Home', exact: true }).click();
// },
//  {
//     retries: {
//       maxAttempts: 3,
//       minTimeout: 1000,
//       maxTimeout: 30000,
//     },
//   });

// test('Checking Movies by entering name', async({page})=>{
//     await page.goto('https://www.watchmovierulz.ph/');
//     await page.waitForLoadState('networkidle');
//     await page.getByRole('link', { name: 'Home', exact: true }).click();
//     await page.getByPlaceholder('Search...').fill('Guntur Kaaram');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.getByRole('link', { name: 'Home', exact: true }).click();
// });



