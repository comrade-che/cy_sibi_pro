///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import Data from '../fixtures/Metro_data.json';

describe('TC C131861. Project level business block creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "ЦП/Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do business block creating", () => {
        //Переход к уровню "Год"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_1).as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t4').wait(500).click();
        //Переход к уровню "Бизнес Блок"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_2).as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').wait(500).click();
        //Открытие диалогового окна "Создание - Бизнес Блок"
        cy.get('app-create-project-button .link-t4').click();
        cy.wait(500);
        //Выбор наименования
        cy.get('[formcontrolname="orgCode"] .ng-arrow-wrapper').click();
        cy.get('.ng-option-label').contains('.ng-option-label', Data.nameLvL_3).click();
        //Ввод описания проекта
        cy.get('[formcontrolname="description"] textarea')
        .type(Data.descrLvL_3);
        //Сохранение введенных значений, открытие диалогового окна "Добавьте комментарий или прикрепите документ"
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Приминение внесенных изменений. Создание уровня проекта
        cy.get('.button-t1').eq(1).wait(500).click();
        cy.wait(500);
    });
    
    it("should do business block field validation", () => {
        //Переход к уровню "Год"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_1).as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t4').wait(500).click();
        //Переход к уровню "Бизнес Блок"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_2).as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').wait(500).click();
        //Открытие боковой информационной панели созданного уровня проекта
        cy.get('.h2').contains(Data.nameLvL_3).wait(500).click();
        cy.wait(500);
        //Открытие меню редактирования в боковой информационной панели
        cy.get('.menu span.mdi').click();
        //Открытие диалогового окна редактирования созданного уровня проекта
        cy.get('.menu-items li').contains('Редактировать').click();
        //Проверка отображения наименования уровня проекта
        cy.get('[formcontrolname="orgCode"] .ng-value-label')
        .should("contain.text", Data.nameLvL_3);
        //Проверка отображения описания уровня проекта
        cy.get('[formcontrolname="description"] textarea')
        .should('have.value', Data.descrLvL_3);
        //Закрытие окна редактирования проверяемого уровня проекта
        cy.get('.cdk-drag .close-btn').click();
    });
});