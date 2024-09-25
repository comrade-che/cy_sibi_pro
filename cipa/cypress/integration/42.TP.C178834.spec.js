///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import Data from '../fixtures/Cipa_data.json';

describe('TC C178834 entering statuses. return to the editing of the previous period', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("shoud do return to the editing of the previous period", () => {
        cy.wait(500);
        //Переход на страницу "Ввод статусов"
        cy.get('[routerlink="/projects/statuses"]').click();
        cy.wait(1000);
        //Открытие меню выбора "Программы"
        cy.get('[placeholder="Программа"] .ng-arrow-wrapper').click();
        //Скролл к тестовой "Программе"
        cy.get('[placeholder="Программа"] .ng-option-label')
        .contains('Целевая программа Cypress Автотест').scrollIntoView();
        //Выбор тестовой программы
        cy.get('[placeholder="Программа"] .ng-option-label')
        .contains('Целевая программа Cypress Автотест').click();
        cy.wait(500);
        //Открытие меню выбора "Год"
        cy.get('[placeholder="Год"] .ng-arrow-wrapper').click();
        //Выбор тестового года
        cy.get('[placeholder="Год"] .ng-option-label')
        .contains('2023').click();
        cy.wait(500);
        //Открытие меню выбора Бизнес Блока
        cy.get('[placeholder="Бизнес-блок"] .ng-arrow-wrapper').click();
        //Выбор тестового Бизнес Блока
        cy.get('[placeholder="Бизнес-блок"] .ng-option-label')
        .contains('Разведка и добыча').click();
        cy.wait(500);
        //Клик на значение "Исполнение" ячеки в колонке "Статус" для этапа "МТР. Заключение договоров на поставку"
        cy.get('.status').eq(0).click();
        //Переход на вкладку "Мероприятия" выбранного уровня тестовго проекта "МТР. Заключение договоров на поставку"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка, что отображено 3 элемента мероприятий "Статус на конец месяца"
        cy.get('app-event-item').should('have.length', 3);
        //Проверка отображения типа мероприятия "Статус на конец месяца" первого мероприятия
        cy.get('app-event-item').eq(0).find('.info-block').contains('Статус на конец месяца')
        .should('be.visible').should("contain.text", 'Статус на конец месяца');
        //Проверка отображения введенного описания мероприятия "Статус на конец месяца" первого мероприятия
        cy.get('app-event-item').eq(0).find('div').contains('Основное оборудование, комплектующие для стро...')
        .should('be.visible').should("contain.text", 'Основное оборудование, комплектующие для стро...');
        //Проверка отображения типа мероприятия "Статус на конец месяца" второго мероприятия
        cy.get('app-event-item').eq(1).find('.info-block').contains('Статус на конец месяца')
        .should('be.visible').should("contain.text", 'Статус на конец месяца');
        //Проверка отображения введенного описания мероприятия "Статус на конец месяца" первого мероприятия
        cy.get('app-event-item').eq(1).find('div').contains('Основное оборудование, комплектующие для стро...')
        .should('be.visible').should("contain.text", 'Основное оборудование, комплектующие для стро...');
        //Проверка отображения типа мероприятия "Статус на конец месяца" третьего мероприятия
        cy.get('app-event-item').eq(2).find('.info-block').contains('Статус на конец месяца')
        .should('be.visible').should("contain.text", 'Статус на конец месяца');
        //Проверка отображения введенного описания мероприятия "Статус на конец месяца" первого мероприятия
        cy.get('app-event-item').eq(2).find('div').contains('Основное оборудование, комплектующие для стро...')
        .should('be.visible').should("contain.text", 'Основное оборудование, комплектующие для стро...');
        //Переход на страницу Упарвления
        cy.get('.new-container .link-t4').click();
        //Возврат предыдущего периода периода
        cy.get('.buttons-line .link-t4').click()
        cy.wait(500)
        //Возврат предыдущего периода периода
        cy.get('.buttons-line .link-t4').click()
        cy.wait(500)
        //Возврат к таблице ввод статусов
        cy.get('.buttons-line .back-button').click()
        cy.wait(500)
        .wait(1000)
        cy.wait(500);
        //Переход на страницу "Ввод статусов"
        cy.get('[routerlink="/projects/statuses"]').click();
        cy.wait(1000);
        //Открытие меню выбора "Программы"
        cy.get('[placeholder="Программа"] .ng-arrow-wrapper').click();
        //Скролл к тестовой "Программе"
        cy.get('[placeholder="Программа"] .ng-option-label')
        .contains('Целевая программа Cypress Автотест').scrollIntoView();
        //Выбор тестовой программы
        cy.get('[placeholder="Программа"] .ng-option-label')
        .contains('Целевая программа Cypress Автотест').click();
        cy.wait(500);
        //Открытие меню выбора "Год"
        cy.get('[placeholder="Год"] .ng-arrow-wrapper').click();
        //Выбор тестового года
        cy.get('[placeholder="Год"] .ng-option-label')
        .contains('2023').click();
        cy.wait(500);
        //Открытие меню выбора Бизнес Блока
        cy.get('[placeholder="Бизнес-блок"] .ng-arrow-wrapper').click();
        //Выбор тестового Бизнес Блока
        cy.get('[placeholder="Бизнес-блок"] .ng-option-label')
        .contains('Разведка и добыча').click();
        cy.wait(500);
        //Ввод значения в ячейку столбца "Статус на конец месяца" для этапа "МТР. Заключение договоров на поставку"
        cy.get('app-edit-event-status textarea').eq(0).clear()
        .type(Data.EventEndMonth_2);
        //Клик на значение "Нет рисков" ячеки в колонке "Риски" для этапа "МТР. Заключение договоров на поставку"
        cy.get('.risk-link').eq(0).click();
        //Переход на вкладку "Мероприятия" выбранного уровня тестовго проекта "МТР. Заключение договоров на поставку"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка, что отображено 3 элемента мероприятий "Статус на конец месяца"
        cy.get('app-event-item').should('have.length', 3);
        //Проверка отображения типа мероприятия "Статус на конец месяца" первого мероприятия
        cy.get('app-event-item').eq(0).find('.info-block').contains('Статус на конец месяца')
        .should('be.visible').should("contain.text", 'Статус на конец месяца');
        //Проверка отображения введенного описания мероприятия "Статус на конец месяца" первого мероприятия
        cy.get('app-event-item').eq(0).find('div').contains('Основное оборудование, комплектующие для стро...')
        .should('be.visible').should("contain.text", 'Основное оборудование, комплектующие для стро...');
        //Проверка отображения типа мероприятия "Статус на конец месяца" второго мероприятия */
        cy.get('app-event-item').eq(1).find('.info-block').contains('Статус на конец месяца')
        .should('be.visible').should("contain.text", 'Статус на конец месяца');
        //Проверка отображения введенного описания мероприятия "Статус на конец месяца" первого мероприятия
        cy.get('app-event-item').eq(1).find('div').contains('Основное оборудование, комплектующие для стро...')
        .should('be.visible').should("contain.text", 'Основное оборудование, комплектующие для стро...');
        //Проверка отображения типа мероприятия "Статус на конец месяца" третьего мероприятия
        cy.get('app-event-item').eq(2).find('.info-block').contains('Статус на конец месяца')
        .should('be.visible').should("contain.text", 'Статус на конец месяца');
        //Проверка отображения введенного описания мероприятия "Статус на конец месяца" первого мероприятия
        cy.get('app-event-item').eq(2).find('div').contains('Проверочный текст для ввода в поле \"Статус на...')
        .should('be.visible').should("contain.text", 'Проверочный текст для ввода в поле \"Статус на...');
    });
});
