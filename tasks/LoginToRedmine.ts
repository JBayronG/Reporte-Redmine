import { LoginPage } from '../locators/locators/LoginPage';
import { RedmineBase } from '../locators/RedmineBase';
import { Page, Locator } from '@playwright/test';

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
        await this.fillField(LoginPage.userName,'jbgraciano');
        await this.fillField(LoginPage.password,'SQA$John-23**');
        await this.ClickOn(LoginPage.submitLogin);
    }
}