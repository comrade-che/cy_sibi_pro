///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import { budgetsdevelopmentfactfactor } from "../support/pages/Budgets. Fact.js";

describe('TC C152017 Budgets. Development. Plan creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do budgets development plan creating", () => {
        cy.wait(500);
        //Переход к странице редактирования бюджетов
        budgetsdevelopmentfactfactor.budgetstransition("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ");
        //Переход к странице "Редактирование" Освоение
        cy.get('.test-spending [apptooltip="Редактировать"]').click();
        //Ввод "Комментария"
        cy.get('[formcontrolname="comment"]')
        .type('Просто проверочный текст в поле "Комментарий" Освоение план');
        //Переход к заполнению помесячных значений плана освоения
        cy.get('.button-t1').click();
        //Ввод значений "Январь"
        cy.get('[formcontrolname="planJan"]').type('10338,68');
        //Ввод значений "Февраль"
        cy.get('[formcontrolname="planFeb"]').type('10788,83');
        //Ввод значений "Март"
        cy.get('[formcontrolname="planMar"]').type('7338,05');
        //Ввод значений "Апрель"
        cy.get('[formcontrolname="planApr"]').type('8008,95');
        //Ввод значений "Май"
        cy.get('[formcontrolname="planMay"]').type('5616,08');
        //Ввод значений "Июнь"
        cy.get('[formcontrolname="planJun"]').type('5224,38');
        //Ввод значений "Июль"
        cy.get('[formcontrolname="planJul"]').type('20824,82');
        //Ввод значений "Август"
        cy.get('[formcontrolname="planAug"]').type('12868,53');
        //Ввод значений "Сентябрь"
        cy.get('[formcontrolname="planSep"]').type('27032,10');
        //Ввод значений "Октябрь"
        cy.get('[formcontrolname="planOct"]').type('22093,31');
        //Ввод значений "Ноябрь"
        cy.get('[formcontrolname="planNov"]').type('6853,21');
        //Ввод значений "Декабрь"
        cy.get('[formcontrolname="planDec"]').type('7138,00');
        //Применение введенных значений
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
    });
    
    it("should do budgets development plan field validation", () => {
        cy.wait(500)
        //Переход к странице редактирования бюджетов
        budgetsdevelopmentfactfactor.budgetstransition("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ")
        //Проверка бюджет план освоения Январь
        cy.get('.plan-value').eq(0).should("contain.text", " 10\u00a0338,68 ")
        //Проверка бюджет план освоения Февраль
        cy.get('.plan-value').eq(1).should("contain.text", " 10\u00a0788,83 ")
        //Проверка бюджет план освоения Март
        cy.get('.plan-value').eq(2).should("contain.text", " 7\u00a0338,05 ")
        //Проверка бюджет план освоения Апрель
        cy.get('.plan-value').eq(3).should("contain.text", " 8\u00a0008,95 ")
        //Проверка бюджет план освоения Май
        cy.get('.plan-value').eq(4).should("contain.text", " 5\u00a0616,08 ")
        //Проверка бюджет план освоения Июнь
        cy.get('.plan-value').eq(5).should("contain.text", " 5\u00a0224,38 ")
        //Проверка бюджет план освоения Июль
        cy.get('.plan-value').eq(6).should("contain.text", " 20\u00a0824,82 ")
        //Проверка бюджет план освоения Август
        cy.get('.plan-value').eq(7).should("contain.text", " 12\u00a0868,53 ")
        //Проверка бюджет план освоения Сентябрь
        cy.get('.plan-value').eq(8).should("contain.text", " 27\u00a0032,10 ")
        //Проверка бюджет план освоения Октябрь
        cy.get('.plan-value').eq(9).should("contain.text", " 22\u00a0093,31 ")
        //Проверка бюджет план освоения Ноябрь
        cy.get('.plan-value').eq(10).should("contain.text", " 6\u00a0853,21 ")
        //Проверка бюджет план освоения Декабрь
        cy.get('.plan-value').eq(11).should("contain.text", " 7\u00a0138,00 ")
        //Проверка бюджет план освоения итого за 12 месяцев
        cy.get('.badge-able').eq(0).should("contain.text", "144\u00a0124,94")
    });
});