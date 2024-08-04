// @ts-check
import { test, expect, chromium } from "@playwright/test";
import { Common } from "../common/Common";
import { LoginPage } from "../page-objects/LoginPage";

test.skip('get started link', async ({ }) => {

  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 720 },
    locale: 'en-US',
    permissions: ['geolocation'],
    ignoreHTTPSErrors: true,
  });

  const page = await context.newPage();

  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
    'Connection': 'keep-alive',
  });
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

  await page.pause();
  
});
