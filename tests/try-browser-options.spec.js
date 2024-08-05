// @ts-check
import { test, expect, chromium } from "@playwright/test";
import { URLs } from "../common/URLs";
import { PageLogin } from "../page-objects/PageLogin";

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

  const pageLogin = new PageLogin(page);

  await page.goto(URLs.pageLogin);

  await pageLogin.buttonAcceptAllCookies.waitFor();
  await pageLogin.buttonAcceptAllCookies.click();

  await pageLogin.inputLoginFormEmail.waitFor();
  await pageLogin.inputLoginFormEmail.fill("testuser.m40+001@proton.me");

  await pageLogin.inputLoginFormPassword.waitFor();
  await pageLogin.inputLoginFormPassword.fill("TestUser00!");

  await pageLogin.buttonLoginFormSubmit.waitFor();
  await pageLogin.buttonLoginFormSubmit.click();

  await page.pause();
  
});
