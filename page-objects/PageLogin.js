
export class PageLogin {
    constructor(page) {
        this.page = page;
        this.buttonAcceptAllCookies = page.locator('[data-testid="uc-accept-all-button"]');
        this.inputLoginFormEmail = page.locator('.login-page--login.col-sm-12.col-md-6 [name="email"]');
        this.inputLoginFormPassword = page.locator('.login-page--login.col-sm-12.col-md-6 [name="password"]');
        this.buttonLoginFormSubmit = page.locator('.login-page--login.col-sm-12.col-md-6 [type="submit"]');

        this.buttonFogotPassword = page.locator('.login__link');
        this.inputFogotPasswordFormEmail = page.locator('[name="forgotPasswordEmail"]');
        this.buttonFogotPasswordFormSubmit = page.locator('.button.button__primary.forgot-password__button');
        this.forgotPasswordSuccessUserEmail = page.locator('div.forgot-password__confirmation-email');

        this.loginFormAlertMessage = page.locator('div.alert--message');
        this.loginFormInputErrorMessage = page.locator('div.input__error');
    }
        //console.warn({convertedPrices});
        //await page.pause();
}