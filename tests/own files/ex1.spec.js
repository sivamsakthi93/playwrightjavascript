import {test,expect} from '@playwright/test';


test("TC1",async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.waitForTimeout(10000);
    let title = await page.title();
    console.log(title)
    await page.goForward();
    await page.waitForTimeout(5000);
    await page.goBack();
    await page.waitForTimeout(5000);
    await page.reload();
    await page.waitForTimeout(5000);

})
