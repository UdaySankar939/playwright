// test 3 pages in the application with all the functionalities test home page, files 5 test cases atleast.
// use assertions and fixtures --- expect,goto, then
// annotations
// test configuration
// reties also
// sharding -- 4 shards 
// time outs

// Google Page


import{test,expect} from"@playwright/test"

test('Google', async({page})=>{
await page.goto("https://www.google.co.in/");
await page.waitForLoadState('networkidle');
await expect(page).toHaveTitle("Google");
await expect(page).toHaveURL("https://www.google.co.in/");
});

test('Checking Visibilities', async({page})=>{
await page.goto("https://www.google.co.in/");
await page.waitForLoadState('networkidle');
await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
await expect(page.getByLabel('Gmail')).toBeVisible();
await expect(page.getByRole('button', { name: 'Google Search' })).toBeVisible();
}),{ timeout: 10000 }; 

test('Checking Google Apps', async({page})=>{
await page.goto("https://www.google.co.in/")
await page.waitForLoadState('networkidle');
await page.getByRole('button', { name: 'Google apps' }).click();
});

test('Error Website Name', async({page})=>{
await page.goto("https://www.google.co.in/")
await page.waitForLoadState('networkidle');
await page.getByTitle("Search").fill("moggduhv");
await page.getByLabel('Clear').click();
}), { retry: 2 };

test('Correct Website Name', async({page})=>{
await page.goto("https://www.google.co.in/");
await page.waitForLoadState('networkidle');
await page.getByLabel('Search', { exact: true }).fill('movierulz');
await expect(page.getByRole('button',{name:'Google Search'})).toBeVisible();
await page.goto('https://www.google.co.in/search?q=movierulz&sca_esv=53119dc2d4566d04&sca_upv=1&source=hp&ei=pZTAZueTBM3c2roP9fip2Qg&iflsig=AL9hbdgAAAAAZsCitamTcNxA9jMhSPcJOl44gVpL5obT&ved=0ahUKEwin-o7hgPyHAxVNrlYBHXV8KosQ4dUDCA8&uact=5&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEAmAIAoAIAmAMAkgcAoAcA&sclient=gws-wiz');
}) , { retry:2}

git push -u origin main
