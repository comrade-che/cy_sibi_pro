///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import Data from '../fixtures/Cipa_data.json';

describe('TC C173577 entering statuses. create and display activities status at the end of the month', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("shoud do create and display activities status at the end of the month on page entering statuses", () => {
        cy.wait(500);
        //Переход на страницу "Ввод статусов"
        cy.get('[routerlink="/projects/statuses"]').click();
        cy.wait(1000);
        //Открытие меню выбора "Программы"
        cy.get('[placeholder="Программа"] .ng-arrow-wrapper').click();
        //Скролл к тестовой "Программе"
        cy.get('[placeholder="Программа"] .ng-option-label')
        .contains("Целевая программа Cypress Автотест").scrollIntoView();
        //Выбор тестовой программы
        cy.get('[placeholder="Программа"] .ng-option-label')
        .contains("Целевая программа Cypress Автотест").click();
        cy.wait(500);
        //Ввод значения в ячейку столбца "Статус на конец месяца" для этапа "3. Выбор подрядчиков/поставщиков"
        cy.get('.edit-event-status .smaller').eq(3)
        .type(Data.EventEndMonth_1);
        //Клик на значение "Низкий" ячеки в колонке "Риски" для этапа "3. Выбор подрядчиков/поставщиков"
        cy.get('.risk-degree-low').click();
        //Переход на вкладку "Мероприятия" выбранного уровня тестовго проекта "3. Выбор подрядчиков/поставщиков"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения типа мероприятия "Статус на конец месяца"
        cy.get('.info-block').contains('Статус на конец месяца').should('be.visible')
        .should("contain.text", 'Статус на конец месяца');
        //Проверка отображения введенного описания мероприятия "Статус на конец месяца"
        cy.get('app-event-item div').eq(4).should('be.visible')
        .should("contain.text", " Основное оборудование, комплектующие для стро... ");
        //Закрытие БИП уровня проекта
        cy.get('app-sidebar-detail2 .close-btn').eq(1).click();
        //Проверка отображения введенного значения в ячейке столбца "Статус на конец месяца" для этапа "3. Выбор подрядчиков/поставщиков"
        cy.get('.edit-event-status .smaller').eq(3).should('be.visible')
        .should("have.value", Data.EventEndMonth_1);
    });
});