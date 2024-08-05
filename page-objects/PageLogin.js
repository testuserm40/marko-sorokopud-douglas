
export class PageLogin {
    constructor(page) {
        this.page = page;
        this.buttonAcceptAllCookies = page.locator('[data-testid="uc-accept-all-button"]');
        this.inputLoginFormEmail = page.locator('.login-page--login.col-sm-12.col-md-6 [name="email"]');
        this.inputLoginFormPassword = page.locator('.login-page--login.col-sm-12.col-md-6 [name="password"]');
        this.buttonLoginFormSubmit = page.locator('.login-page--login.col-sm-12.col-md-6 [type="submit"]');
    }
        //console.warn({convertedPrices});
        //await page.pause();
}