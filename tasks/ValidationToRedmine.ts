import { ValidationPage } from '../locators/locators/ValidationPage'
import { RedmineBase } from '../locators/RedmineBase'
import { Page, Locator } from '@playwright/test'

export class ValidationToRedmine extends RedmineBase {
    private readonly validationText : Locator
    private readonly validationTitle : Locator

    constructor (page :Page){
        super(page)
        this.validationText = page.locator(ValidationPage.validationText)
        this.validationTitle = page.locator(ValidationPage.validationTitle)
    }

    async ValidationPage(){
        await this.expectVisible(ValidationPage.validationText)
    }

    async ValidationTitle(){
        await this.expectVisible(ValidationPage.validationTitle)
    }
}