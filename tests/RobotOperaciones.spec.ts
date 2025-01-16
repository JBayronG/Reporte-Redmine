import { test, expect } from '@playwright/test'
import { RedmineBase } from '../locators/RedmineBase'
import { LoginToOperacion} from '../tasks/LoginToRedmine'
import { ValidationToRedmine } from '../tasks/ValidationToRedmine'

//Test que se automamatiza la pagina operaciones..
test('Inicio de sesión en operaciones.sqasa', async({ page }) =>{
  const redmineBase = new RedmineBase(page)
  const loginToOperacion = new LoginToOperacion(page)
  const validationToRedmine = new ValidationToRedmine(page)
  await redmineBase.loadWeb('https://operaciones.sqasa.co/')
  await loginToOperacion.LoginOperacion()
  })