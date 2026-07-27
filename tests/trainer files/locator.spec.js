import{test,expect} from '@playwright/test';

test('locators', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // id need to use #
    await page.locator('#name').type("divya")
    // other way of decleratio
    await page.locator('tagname#value of the id')
    await page.locator('input#name')
    await page.locator('[id="value of the id"]')
    await page.locator('tagname[id="value of the id"]')
    await page.waitForTimeout(5000)


    // class need to use .
    await page.locator('.form-control').type()
    // other way of decleration
    await page.locator('tagname.value of the id')
    await page.locator('[class="value of the id"]')
    await page.locator('tagname[class="value of the id"]')

    // other attribute
     await page.locator('[attribute="value of the attribute"]')
    await page.locator('tagname[attribute="value of the attribute"]')

    // text
    await page.locator("[text='Home']")

})