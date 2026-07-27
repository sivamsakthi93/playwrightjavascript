

import {test,expect} from '@playwright/test';


test("TC1",async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.waitForTimeout(10000);
    let title = await page.title();
    console.log(title);
//     <div id="brandsRefinements">
//   <ul>
//     <li id="parentLi">
//       <span class="label">Nike</span>
//       <a href="#">
//         <div>
//           <label>
//             <input type="checkbox" id="chk1"/>
//           </label>
//         </div>
//       </a>
//     </li>
//   </ul>
// </div>

// child
// //div[@id="brandsRefinements"]/child::ul
// descendant
// //div[@id="brandsRefinements"]/descendant::input
// parent 
// //input[@id="chk1"]/parent::label
// ancestor
// //input[@id="chk1"]/ancestor::li
// following-sibling
// //span[@class="label"]/following-sibling::a
// preceding-sibling
// //a/preceding-sibling::span
// following
// //span[@class="label"]/following::input
// preceding
// //input[@id="chk1"]/preceding::span

});