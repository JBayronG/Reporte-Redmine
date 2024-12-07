import { DashboardPage } from '../locators/locators/DashboardPage'
import { RedmineBase } from '../locators/RedmineBase'
import { Page, Locator } from '@playwright/test'


const testData = require('../data/EntryData.json')

export class DashboardToRedmine extends RedmineBase {
    private readonly proyect : Locator
    private readonly proyect1 : Locator
    private readonly timeHors0 : Locator
    private readonly timeComments0 : Locator
    private readonly timeHors1 : Locator
    private readonly timeComments1 : Locator
    private readonly timeHors11 : Locator
    private readonly timeComments11 : Locator
    private readonly timeHors12 : Locator
    private readonly timeComments12 : Locator
    private readonly buttonSave : Locator

    constructor(page : Page){
        super(page)
        this.proyect = page.locator(DashboardPage.proyect)
        this.proyect1 = page.locator(DashboardPage.proyect1)
        this.timeHors0 = page.locator(DashboardPage.timeHors0)
        this.timeComments0 = page.locator(DashboardPage.timeComments0)
        this.timeHors1 = page.locator(DashboardPage.timeHors1)
        this.timeComments1 = page.locator(DashboardPage.timeComments1)
        this.timeHors11 = page.locator(DashboardPage.timeHors11)
        this.timeComments11 = page.locator(DashboardPage.timeComments11)
        this.timeHors12 = page.locator(DashboardPage.timeHors12)
        this.timeComments12 = page.locator(DashboardPage.timeComments12)
        this.buttonSave = page.locator(DashboardPage.buttonSave)
    }

    async DashboardRedmine(){
        await this.ClickOn(DashboardPage.proyect)
        await this.ClickOn(DashboardPage.proyect1)
        await this.ClickOn(DashboardPage.proyect2)
    }

    async FillFieldRedmine(){
        await this.fillField(DashboardPage.timeHors0, testData.timeEntries.timeHors0)
        await this.fillField(DashboardPage.timeComments0,testData.timeEntries.timeComments0)
        await this.fillField(DashboardPage.timeHors1,testData.timeEntries.timeHors1)
        await this.fillField(DashboardPage.timeComments1,testData.timeEntries.timeComments1)
        await this.fillField(DashboardPage.timeHors11,testData.timeEntries.timeHors11)
        await this.fillField(DashboardPage.timeComments11,testData.timeEntries.timeComments11)
        await this.fillField(DashboardPage.timeHors12,testData.timeEntries.timeHors12)
        await this.fillField(DashboardPage.timeComments12,testData.timeEntries.timeComments12)
    }

    async SaveRedmine(){
        await this.clickOn1(DashboardPage.buttonSave)
    }
}
