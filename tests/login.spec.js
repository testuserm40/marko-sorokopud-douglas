import { test, expect } from "@playwright/test";
import { URLs } from "../common/URLs";
import { PageLogin } from "../page-objects/PageLogin";
import { PageAccount } from "../page-objects/PageAccount";
import { TestData } from "../common/TestData";
import { CommonObjects } from "../page-objects/CommonObjects";

test.describe("User Login Tests", () => {
  let pageLogin;
  let pageAccount;
  let commonObjects;

  test.beforeEach(async ({ page }) => {
    pageLogin = new PageLogin(page);
    pageAccount = new PageAccount(page);
    commonObjects = new CommonObjects(page);
  });


test.skip('id:001 As an user with correct credentials I would like to be able to login to the web shop', async ({ page }) => {

  // Step 1. Go to the Login page and close cookie banner
  await page.goto(URLs.pageLogin);
  await commonObjects.closeCookieBanner();
  
  // Step 2. Enter valid data into the Login form fields and Submit the form
  await pageLogin.inputLoginFormEmail.waitFor();
  await pageLogin.inputLoginFormEmail.fill(TestData.userEmail);
  await pageLogin.inputLoginFormPassword.waitFor();
  await pageLogin.inputLoginFormPassword.fill(TestData.userPassword);
  await pageLogin.buttonLoginFormSubmit.waitFor();
  await pageLogin.buttonLoginFormSubmit.click();

  // Step 3. Go to Acount page 
  await page.goto(URLs.pageAccount);
  await expect(page).toHaveURL(URLs.pageAccount);
  await expect(commonObjects.iconLoggedInProfile).toBeVisible();
  await expect(pageAccount.personalDataAccounInfoEmail).toHaveText(TestData.userEmail);
  });
});