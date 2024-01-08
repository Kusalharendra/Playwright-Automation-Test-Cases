/*Title - Verify that the "WILEY Online Library" logo directs to the home page
(Have to redirect to the home page by clicking the logo)

Steps:-
1.Launch the URL in google chrome web browser
2.Click the "Wiley Online Library" logo
*/
import { expect, test } from "@playwright/test";

//Launch the URL in google chrome web browser
test("check WILEY logo", async ({ page }) => {
    page.goto("https://onlinelibrary.wiley.com/");

// Click the "Wiley Online Library" logo/link
    await page.getByRole("link", { name: "Wiley Online Library" }).click();

//Check the expected result
    await expect(page).toHaveURL("https://onlinelibrary.wiley.com/");
});

