// capturing multiple elemnts in youtube

// import {test,expect} from"@playwright/test"
// test("Capture Multiple Elements",async({page})=>{

//     await page.goto("https://www.youtube.com/");
//     const links = await page.$$("a");   // all links are stored in "a ref". so we used a to get links 

//     for (const link of links)  // using for of loop to get all links
//     {
//         const multipleLinks =await link.textContent();   //link.textContent keyword to call all links in the text
//         console.log(multipleLinks);
//     }



// capturing multiple links in demoblaze

// import {test,expect} from "@playwright/test"
// test ("demoblaze",async({page})=>{

//      await page.goto("https://www.demoblaze.com/");

    // const links = await page.$$('a');    // to print all links

    // for(const link of links)
    // {
    //     const multipleLinks = await link.textContent();  
    //     console.log(multipleLinks);
    // }
    
    // page.waitForSelector("//div[@id='tbodyid']//h4/a");  //wait till all products loaded in the page
    
    
//     // to print all products in links
    
//     const products = await page.$$("//div[@id='tbodyid']//h4/a"); //here all products getting into variables
    
//     for(const product of products)
//     {
//         const multipleProducts = await product.textContent();
//         console.log(multipleProducts);
//     }
// })

