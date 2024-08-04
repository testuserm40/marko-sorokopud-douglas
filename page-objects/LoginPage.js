
import { Common } from "../common/Common";
import { test, expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.buttonAcceptAllCookies = page.getByTestId('uc-accept-all-button');
        this.inputLoginFormEmail = page.locator('.login-page--login.col-sm-12.col-md-6 [name="email"]');
        this.inputLoginFormPassword = page.locator('.login-page--login.col-sm-12.col-md-6 [name="password"]');
        this.buttonLoginFormSubmit = page.locator('.login-page--login.col-sm-12.col-md-6 [type="submit"]');
    }

    closeCookieBanner = async () => {
        const common = new Common(this.page);
        await this.page.goto(common.urlLoginPage);
        //await this.buttonAcceptAllCookies.waitFor();
        //await this.buttonAcceptAllCookies.click();
    }
        //console.warn({convertedPrices});
        //await page.pause();
}