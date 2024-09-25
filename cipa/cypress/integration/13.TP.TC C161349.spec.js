///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import { budgetsdevelopmentfactfactor } from "../support/pages/Budgets. Fact.js";

describe('TC C161349 Budgets. Financing. Development. Plan SPM and Forecast creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do budgets financing and development plan SPM and forecast creating", () => {
        cy.wait(500);
        //Переход к странице редактирования бюджетов
        budgetsdevelopmentfactfactor.budgetstransition("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ");
        //Открытие диалогового окна ввода "Плана СПМ" для Освоения
        cy.get('.test-spending .title-smp-value .link-primary').eq(0).click();
        //Ввод комментария
        cy.get('[formcontrolname="comment"]')
        .type('Просто проверочный текст в поле "Комментарий" План СПМ Освоение');
        //Ввод значения "Плана СПМ" для Освоения
        cy.get('[formcontrolname="value"]').type('130578,00');
        //Применение введенных значений
        cy.get('.button-t1').click();
        //Открытие диалогового окна ввода "Прогноз" для Освоения
        cy.get('.test-spending .title-smp-value .link-primary').eq(1).click();
        //Ввод комментария
        cy.get('[formcontrolname="comment"]') 
        .type('Просто проверочный текст в поле "Комментарий" Прогноз Освоение');
        //Ввод значения "Прогноза"
        cy.get('[formcontrolname="value"]').type('137763,00');
        //Применение введенных значений
        cy.get('.button-t1').click();
        //Открытие диалогового окна ввода "Плана СПМ" для Финансирования
        cy.get('.test-financing .title-smp-value .link-primary').eq(0).click();
        //Ввод комментария
        cy.get('[formcontrolname="comment"]') 
        .type('Просто проверочный текст в поле "Комментарий" План СПМ Финансирование');
        //Ввод значения "Плана СПМ"
        cy.get('[formcontrolname="value"]').type('149334,00');
        //Применение введенных значений
        cy.get('.button-t1').click();
        //Открытие диалогового окна ввода "Прогноз" для Финансирования
        cy.get('.test-financing .title-smp-value .link-primary').eq(1).click();
        //Ввод комментария
        cy.get('[formcontrolname="comment"]') 
        .type('Просто проверочный текст в поле "Комментарий" План СПМ Прогноз');
        //Ввод значения "Прогноз"
        cy.get('[formcontrolname="value"]').type('166976,00');
        //Применение введенных значений
        cy.get('.button-t1').click();
    });
        
        
    it("should do budgets financing and development plan SPM and forecast field validation", () => {
        cy.wait(500)
        //Переход к странице редактирования бюджетов
        budgetsdevelopmentfactfactor.budgetstransition("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ")
        //Проверка План СпМ Освоение
        cy.get('.test-spending .title-smp-value .link-primary').eq(0)
        .should("contain.text", " 130\u00a0578,00 ");
        //Проверка Прогноз Освоение
        cy.get('.test-spending .title-smp-value .link-primary').eq(1)
        .should("contain.text", " 137\u00a0763,00 ");
        //Проверка План СпМ Финансирование
        cy.get('.test-financing .title-smp-value .link-primary').eq(0)
        .should("contain.text", " 149\u00a0334,00 ");
        //Проверка Прогноз Финансирование
        cy.get('.test-financing .title-smp-value .link-primary').eq(1)
        .should("contain.text", " 166\u00a0976,00 ");
    });
});