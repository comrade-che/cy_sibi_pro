///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import Data from '../fixtures/Cipa_data.json';

describe('TC C173577 entering statuses. column search', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("shoud do correct column search on page entering statuses", () => {
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
        //Клик на кнопку открытия поля ввода для поиска по колонке "ОГ"
        cy.get('th').contains('ОГ').find('.search-btn').click();
        //Ввод в поле поиска по колонке "ОГ" значения "АО "Куйбышевский НПЗ""
        cy.get('.search-input-wrapper input').eq(0).type(Data.og_1).wait(1000);
        //Проверка отображения только 2 строк в таблице "Ввод статусов" после отбора по поисковому запросу в колонке "ОГ" по значению "АО "Куйбышевский НПЗ""
        cy.get('tbody tr').should('have.length', 2);
        //Проверка отображения наименования отфильтрованного ОГ в первой строке
        cy.get('td').contains(Data.og_1).eq(0).should('be.visible')
        .should('contain.text', Data.og_1);
        //Проверка отображения наименования  этапа объекта в отфильтрованного ОГ в первой строке
        cy.get('td').contains(Data.stg_3).should('be.visible')
        .should('contain.text', Data.stg_3);
        //Проверка отображения наименования отфильтрованного ОГ во второй строке
        cy.get('td').eq(15).should('be.visible')
        .should('contain.text', Data.og_1);
        //Проверка отображения наименования  этапа объекта в отфильтрованного ОГ во второй строке
        cy.get('td').contains(Data.stg_4).should('be.visible')
        .should('contain.text', Data.stg_4);
        //Проверка отсутствия отображения наименования ОГ "ООО "Сахалинские нефтегазовые технологии""
        cy.get('td').should('not.contain.text', Data.og_3);
        //Проверка отсутствия отображения наименования ОГ "АО "Самотлорнефтегаз""
        cy.get('td').should('not.contain.text', Data.og_2);
        //Закрытие и очистка поля ввода поиска по колонке "ОГ"
        cy.get('th').contains('ОГ').find('.search-btn').click();
        cy.wait(1000);
        //Проверка что поле поиска в колонке ОГ не отображается
        cy.get('.search-input-wrapper input').should('not.be.visible');
        //Клик на кнопку открытия поля ввода для поиска по колонке "Объект"
        cy.get('th').contains('Объект').find('.search-btn').click();
        //Ввод в поле поиска по колонке "Объект" значения "Оснащение РВС средствами измерения уровня и температуры. Модернизация АСУТП УПН Украинский"
        cy.get('.search-input-wrapper input').eq(1)
        .type('Оснащение РВС средствами измерения').wait(1000);
        //Проверка отображения только 1 строка в таблице "Ввод статусов" после отбора по поисковому запросу в колонке "Объект" по значению "Оснащение РВС средствами измерения уровня и температуры. Модернизация АСУТП УПН Украинский"
        cy.get('tbody tr').should('have.length', 1);
        //Проверка отображения наименования ОГ по отфильтрованному объекту
        cy.get('td').contains(Data.og_2).eq(0).should('be.visible')
        .should('contain.text', Data.og_2);
        //Проверка отображения наименования объекта по отфильтрованному объекту
        cy.get('td').contains(Data.obj_6)
        .should('be.visible').should('contain.text', Data.obj_6);
        //Проверка отображения наименования этапа по отфильтрованному объекту
        cy.get('td').contains(Data.stg_6)
        .should('be.visible').should('contain.text', Data.stg_6);
        //Проверка отсутствия отображения других объектов
        cy.get('td')
        .should('not.contain.text', Data.obj_e);
        //Проверка отсутствия отображения других объектов
        cy.get('td')
        .should('not.contain.text', Data.obj_4);
        //Проверка отсутствия отображения других объектов
        cy.get('td')
        .should('not.contain.text', Data.obj_5);
        //Проверка отсутствия отображения других объектов
        cy.get('td')
        .should('not.contain.text', Data.obj_1);
        //Проверка отсутствия отображения других объектов
        cy.get('td')
        .should('not.contain.text', Data.obj_2);
        //Закрытие и очистка поля ввода поиска по колонке "ОГ"
        cy.get('th').contains('Объект').find('.search-btn').click();
        //Проверка отображения всех 6 строка в таблице "Ввод статусов"
        cy.get('tbody tr').should('have.length', 6);
    });
});