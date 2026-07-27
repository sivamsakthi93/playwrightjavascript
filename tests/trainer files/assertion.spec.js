import{test,expect} from '@playwright/test';

test('asssert', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // url() is used to fetch the current page url
    let u=await page.url();
    // validate the url
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
    // validate the title
    await expect(page).toHaveTitle('Automation Testing Practice');
    // validate the element is visible , editable,enabled
    let e=await page.locator('#name')
    await expect(e).toBeVisible();
    await expect(e).toBeEnabled();
    await expect(e).toBeEmpty();
    await expect(e).toBeEditable();
    // validate the text
    await expect(await page.locator("(//*[text()='Home'])[3]")).toHaveText('Home');
    // validate the input filed value
    await expect(e).toHaveValue('divya');
    // partial text validation
    await expect(e).toContainText();
    // validate the count
    await expect(e).toBe(5)
    // valiodate the select filed
    await expect(e).toBeChecked();
    // count
    await expect(e).toHaveCount(5)
    await expect(e).not.toBeChecked();
    // attribute validation
    await expect(e).toHaveAttribute('id','name')
    await expect(e).toHaveClass()
    await expect(e).toHaveId()
    // equal check the api status code
    await expect(e).toEqual(200)

    // disable
    await expect(e).toBeDisabled();



    console.log("dummy line")

    // soft
    await expect.soft(e).toBeChecked();

})