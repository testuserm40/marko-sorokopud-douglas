// @ts-check
import { test, expect, chromium } from "@playwright/test";
import { Common } from "../common/Common";
import { LoginPage } from "../page-objects/LoginPage";

test.skip('get started link', async ({ page }) => {

  const common = new Common(page);
  const loginPage = new LoginPage(page);

  await page.goto('/login');

  await loginPage.buttonAcceptAllCookies.waitFor();
  await loginPage.buttonAcceptAllCookies.click();

  await loginPage.inputLoginFormEmail.waitFor();
  await loginPage.inputLoginFormEmail.fill("testuser.m40+001@proton.me");

  await loginPage.inputLoginFormPassword.waitFor();
  await loginPage.inputLoginFormPassword.fill("TestUser00!");

  await loginPage.buttonLoginFormSubmit.waitFor();
  await loginPage.buttonLoginFormSubmit.click();

  await expect(page).toHaveURL('https://expected-url.com');


  await page.pause();
  
});
