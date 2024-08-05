
export class PageAccount {
    constructor(page) {
        this.page = page;
        this.personalDataAccountInfoEmail = page.locator('.account-data__info.account-data__personal .account-data__info-box div').nth(1);
    }

        //console.warn({convertedPrices});
        //await page.pause();
}