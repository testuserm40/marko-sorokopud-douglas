// @ts-check
import { test, expect } from "@playwright/test";
import { Common } from "../common/Common";
import { LoginPage } from "../page-objects/LoginPage";

test('get started link', async ({ page }) => {

  const common = new Common(page);
  const loginPage = new LoginPage(page);

  await loginPage.closeCookieBanner();
  await expect(page).toHaveURL("https://www.douglas.de/de/login");
  await expect(page).toHaveTitle("Login | DOUGLAS");
});
