import {test,expect,chromium} from '@playwright/test';

test("Cookie1", async()=>{
    const broswer= await chromium.launch();
    const context= await broswer.newContext();
    const page= await context.newPage();
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.waitForTimeout(5000);
    await page.close();
    let gt= await context.cookies();
    console.log(gt);
    let gts= await context.clearCookies();
    console.log(gts);

})