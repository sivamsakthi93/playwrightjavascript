import{test,expect,chromium} from '@playwright/test';


test('get cookies', async()=>{
   const browser= await chromium.launch();
   const context=await browser.newContext();
  const page= await context.newPage();
  await page.goto('https://www.facebook.com/login.php');
 let c= await context.cookies();
 console.log(c);
 await context.clearCookies();
 let cc=await context.cookies();
 console.log(cc)
})