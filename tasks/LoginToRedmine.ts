import dotenv from 'dotenv'
import { LoginPageR, LoginPageO } from '../locators/locators/LoginPage'
import { RedmineBase } from '../locators/RedmineBase'
import { Page, Locator } from '@playwright/test'

// Cargar las variables de entorno desde el archivo .env
dotenv.config()

//Clase para el login en la pagina de Redmine..
export class LoginToRedmine extends RedmineBase {
    private readonly userName : Locator
    private readonly password : Locator
    private readonly submitLogin : Locator

    //CONSTRUCTO
    constructor(page : Page){
        super(page)
        this.userName = page.locator(LoginPageR.userName)
        this.password = page.locator(LoginPageR.password)
        this.submitLogin = page.locator(LoginPageR.submitLogin)
    }

    //ACCIONES
    async LoginRedmine(){
           // Leer las credenciales desde las variables de entorno
           const username = process.env.REDMINE_USERNAME || ''
           const password = process.env.REDMINE_PASSWORD || ''
   
           if (!username || !password) {
               throw new Error('Credenciales no definidas en las variables de entorno')
           }
        await this.userName.fill(username)
        await this.password.fill(password)
        await this.submitLogin.click()
    }
}

//Clase para el login en la pagina de operaciones..
export class LoginToOperacion extends RedmineBase{
    private readonly userEmail : Locator
    private readonly claveEmail : Locator
    private readonly loginButton : Locator

    //CONSTRUCTO
    constructor(page : Page){
        super(page)
        this.userEmail = page.locator(LoginPageO.userEmail)
        this.claveEmail = page.locator(LoginPageO.claveEmail)
        this.loginButton = page.locator(LoginPageO.loginButton)
    }

        //ACCIONES
    async LoginOperacion(){
        // Leer las credenciales desde las variables de entorno
        const userEmail = process.env.OPERACION_USERNAME || ''
        const claveEmail = process.env.OPERACION_PASSWORD || ''

        if (!userEmail || !claveEmail) {
            throw new Error('Credenciales no definidas en las variables de entorno')
        }
     await this.userEmail.fill(userEmail)
     await this.claveEmail.fill(claveEmail)
     await this.loginButton.click()
    }
}