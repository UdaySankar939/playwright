// // downolad page

// import{test,expect} from"@playwright/test"
// test('Download Page after searching', async({page})=>{
//     await page.goto("https://www.watchmovierulz.ph/search_movies?s=guntur+kaaram");
//     await page.waitForLoadState('networkidle');
//     await page.getByRole('link', { name: 'Guntur Kaaram' }).first().click();
//     await page.getByRole('link', { name: 'GET THIS TORRENT     6.2 gb 1080p' }).click();
//     });
    
//     test('download link using filtering', async({page})=>{
//         await page.goto('https://www.watchmovierulz.ph/guntur-kaaram-2024-telugu/movie-watch-online-free-1755.html');
//         await page.waitForLoadState('networkidle');
//         await page.locator('p').filter({ hasText: 'Guntur Kaaram Watch Online – DownloadGuntur Kaaram (2024) Telugu Full Movie' }).getByRole('link').click();
//     });
    
//     test('online stream link using filtering', async({page})=>{
//         await page.goto('https://www.watchmovierulz.ph/guntur-kaaram-2024-telugu/movie-watch-online-free-1755.html');
//         await page.waitForLoadState('networkidle');
//         await page.locator('p').filter({ hasText: 'Guntur Kaaram Watch Online – StreamwishGuntur Kaaram (2024) Telugu Full Movie' }).getByRole('link').click();
//     });
   
//     test('Checking page headings', async({page})=>{
//         await page.goto('https://www.watchmovierulz.ph/guntur-kaaram-2024-telugu/movie-watch-online-free-1755.html');
//         await page.waitForLoadState('networkidle');
//         await expect(page.getByRole('heading', { name: 'Guntur Kaaram (2024) HDRip' })).toBeVisible();
//         await page.getByRole('heading',{name:'MovieRulz'}).click();
//     });
    
    