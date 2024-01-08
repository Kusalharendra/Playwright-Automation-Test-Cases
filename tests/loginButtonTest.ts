/*Verify that the Login button directs to the login form
(Login form should be displayed after clicking the Login button)

Steps:-
1.Launch the URL in google chrome web browser
2.Click the Login button
*/

import { expect, test } from "@playwright/test";

//Launch the URL in google chrome web browser
test("should display the login form", async ({ page }) => {
    await page.goto("https://onlinelibrary.wiley.com/");
    
//Click the Login button
    await page.getByRole("link", { name: "Login" }).click();

//Check if the title of the webpage is as expected
    await expect(page).toHaveURL("https://onlinelibrary.wiley.com/action/showLogin?role=button&uri=%2F");
});