import { Page, expect } from '@playwright/test'

export class RedmineBase {
    protected readonly page : Page

    constructor(page:Page){
        this.page = page
    }

    async loadWeb(url: string){
        await this.page.goto(url)
    }
    async ClickOn(selector: string){
        await this.page.locator(selector).waitFor({ state: 'visible' })
        await this.page.locator(selector).click()
    }
    async fillField(selector: string, value: string | number){
        await this.page.locator(selector).fill(value.toString())
    }
    async expectVisible(selector: string){
        await expect(this.page.locator(selector)).toBeVisible({ timeout: 10000 })
    }
    async clickOn1(selector: string, index: number = 0): Promise<void> {
        try {
            const locator = this.page.locator(selector)
            const count = await locator.count()
    
            if (count === 0) {
                throw new Error(`No se encontró ningún elemento con el selector "${selector}".`)
            }
    
            if (count > 1) {
                console.warn(
                    `Advertencia: Se encontraron ${count} elementos con el selector "${selector}". Usando el índice ${index}.`
                );
            }
    
            // Realiza el clic en el elemento del índice especificado
            await locator.nth(index).click()
        } catch (error) {
            console.error(`Error al hacer clic en el selector "${selector}":`, error)
            throw error;
        }
    }
    
}

