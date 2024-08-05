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

  test('id:001 As an user with correct credentials I would like to be able to login to the web shop', async ({ page }) => {

    // Step 1. Navigate to the login page and close cookie banners
    await page.goto(URLs.pageLogin);
    await commonObjects.closeCookieBanner();
    
    // Step 2. Fill in the login form with valid credentials and submit it
    await pageLogin.inputLoginFormEmail.waitFor();
    await pageLogin.inputLoginFormEmail.fill(TestData.userEmail);
    await pageLogin.inputLoginFormPassword.waitFor();
    await pageLogin.inputLoginFormPassword.fill(TestData.userPassword);
    await pageLogin.buttonLoginFormSubmit.waitFor();
    await pageLogin.buttonLoginFormSubmit.click();
  
    // Step 3. Navigate to the account page and verify successful login and check: Confirm the URL is correct for the account page; Check that the user profile icon is visible, indicating a logged-in state; alidate that the user's email displayed in the account information matches the test data
    await page.goto(URLs.pageAccount);
    await expect(page).toHaveURL(URLs.pageAccount);
    await expect(commonObjects.iconLoggedInProfile).toBeVisible();
    await expect(pageAccount.personalDataAccountInfoEmail).toHaveText(TestData.userEmail);
    });


  test("id:002 As a user I would like to receive an error message, if I enter invalid email", async ({ page }) => {
    
    // Step 1. Navigate to the login page and close cookie banners
    await page.goto(URLs.pageLogin);
    await commonObjects.closeCookieBanner();
  
    // Step 2. Fill in the login form with not existed email submit it
    await pageLogin.inputLoginFormEmail.waitFor();
    await pageLogin.inputLoginFormEmail.fill(TestData.userNotExistedEmail);
    await pageLogin.inputLoginFormPassword.waitFor();
    await pageLogin.inputLoginFormPassword.fill(TestData.userPassword);
    await pageLogin.buttonLoginFormSubmit.waitFor();
    await pageLogin.buttonLoginFormSubmit.click();
  
    // Step 3: Wait for the error message to be displayed and verify its content
    await pageLogin.loginFormInvalidLoginErrorMessage.waitFor();
    await expect(pageLogin.loginFormInvalidLoginErrorMessage).toBeVisible();
    await expect(pageLogin.loginFormInvalidLoginErrorMessage).toHaveText("Falsche Zugangsdaten");
    });


  test("id:003 As a user I would like to receive an error message, if I enter invalid password", async ({ page }) => {
    
    // Step 1. Navigate to the login page and close cookie banners
    await page.goto(URLs.pageLogin);
    await commonObjects.closeCookieBanner();
    
    // Step 2. Fill in the login form with not existed email submit it
    await pageLogin.inputLoginFormEmail.waitFor();
    await pageLogin.inputLoginFormEmail.fill(TestData.userEmail);
    await pageLogin.inputLoginFormPassword.waitFor();
    await pageLogin.inputLoginFormPassword.fill(TestData.userInvalidPassword);
    await pageLogin.buttonLoginFormSubmit.waitFor();
    await pageLogin.buttonLoginFormSubmit.click();
    
    // Step 3: Wait for the error message to be displayed and verify its content
    await pageLogin.loginFormInvalidLoginErrorMessage.waitFor();
    await expect(pageLogin.loginFormInvalidLoginErrorMessage).toBeVisible();
    await expect(pageLogin.loginFormInvalidLoginErrorMessage).toHaveText("Falsche Zugangsdaten");
    });


  test("id:004 As a user I would like to receive an error message, if email is empty", async ({ page }) => {
    
    // Step 1. Navigate to the login page and close cookie banners
    await page.goto(URLs.pageLogin);
    await commonObjects.closeCookieBanner();
    
    // Step 2. Fill in the login form with not existed email submit it
    await pageLogin.inputLoginFormPassword.waitFor();
    await pageLogin.inputLoginFormPassword.fill(TestData.userInvalidPassword);
    await pageLogin.buttonLoginFormSubmit.waitFor();
    await pageLogin.buttonLoginFormSubmit.click();
    
    // Step 3: Wait for the error message to be displayed and verify its content
    await pageLogin.loginFormInvalidLoginErrorMessage.waitFor();
    await expect(pageLogin.loginFormAlertMessage).toBeVisible();
    await expect(pageLogin.loginFormAlertMessage).toHaveText("Bitte überprüfe deine Angaben");
    await expect(pageLogin.loginFormInputErrorMessage).toBeVisible();
    await expect(pageLogin.loginFormInputErrorMessage).toHaveText("* Pflichtfeld");
    });

    test("id:005 As a user I would like to receive an error message, if password is empty", async ({ page }) => {
    
      // Step 1. Navigate to the login page and close cookie banners
      await page.goto(URLs.pageLogin);
      await commonObjects.closeCookieBanner();
      
      // Step 2. Fill in the login form with not existed email submit it
      await pageLogin.inputLoginFormEmail.waitFor();
      await pageLogin.inputLoginFormEmail.fill(TestData.userEmail);
      await pageLogin.buttonLoginFormSubmit.waitFor();
      await pageLogin.buttonLoginFormSubmit.click();
      
      // Step 3: Wait for the error message to be displayed and verify its content
      await pageLogin.loginFormInvalidLoginErrorMessage.waitFor();
      await expect(pageLogin.loginFormAlertMessage).toBeVisible();
      await expect(pageLogin.loginFormAlertMessage).toHaveText("Bitte überprüfe deine Angaben");
      await expect(pageLogin.loginFormInputErrorMessage).toBeVisible();
      await expect(pageLogin.loginFormInputErrorMessage).toHaveText("* Pflichtfeld");
      });

});