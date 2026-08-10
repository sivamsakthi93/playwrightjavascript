import{test,expect} from '@playwright/test'


test('tag name', async({page})=>{
    await page.goto('https://www.facebook.com/login.php');
   let tc= await page.locator("//*[text()='Forgotten password?']").textContent();
   console.log(tc)
   // await page.locator('a').all();
  let l= await page.$$('a')
  for(const link of l){
  // let t= await link.innerText();
  let t=await link.textContent()
   console.log(t)
   if(t==="Sign up"){
    await link.click();
   break;
   }
   //await page.waitForTimeout(5000)
  }
  await page.waitForTimeout(5000)
 // await page.locator("")
})