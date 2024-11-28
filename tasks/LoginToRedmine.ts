import dotenv from 'dotenv';
import { LoginPage } from '../locators/locators/LoginPage';
import { RedmineBase } from '../locators/RedmineBase';
import { Page, Locator } from '@playwright/test';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

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
           // Leer las credenciales desde las variables de entorno
           const username = process.env.REDMINE_USERNAME || '';
           const password = process.env.REDMINE_PASSWORD || '';
   
           if (!username || !password) {
               throw new Error('Credenciales no definidas en las variables de entorno');
           }
        await this.userName.fill(username);
        await this.password.fill(password)
        await this.submitLogin.click();
    }
}