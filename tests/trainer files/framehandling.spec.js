import{test,expect} from '@playwright/test'

test('frame', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    let f_count=await page.frames(); // return type of frame() is array
    console.log(f_count);
    console.log(f_count.length)
    // approach1
    let f1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'})
    await f1.locator('[name="mytext1"]').fill('divya')
    await page.waitForTimeout(5000)
    // approach2
   let f2= await page.frameLocator('[src="frame_2.html"]')
   await f2.locator('[name="mytext2"]').fill("venkat")
   await page.waitForTimeout(5000)
})