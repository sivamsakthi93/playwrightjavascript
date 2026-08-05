import {test,expect} from '@playwright/test';

// take the visible ss page

test('page ss',async({page})=>{
    await page.goto('https://chandanachaitanya.github.io/selenium-practice-site/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'homepage.png'});
})
//take the ss of full page with zoom out
test('page fullpage',async({page})=>{
    await page.goto('https://chandanachaitanya.github.io/selenium-practice-site/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'fullpage.png',fullPage:true});
})
// take the ss of element only particular 
test('element ss',async({page})=>{
    await page.goto('https://chandanachaitanya.github.io/selenium-practice-site/');
    await page.locator('#enterText').screenshot({path:'tests/screenshots/'+Date.now()+'mac.png'});
})

test('web ss',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    let l= await page.$$("//*[@id='pagination']/li/a");
    for(let ii of l){
        await ii.click();
        await page.screenshot({path:'tests/screenshots/'+Date.now()+'homepage.png'});
    }
})