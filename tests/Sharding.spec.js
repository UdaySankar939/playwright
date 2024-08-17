// each shard generate seperate test report  -- we can merge it using it playwright config method and we can run where we want.

// CI -  Continuous Integration
//  npx playwright merge-reports  
 // npx playwright merge-reports --reporter html ./all-blob-reports


 // Sharding --  Sharding in Playwright means splitting your tests into smaller 
 // parts called "shards". Each shard is like a separate job that can run independently.
 // The whole purpose is to divide your tests to speed up test runtime.

//When you shard your tests, each shard can run on its own, utilizing the available CPU cores.
// This helps speed up the testing process by doing tasks simultaneously.
// playwright runs code in parallel and sequential mode also.

// npx playwright test tests/parallel/  --> to test in parrlel
// npx playwright test tests/sequence/ --workers=1   ---> to test cases in sequence by 1


// Here are some examples of sharding in Playwright, using web pages:

// Example 1: Sharding across multiple web pages

// - Test suite: example.spec.js
// - Web pages: page1.html, page2.html, page3.html

// Configuration:

// module.exports = {
//   test.config.shard.enabled = true,
//   test.config.shard.total = 3,
//   test.config.maxWorkers = 3,
// };

// Test code:

// test('Page 1', async ({ page }) => {
//   await page.goto('page1.html');
//   // Test code for page 1
// });

// test('Page 2', async ({ page }) => {
//   await page.goto('page2.html');
//   // Test code for page 2
// });

// test('Page 3', async ({ page }) => {
//   await page.goto('page3.html');
//   // Test code for page 3
// });

// Example 2: Sharding within a single web page

// - Test suite: example.spec.js
// - Web page: example.html

// Configuration:

// module.exports = {
//   test.config.shard.enabled = true,
//   test.config.shard.total = 2,
//   test.config.maxWorkers = 2,
// };

// Test code:

// test('Test 1', async ({ page }) => {
//   await page.goto('example.html');
//   // Test code for test 1
// });

// test('Test 2', async ({ page }) => {
//   await page.goto('example.html');
//   // Test code for test 2
// });

// In this example, the tests are sharded within the same web page (example.html).

// Example 3: Sharding with dynamic web pages

// - Test suite: example.spec.js
// - Web pages: dynamically generated pages (e.g., page1.html, page2.html, etc.)

// Configuration:

// module.exports = {
//   test.config.shard.enabled = true,
//   test.config.shard.total = 5,
//   test.config.maxWorkers = 5,
// };

// Test code:

// test('Dynamic Page', async ({ page }) => {
//   const pageTitle = `Page ${Math.floor(Math.random() * 10)}`;
//   await page.goto(`${pageTitle}.html`);
//   // Test code for dynamic page
// });

// In this example, the tests are sharded across dynamically generated web pages.






                                  // SHARDING CODE