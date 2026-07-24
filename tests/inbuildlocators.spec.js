const { test , expect}=require('@playwright/test');

test('inbuild l',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo=await page.getByAltText('company-branding');
    var l=await expect(logo).toBeVisible();
    console.log(l);
    await page.getByPlaceholder('Username').clear();
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    await page.getByRole('button',{type: 'submit'}).click();
    await page.waitForTimeout(3000);
    await expect(await page.getByText('Dashboard')).toBeVisible();
})


// Inbuilt locators:
// -------------------
// page.getByRole() to locate by explicity and implicit attribute
// page.getByText() to locate by text content
// page.getByLable() to locate a form control by assocated lable
// page.getByPlaceholder() to locate an input by placeholder
// page.getByAltText() to locate an element usally image by its alt text
// page.getByTitle() to locate an element by its titile attribute
// page.getByTestId() to locate an elemnt by test id