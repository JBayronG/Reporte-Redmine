import { test, expect } from '@playwright/test'
import { RedmineBase } from '../locators/RedmineBase'
import { LoginToRedmine } from '../tasks/LoginToRedmine'
import { ValidationToRedmine } from '../tasks/ValidationToRedmine'
import { DashboardToRedmine } from '../tasks/DashboardToRedmine'

//Test que se automamatiza la pagina Redmine..
test('Inicio de Sesión Redmine', async ({ page }) => {
  const redmineBase = new RedmineBase(page)
  const loginToRedmine = new LoginToRedmine(page)
  const validationToRedmine = new ValidationToRedmine(page)
  const dashboardToRedmine = new DashboardToRedmine(page)
  await redmineBase.loadWeb('https://redmine.sqasa.co/login?back_url=http%3A%2F%2Fredmine.sqasa.co%2F')
  await loginToRedmine.LoginRedmine()
  await validationToRedmine.ValidationPage()
  await dashboardToRedmine.DashboardRedmine()
  await validationToRedmine.ValidationTitle()
  await dashboardToRedmine.FillFieldRedmine()
 // await dashboardToRedmine.SaveRedmine()
})