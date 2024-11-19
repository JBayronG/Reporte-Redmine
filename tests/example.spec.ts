import { test, expect } from '@playwright/test';
import { RedmineBase } from '../locators/RedmineBase';
import { LoginToRedmine } from '../tasks/loginToRedmine';

test('Inicio de Sesión Redmine', async ({ page }) => {
  const redmineBase = new RedmineBase(page);
  const loginToRedmine = new LoginToRedmine(page);
  await redmineBase.loadWeb('https://redmine.sqasa.co/login?back_url=http%3A%2F%2Fredmine.sqasa.co%2F');
  await loginToRedmine.LoginRedmine();
});
/*test('Inicio de Sesión Redmine', async ({ page }) => {
  await page.goto('https://redmine.sqasa.co/login?back_url=http%3A%2F%2Fredmine.sqasa.co%2F');
  await page.locator('//input[@id="username"]').fill('jbgraciano');
  await page.locator('//input[@id="password"]').fill('SQA$John-23**');
  await page.locator('#login-submit').click();
  await page.locator('#txt_header').isVisible();
  await page.locator('//a[text()="Registro de horas"]').click();
  await page.locator('//*[@id="project-jump"]/span').click();
  await page.locator('//*[@id="project-jump"]/div/div[2]/a[6]/span').click({timeout: 60000});
  await page.locator('#new_time_entry_0_hours').fill('4');
  await page.locator('#new_time_entry_0_comments').fill('- Ejecución de pruebas funcionales para los diferentes aplicativos de AEL, validando que el desarrollo de la solución de las Vulnerabilidades, no presenten bug, errores o fallos en los aplicativos.');
  await page.locator('#new_time_entry_1_hours').fill('2');
  await page.locator('#new_time_entry_1_comments').fill('- Deily, revisión de los temas asignados, planeado los temas siguientes que se van a trabajar y gestionando los bloqueos. - Gestión de PBI´s, entendimiento de los desarrollos y preguntando que componentes se han visto afectados con la solución de la vulnerabilidad reportada por Fortify.- Validaciones funcionales de PBI. - Capacitación de Capítulos QA, participar en las explicaciones de la Reunión, ya sea de negocio, herramientas o otros temas de interés de QA´s.');
  await page.locator('#new_time_entry_11_hours').fill('1');
  await page.locator('#new_time_entry_11_comments').fill('- Diseño de Test Case, para verificar o validar de que los cambios implementados por los desarrolladores para solucionar las vulnerabilidades de los portales no presenten error o fallas en el sistema.');
  await page.locator('#new_time_entry_12_hours').fill('2');
  await page.locator('#new_time_entry_12_comments').fill('- Generación de los insumos (Datos de pruebas), para las pruebas funcionales de los diferentes componentes afectados por el desarrollo');
 // await page.locator('//input[@id="username"]').fill('jbgraciano');
  //await page.locator('#button_save_time_entries').nth(0).click()
  //await page.getByText('t6732te3').dblclick();
});*/