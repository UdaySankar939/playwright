
import{test,expect} from"@playwright/test"

test('Google', async({page})=>{
await page.goto("https://www.google.co.in/");
await page.waitForLoadState('networkidle');
await expect(page).toHaveTitle("Google");
await expect(page).toHaveURL("https://www.google.co.in/");
await page.waitForLoadState('networkidle');
});

test('Checking Visibilities', async({page})=>{
await page.goto("https://www.google.co.in/");
await page.waitForLoadState('networkidle');
await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
await expect(page.getByLabel('Gmail')).toBeVisible();
await expect(page.getByRole('button', { name: 'Google Search' })).toBeVisible();
});

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
});

test('Correct Website Name', async({page})=>{
await page.goto("https://www.google.co.in/");
await page.waitForLoadState('networkidle');
await page.getByLabel('Search', { exact: true }).fill('movierulz');
await expect(page.getByRole('button',{name:'Google Search'})).toBeVisible();
await page.goto('https://www.watchmovierulz.vet/');
});
