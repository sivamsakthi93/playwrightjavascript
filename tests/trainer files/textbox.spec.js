import{test,expect} from '@playwright/test'

test('text box handling', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
 let n=  await page.locator('#name');
   await n.type('divya')
    await page.waitForTimeout(5000)
    await page.type('#email', 'd@gmail.com')
    await page.waitForTimeout(5000)
    await page.locator('#phone').fill('47858758')
    await page.waitForTimeout(5000)
    await page.fill('#textarea','2 nd cross street')
    await page.waitForTimeout(5000);
    await n.clear();
   // await page.waitForTimeout(5000);
})