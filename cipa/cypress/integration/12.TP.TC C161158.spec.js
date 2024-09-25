///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import { budgetsdevelopmentfactfactor } from "../support/pages/Budgets. Fact.js";

describe('TC C161158 Budgets. Financing. Plan creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do budgets financing plan creating", () => {
        cy.wait(500);
        //Переход к странице редактирования бюджетов
        budgetsdevelopmentfactfactor.budgetstransition("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ");
        //Переход к странице "Редактирование" Финансирование
        cy.get('.test-financing [apptooltip="Редактировать"]').click();
        //Ввод "Комментария"
        cy.get('[formcontrolname="comment"]')
        .type('Просто проверочный текст в поле "Комментарий" Освоение план');
        //Переход к заполнению помесячных значений плана финансирования
        cy.get('.button-t1').click();
        //Ввод значений "Январь"
        cy.get('[formcontrolname="planJan"]').type('15870,00');
        //Ввод значений "Февраль"
        cy.get('[formcontrolname="planFeb"]').type('11558,00');
        //Ввод значений "Март"
        cy.get('[formcontrolname="planMar"]').type('8709,00');
        //Ввод значений "Апрель"
        cy.get('[formcontrolname="planApr"]').type('10048,00');
        //Ввод значений "Май"
        cy.get('[formcontrolname="planMay"]').type('4759,00');
        //Ввод значений "Июнь"
        cy.get('[formcontrolname="planJun"]').type('22433,00');
        //Ввод значений "Июль"
        cy.get('[formcontrolname="planJul"]').type('5333,00');
        //Ввод значений "Август"
        cy.get('[formcontrolname="planAug"]').type('2791,00');
        //Ввод значений "Сентябрь"
        cy.get('[formcontrolname="planSep"]').type('25155,00');
        //Ввод значений "Октябрь"
        cy.get('[formcontrolname="planOct"]').type('13992,00');
        //Ввод значений "Ноябрь"
        cy.get('[formcontrolname="planNov"]').type('31302,00');
        //Ввод значений "Декабрь"
        cy.get('[formcontrolname="planDec"]').type('15026,00');
        cy.wait(500);
        //Применение введенных значений
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
    });
        
    it("should do budgets financing plan field validation", () => {
        cy.wait(500);
        //Переход к странице редактирования бюджетов
        budgetsdevelopmentfactfactor.budgetstransition("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ");
        cy.wait(500);
        //Проверка бюджет план финансирование Январь
        cy.get('.plan-value').eq(12).should("contain.text", " 15\u00a0870,00 ");
        //Проверка бюджет план финансирование Февраль
        cy.get('.plan-value').eq(13).should("contain.text", " 11\u00a0558,00 ");
        //Проверка бюджет план финансирование Март
        cy.get('.plan-value').eq(14).should("contain.text", " 8\u00a0709,00 ");
        //Проверка бюджет план финансирование Апрель
        cy.get('.plan-value').eq(15).should("contain.text", " 10\u00a0048,00 ");
        //Проверка бюджет план финансирование Май
        cy.get('.plan-value').eq(16).should("contain.text", " 4\u00a0759,00 ");
        //Проверка бюджет план финансирование Июнь
        cy.get('.plan-value').eq(17).should("contain.text", " 22\u00a0433,00 ");
        //Проверка бюджет план финансирование Июль
        cy.get('.plan-value').eq(18).should("contain.text", " 5\u00a0333,00 ");
        //Проверка бюджет план финансирование Август
        cy.get('.plan-value').eq(19).should("contain.text", " 2\u00a0791,00 ");
        //Проверка бюджет план финансирование Сентябрь
        cy.get('.plan-value').eq(20).should("contain.text", " 25\u00a0155,00 ");
        //Проверка бюджет план финансирование Октябрь
        cy.get('.plan-value').eq(21).should("contain.text", " 13\u00a0992,00 ");
        //Проверка бюджет план финансирование Ноябрь
        cy.get('.plan-value').eq(22).should("contain.text", " 31\u00a0302,00 ");
        //Проверка бюджет план финансирование Декабрь
        cy.get('.plan-value').eq(23).should("contain.text", " 15\u00a0026,00 ");
        cy.wait(500);
        //Проверка бюджет план финансирование итого за 12 месяцев
        cy.get('.badge-able').eq(1).should("contain.text", "166\u00a0976,00");
    });
});