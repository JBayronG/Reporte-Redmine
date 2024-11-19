import { Page, expect } from "@playwright/test";

export class RedmineBase {
    protected readonly page : Page

    constructor(page:Page){
        this.page = page
    }

    async loadWeb(url: string){
        await this.page.goto(url);
    }
    async ClickOn(selector: string){
        await this.page.click(selector);
    }
    async fillField(selector: string, value: string){
        await this.page.locator(selector).fill(value);
    }
    async expectVisible(selector: string){
        await expect(this.page.locator(selector)).toBeVisible();
    }
}