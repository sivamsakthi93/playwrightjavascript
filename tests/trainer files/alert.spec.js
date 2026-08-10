import{test,expect} from '@playwright/test'

test('simple alert', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await page.waitForTimeout(5000)
        await dialog.accept();
         await page.waitForTimeout(5000)
    })
    await page.locator('#alertBtn').click();
    await page.waitForTimeout(5000)

})
test('confirmation alert', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await page.waitForTimeout(5000)
       // await dialog.accept();
       await dialog.dismiss()
         await page.waitForTimeout(5000)
    })
    await page.locator('#confirmBtn').click();
    await page.waitForTimeout(5000)

})
test('prompt alert', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await page.waitForTimeout(5000)
       // await dialog.accept();
       await dialog.dismiss('divya')
         await page.waitForTimeout(5000)
    })
    await page.locator('#promptBtn').click();
    await page.waitForTimeout(5000)

})