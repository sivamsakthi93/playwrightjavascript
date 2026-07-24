import {test,expect} from '@playwright/test';

// test("TypeInput", async({page})=>{
//     await page.goto("https://demoqa.com/automation-practice-form")
//     await page.waitForTimeout(1000);
//     let firstnamebox= await page.locator('//input[@id="firstName"]');
//     await firstnamebox.fill("Sivam");
//     let lastnamebox= await page.locator('//input[@id="lastName"]');
//     await lastnamebox.fill("Sakthivel");
// });

// test("RadioButton", async({page})=>{
//     await page.goto("https://demoqa.com/automation-practice-form")
//     await page.waitForTimeout(1000);
//     let femalecheck = await page.locator('//input[@id="gender-radio-2"]');
//     await femalecheck.check();
//     await page.waitForTimeout(1000);
//     await femalecheck.check();
//     await page.waitForTimeout(1000);
//     let malecheck = await page.locator('//input[@id="gender-radio-1"]');
//     await malecheck.click();
//     await page.waitForTimeout(1000);
// });

test("checkbox", async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.waitForTimeout(1000);
    let sportcheckbox = await page.locator('//input[@id="hobbies-checkbox-1"]');
    await sportcheckbox.check();
    await page.waitForTimeout(1000);
    let all=['//input[@id="hobbies-checkbox-1"]','//input[@id="hobbies-checkbox-2"]','//input[@id="hobbies-checkbox-3"]']
    for (let x of all){
        let hobbyCheckbox = await page.locator(x);
        await hobbyCheckbox.click();
        await page.waitForTimeout(1000);
    }
});