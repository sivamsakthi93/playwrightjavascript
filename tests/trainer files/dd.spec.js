import{test,expect} from '@playwright/test'

test('dd' ,async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
   // await page.locator('#country').selectOption('Germany')
  //  await page.locator('#country').selectOption({value: 'france'})
    await page.locator('#country').selectOption({index: 3})
    await page.selectOption('#country', {index: 5})
    let t=await page.locator('#country option').allInnerTexts();
    console.log(t)
    console.log(await page.locator('#country option').allTextContents())
    await page.waitForTimeout(5000)

})
test.only('m_dd' ,async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    await page.locator('#colors').selectOption([{index: 1},{index: 2}])
  
    await page.waitForTimeout(5000)

})
