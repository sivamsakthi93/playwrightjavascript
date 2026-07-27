import{test,expect} from '@playwright/test';

test('open app',async({page})=>{

    await page.goto('https://www.facebook.com/login.php');
    await page.waitForTimeout(5000)
    let t=await page.title();
    console.log(t);
    await page.waitForTimeout(5000)
    await page.goBack();
    await page.waitForTimeout(5000)
    await page.goForward();
    await page.waitForTimeout(5000)
    await page.reload();
    await page.waitForTimeout(5000)

   // await page.close();



})
