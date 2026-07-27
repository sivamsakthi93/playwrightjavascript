import {test,expect} from '@playwright/test';

test('TC1',async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.waitForTimeout(3000);
    let a1= await page.url();
    console.log(a1);
    //validate the url
    await expect(page).toHaveURL("https://demoqa.com/automation-practice-form");
    //validate the title
    await expect(page).toHaveTitle("demosite")
    //validate the element is visible
    let e= await page.locator('#userEmail')
    await expect(e).toBeVisible();
    //validate the element is enabled
    await expect(e).toBeEnabled();
    //validate the element is empty
    await expect(e).toBeEmpty();
    //validate the element is editable
    await expect(e).toBeEditable();
});