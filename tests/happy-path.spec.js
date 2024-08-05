// @ts-check
import { test, expect } from "@playwright/test";
import { CommonObjects } from "../page-objects/CommonObjects";

test.skip('get started link', async ({ page }) => {

  const commonObjects = new CommonObjects(page);
  await page.goto("/");
  await commonObjects.closeCookieBanner();
  await expect(page).toHaveURL("/de");
  await expect(page).toHaveTitle("Online-Parfümerie ✔️ Parfum & Kosmetik kaufen | DOUGLAS");
});
