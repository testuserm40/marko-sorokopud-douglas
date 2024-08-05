import { v4 as uuidv4 } from "uuid";

export class TestData {
    static userEmail = 'testuser.m40+22daff92-6256-4b30-87dd-95d808c89e8e@proton.me';
    static userPassword = 'Test00!';
    static userNotExistedEmail = 'testuser@unknownemail.com';
    static userInvalidPassword = 'InvalidPassword';

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