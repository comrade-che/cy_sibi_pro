///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import Data from '../fixtures/Metro_data.json';



describe('TC C131845. Project level year creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do year creating", () => {
        //Переход к уровню "Год"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_1).as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t4').wait(500).click();
        //Открытие диалогового окна "Создание - Год"
        cy.get('app-create-project-button .link-t4').click();
        cy.wait(500);
        //Ввод наименования проекта
        cy.get('[formcontrolname="name"] input')
        .type(Data.nameLvL_2);
        //Ввод описания проекта
        cy.get('[formcontrolname="description"] textarea')
        .type(Data.descrLvL_2);
        //Сохранение введенных значений, открытие диалогового окна "Добавьте комментарий или прикрепите документ"
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Приминение внесенных изменений. Создание уровня проекта
        cy.get('.button-t1').eq(1).wait(500).click();
        cy.wait(500);
    });
    
    it("should do year field validation", () => {
        //Переход к уровню "Год"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_1).as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t4').wait(500).click();
        //Открытие боковой информационной панели созданного уровня проекта
        cy.get('.h2').contains(Data.nameLvL_2).wait(500).click();
        cy.wait(500);
        //Открытие меню редактирования в боковой информационной панели
        cy.get('.menu span.mdi').click();
        //Открытие диалогового окна редактирования созданного уровня проекта
        cy.get('.menu-items li').contains('Редактировать').click();
        //Проверка отображения наименования уровня проекта
        cy.get('[formcontrolname="name"] input')
        .should('have.value', Data.nameLvL_2);
        //Проверка отображения описания уровня проекта
        cy.get('[formcontrolname="description"] textarea')
        .should('have.value', Data.descrLvL_2);
        //Закрытие окна редактирования проверяемого уровня проекта
        cy.get('.cdk-drag .close-btn').click();
    });
});