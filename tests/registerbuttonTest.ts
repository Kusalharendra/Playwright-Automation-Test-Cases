/*Verify that the Register button directs to the register form
(Register form should be displayed after clicking the Register button)

Steps:-
1.Launch the URL in google chrome web browser
2.Click the Register button
3.Click "New User"
*/

import { expect, test } from "@playwright/test";

//Launch the URL in google chrome web browser
test("should display the login form", async ({ page }) => {
    await page.goto("https://onlinelibrary.wiley.com/");
    
//Click the Login button
    await page.getByRole("link", { name: "Register" }).click();

//Check if the webpage is as expected
    await expect(page).toHaveURL("https://onlinelibrary.wiley.com/action/showLogin?role=button&uri=%2F");

//Check if it directs to login information webpage is as expected
await expect(page).toHaveURL("https://onlinelibrary.wiley.com/action/registration?acdl-redirect=true");
});
