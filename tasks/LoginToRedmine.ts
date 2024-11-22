import { LoginPage } from '../locators/locators/LoginPage';
import { RedmineBase } from '../locators/RedmineBase';
import { Page, Locator } from '@playwright/test';


 const testData = require('../data/EntryData.json')

export class LoginToRedmine extends RedmineBase {
    private readonly userName : Locator;
    private readonly password : Locator;
    private readonly submitLogin : Locator;

    constructor(page : Page){
        super(page)
        this.userName = page.locator(LoginPage.userName);
        this.password = page.locator(LoginPage.password);
        this.submitLogin = page.locator(LoginPage.submitLogin);
    }

    async LoginRedmine(){
        await this.fillField(LoginPage.userName,testData.login.username);
        await this.fillField(LoginPage.password,testData.login.password);
        await this.ClickOn(LoginPage.submitLogin);
    }
}