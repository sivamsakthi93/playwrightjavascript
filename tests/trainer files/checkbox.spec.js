import{test,expect} from '@playwright/test';

test('check box', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
   // await page.locator('#sunday').check();
   // await page.waitForTimeout(5000)
    await page.locator('#monday').click();
    await page.waitForTimeout(5000)
   /* await page.click('#tuesday')
    await page.waitForTimeout(5000)
    await page.check('#wednesday')
    await page.waitForTimeout(5000)
    await page.locator('#sunday').click();*/
   // await page.waitForTimeout(5000)
    await page.locator('#monday').uncheck();
    await page.waitForTimeout(5000)

    // select multiple check box
    let l=['#monday','#sunday', '#friday'];
    for(let x of l){
        await page.locator(x).check();
        await page.waitForTimeout(5000)
    }
})
test('radio button', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#female').check();
    await page.waitForTimeout(5000)
})