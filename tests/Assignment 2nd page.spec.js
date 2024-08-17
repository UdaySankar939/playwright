// checking multiple websites

import{test,expect} from"@playwright/test"
test('Checking website', async({page})=>{
    await page.goto("https://www.google.co.in/search?q=movierulz&sca_esv=14a4d01d4cad0855&hl=en&sxsrf=ADLYWILMUTeBb1np-xGQLTCm4rTybymC7A%3A1723789951143&source=hp&ei=f_K-Zr3wBbLl2roPtcOyqQI&iflsig=AL9hbdgAAAAAZr8Aj4_x4wig6nO-49Wj1kSeQkME_YTo&oq=movierulz&gs_lp=Egdnd3Mtd2l6Igltb3ZpZXJ1bHoqAggAMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCSIgLUABYAHABeACQAQCYAQCgAQCqAQC4AQHIAQCYAgGgAgeoAgqYAweSBwExoAcA&sclient=gws-wiz")
    await page.waitForLoadState('networkidle');
    await page.getByRole('link',{name:'Telugu Movies 2024 Movies'}).click();
    await page.getByRole('link', { name: 'Home', exact: true }).click();
});

test('Visibility', async({page})=>{
    await page.goto('https://www.watchmovierulz.ph/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle("Movierulz | Watch Bollywood and Hollywood Full Movies Online Free");
    await expect(page.getByPlaceholder('Search...')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
});

test('checking different pages', async({page})=>{
    await page.goto('https://www.watchmovierulz.ph/');
    await page.waitForLoadState('networkidle');
    await page.getByRole('link', { name: 'older ->' }).click();
    await page.getByText('1', { exact: true }).click();
    await page.getByText('2', { exact: true }).click();
    await page.getByText('3', { exact: true }).click();
    await page.getByRole('link', { name: 'Last »' }).click();
    await page.getByText('189', { exact: true }).click();
});

test('Changing Quality', async({page})=>{
    await page.goto('https://www.watchmovierulz.ph/');
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('link', { name: 'Quality' })).toBeVisible();
    await page.getByRole('link', { name: 'Quality' }).click();
    await page.getByRole('link', { name: 'HDRip Movies' }).click();
})

test('Checking Movie Pages', async({page})=>{
    await page.goto('https://www.watchmovierulz.ph/');
    await page.waitForLoadState('networkidle');
    await page.getByRole('link', { name: 'Home', exact: true }).click();
    await page.getByRole('link', { name: 'The Union' }).click();
    await page.getByRole('link', { name: 'Home', exact: true }).click();
    await page.getByRole('link', { name: "Mr. Bachchan" }).click();
    await page.getByRole('link', { name: 'Home', exact: true }).click();
})

test('Checking Movies by entering name', async({page})=>{
    await page.goto('https://www.watchmovierulz.ph/');
    await page.waitForLoadState('networkidle');
    await page.getByRole('link', { name: 'Home', exact: true }).click();
    await page.getByPlaceholder('Search...').fill('Guntur Kaaram');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('link', { name: 'Home', exact: true }).click();
})
