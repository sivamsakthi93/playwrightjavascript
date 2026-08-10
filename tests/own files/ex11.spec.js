import {test, expect} from "@playwright/test";
import { describe } from "node:test";

test.describe('Group1',() =>{
test ("test1",
  {tags: '@smoke'},
  async({page}) => {
    await page.goto("https://www.google.com");
    let title= await page.title();
    console.log(title)
    const url = page.url();
    console.log(title)

});
});