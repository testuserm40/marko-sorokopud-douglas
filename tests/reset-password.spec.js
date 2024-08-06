import { test, expect } from "@playwright/test";
import { URLs } from "../common/URLs";
import { PageLogin } from "../page-objects/PageLogin";
import { TestData } from "../common/TestData";
import { CommonObjects } from "../page-objects/CommonObjects";

  test("id:006 As a user, I would like to be able to reset my password if I forget my credentials", async ({ page }) => {
    
    const pageLogin = new PageLogin(page);
    const commonObjects = new CommonObjects(page);
    
    // Step 1. Go to Log in form >> Forgot password form
    await page.goto(URLs.pageLogin);
    await commonObjects.closeCookieBanner();
    await pageLogin.buttonFogotPassword.waitFor();
    await pageLogin.buttonFogotPassword.click();

    // Step 2: Enter email and submit the Reset password form
    await pageLogin.inputFogotPasswordFormEmail.waitFor();
    await pageLogin.inputFogotPasswordFormEmail.fill(TestData.userEmail);
    await pageLogin.buttonFogotPasswordFormSubmit.waitFor();
    await pageLogin.buttonFogotPasswordFormSubmit.click();

    // Step 3: Verify the success message with valid user email is displayed
    await expect(pageLogin.forgotPasswordSuccessUserEmail).toHaveText(TestData.userEmail);
    await page.pause()
  });

  // await page.waitForTimeout(2000);
  // await page.pause()

