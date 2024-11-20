import { ValidationPage } from '../locators/locators/ValidationPage';
import { RedmineBase } from '../locators/RedmineBase';
import { Page, Locator } from '@playwright/test';

export class ValidationToRedmine extends RedmineBase {
    private readonly validationText : Locator;

    constructor (page :Page){
        super(page)
        this.validationText = page.locator(ValidationPage.validationText)
    }

    async ValidationPage(){
        await this.expectVisible(ValidationPage.validationText);
    }
}