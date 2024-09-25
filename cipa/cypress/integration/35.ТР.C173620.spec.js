///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C173620 entering statuses. main elements functionality check', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do check functionality main elements on page entering statuses", () => {
        cy.wait(500);
        //Переход на страницу "Ввод статусов"
        cy.get('[routerlink="/projects/statuses"]').click();
        cy.wait(1000);
        //Проверка отсутствия отображения колонки "Программа"
        cy.get('table th').contains("Программа")
        .should('not.be.visible');
        //Проверка отсутствия отображения колонки "Год"
        cy.get('table th').contains("Год")
        .should('not.be.visible');
        //Проверка отсутствия отображения колонки "Бизнес Блок"
        cy.get('table th').contains("Бизнес Блок")
        .should('not.be.visible');
        //Проверка отсутствия колонки "Общество группы"
        cy.get('table th').contains("ОГ")
        .should('be.visible');
        //Проверка отсутствия колонки "Объект"
        cy.get('table th').contains("Объект")
        .should('be.visible');
        //Проверка отображения колонки "Этап"
        cy.get('table th').contains("Этап")
        .should('be.visible');
        //Проверка отображения колонки "Прогнозная дата"
        cy.get('table th').contains("Прогнозная дата")
        .should('be.visible');
        //Проверка отсутствия отображения колонки "Дата начала"
        cy.get('table th').contains("Дата начала")
        .should('not.be.visible');
        //Проверка отсутствия отображения колонки "Дата завершения"
        cy.get('table th').contains("Дата завершения")
        .should('not.be.visible');
        //Проверка отображения колонки "Статус"
        cy.get('table th').contains("Статус")
        .should('be.visible');
        //Проверка отображения колонки "Статус на конец месяца"
        cy.get('table th').contains("Статус на конец месяца")
        .should('be.visible');
        //Проверка отображения колонки "Риск"
        cy.get('table th').contains('th', "Риск")
        .should('be.visible');
        //Открытие меню выбора "Программы"
        cy.get('[placeholder="Программа"] .ng-arrow-wrapper').click();
        //Скролл к тестовой "Программе"
        cy.get('[placeholder="Программа"] .ng-option-label').contains("Целевая программа Cypress Автотест")
        .scrollIntoView();
        //Выбор тестовой программы
        cy.get('[placeholder="Программа"] .ng-option-label').contains("Целевая программа Cypress Автотест")
        .click();
        cy.wait(500);
        //Клик на наименование статуса этапа первой строки таблицы "9.2. Поверка измерительной системы"
        cy.get('tr .status').eq(0).click();
        //Проверка отображения открывшейся боковой информационной панели выбранного этапа "9.2. Поверка измерительной системы"
        cy.get('app-sidebar-stage').should('be.visible');
        cy.get('.link-project-name .ng-star-inserted').eq(0)
        .should("contain.text", "9.2. Поверка измерительной системы ");
        //Клик на наименование риска этапа второй строки таблицы "8. Пусконаладочные работы и опытно промышленная эксплуатация"
        cy.get('tr .risk-degree-high').click();
        //Проверка отображения открывшейся боковой информационной панели выбранного этапа "8. Пусконаладочные работы и опытно промышленная эксплуатация"
        cy.get('app-sidebar-stage').should('be.visible');
        cy.get('.link-project-name .ng-star-inserted').eq(0)
        .should("contain.text", "8. Пусконаладочные работы и опытно промышленная эк... ");
        //Проверка отображения вкладки риски
        cy.get('[apptooltip="Риски"]').should('have.attr', 'class')
        .and('equal', "tab-button selected ng-star-inserted");
        cy.get('app-project-risks').should('be.visible');
        //Проверка соответствия риска и его отображения в колонке таблицы "Риск"
        cy.get('app-risk-item2 .status-value').as('status');
        cy.get('@status').should("contain.text", 'Активный');
        cy.get('.risks-degree').should('have.attr', 'class')
        .and('equal', "risks-degree mdi mdi-alert risk-degree-high");
        cy.get('tr .risk-degree-high')
        .should("contain.text", " Высокий ")
        .should('have.css', 'color').and('equal', 'rgb(255, 131, 115)');
        //Проверка содержания описания риска "Статус на конец месяца" в колонке "Статус на конец месяца" этапа второй строки таблицы "8. Пусконаладочные работы и опытно промышленная эксплуатация"
        cy.get('app-edit-event-status textarea').eq(1).should('be.visible')
        .should('have.value', "Оператор поставки ЕОС ИТ: пп. 3, 11, 12 ЗРГ подписано. Направлено в БГМ 24.08.2021. Выполнено");
        //Клик на наименование статуса этапа второй строки таблицы "8. Пусконаладочные работы и опытно промышленная эксплуатация"
        cy.get('.status').eq(1).click();
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка содержания контента наименования "Мероприятия статус на конец месяца" и его отображения на вкладке "Мероприятия" в боковой информационной панеле
        cy.get('app-event-item').eq(1).find('.ng-star-inserted').should('be.visible')
        .should('contain.text', " Оператор поставки ЕОС ИТ: пп. 3, 11, 12 ЗРГ п... ");
        //Закрытие Боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1).click();
        //Проверка отсутствия содержания описания риска "Статус на конец месяца" в колонке "Статус на конец месяца" этапа третьего строки таблицы "10.Ввод в промышленную эксплуатацию"
        cy.get('app-edit-event-status textarea').eq(2)
        .should('be.visible').should('have.value', "");
        //Клик на наименование статуса этапа третьего строки таблицы "10.Ввод в промышленную эксплуатацию"
        cy.get('.status').eq(2).click();
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения значения "Нет инофрмации" об отсутствии мероприятий на вкладке "Мероприятия" в боковой информационной панеле
        cy.get('.no-items').should('be.visible')
        .should('contain.text', "Нет информации");
        //Закрытие Боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1).click();
        //Открытие меню отображения колонок таблицы
        cy.get('app-columns-selector span').click();
        //Проверка отображения и состояния Чекбокса "Программа"
        cy.get('app-checkbox2').contains('Программа').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        ///Проверка отображения и состояния Чекбокса "Год"
        cy.get('app-checkbox2').contains('Год').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        //Проверка отображения и состояния Чекбокса "Бизнес Блок"
        cy.get('app-checkbox2').contains('Бизнес Блок').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        //Проверка отображения и состояния Чекбокса "ОГ"
        cy.get('app-checkbox2').contains('ОГ').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Объект"
        cy.get('app-checkbox2').contains('Объект').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Этап"
        cy.get('app-checkbox2').contains('Этап').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Прогнозная дата"
        cy.get('app-checkbox2').contains('Прогнозная дата').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Дата начала"
        cy.get('app-checkbox2').contains('Дата начала').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        //Проверка отображения и состояния Чекбокса "Дата завершения"
        cy.get('app-checkbox2').contains('Дата завершения').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        //Проверка отображения и состояния Чекбокса "Статус"
        cy.get('app-checkbox2').contains('Статус').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Статус на конец месяца"
        cy.get('app-checkbox2').contains('Статус на конец месяца').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Риск"
        cy.get('app-checkbox2').contains('Риск').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Закрытие меню отображения колонок таблицы
        cy.get('.close-btn').click();
    });
});