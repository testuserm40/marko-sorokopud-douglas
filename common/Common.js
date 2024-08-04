import { test, expect } from "@playwright/test";
import { v4 as uuidv4 } from "uuid";

export class Common {
    constructor(page) {
        this.page = page;
        this.urlLoginPage = '/login';
        this.urlAccountPage = '/account';

    }
  
    
    generateUuid4 = async () => {
        return uuidv4();
    }

    generateEmail = async () => {
        const uuid4Value = await this.generateUuid4();
        const userEmail = 'testuser.m40+'+ uuid4Value +'@proton.me';
        console.warn({userEmail});
        return userEmail;
    }

    //await page.pause();
}