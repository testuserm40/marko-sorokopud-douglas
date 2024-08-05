
import { URLs } from "../common/URLs";

export class CommonObjects {
    constructor(page) {
        this.page = page;
        this.buttonAcceptAllCookies = page.locator('[data-testid="uc-accept-all-button"]');
        this.iconLoggedInProfile = page.locator('data-testid="account-flyout-logged-in-profile-icon"');
    }

    closeCookieBanner = async () => {
        await this.buttonAcceptAllCookies.waitFor();
        await this.buttonAcceptAllCookies.click();
    }

}