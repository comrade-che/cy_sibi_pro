///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import Data from '../fixtures/Metro_data.json';

describe('TC C125351. Project level control measures creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do control measures creating", () => {
        //Переход к уровню "Год"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_1).as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t4').wait(500).click();
        //Переход к уровню "Бизнес Блок"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_2).as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').wait(500).click();
        //Переход к уровню "Общество группы"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_3).as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').wait(500).click();
        //Переход к уровню "Нарушения/Контрольные мероприятия"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_4).as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').wait(500).click();
        //Открытие меню выбора создаваемого типа уровня 5
        cy.get('.dropdown .menu-arrow').click();
        cy.wait(500);
        //Открытие диалогового окна создания уровня "Нарушение"
        cy.get('.link-primary').contains('Контрольные мероприятия').click();
        //Включение чек-бокса "Исключить из общего расчета процента выполнения"
        cy.get('[formcontrolname="isExcludedFromCalc"] .checkbox-label').click();
        //Ввод наименования уровня проекта
        cy.get('app-input-text2[formcontrolname="name"] input').type(Data.nameLvL_52);
        //Открытие меню выбора статуса уровня проекта
        cy.get('[formcontrolname="status"] .ng-arrow-wrapper').click()
        //Выбор статуса уровня проекта "Исполнение"
        cy.get('.ng-option-label').contains('Исполнение').click()
        //Открытие меню выбора "Куратора"
        cy.get('[formcontrolname="curatorUserId"] .ng-arrow-wrapper').click();
        //Выбор Куратора
        cy.get('.ng-option-label').contains(Data.curatorLvL_52).click();
        //Ввод описания уровня проекта
        cy.get('[formcontrolname="description"] textarea')
        .type(Data.descrLvL_52);
        //Сохранение введенных значений, открытие диалогового окна "Добавьте комментарий или прикрепите документ"
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Приминение внесенных изменений. Создание уровня проекта
        cy.get('.button-t1').eq(1).wait(500).click();
        cy.wait(500);
    });
    
    it("should do control measures validation", () => {
        //Переход к уровню "Год"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_1).as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t4').wait(500).click();
        //Переход к уровню "Бизнес Блок"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_2).as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').wait(500).click();
        //Переход к уровню "Общество группы"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_3).as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').wait(500).click();
        //Переход к уровню "Нарушения/Контрольные мероприятия"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_4).as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').wait(500).click();
        //Открытие боковой информационной панели созданного уровня проекта
        cy.get('.h2').contains(Data.nameLvL_52).wait(500).click();
        cy.wait(500);
        //Открытие меню редактирования в боковой информационной панели
        cy.get('.menu span.mdi').click();
        //Открытие диалогового окна редактирования созданного уровня проекта
        cy.get('.menu-items li').contains('Редактировать').click();
        //Проверка значения чек-бокса "Исключить из общего расчета процента выполнения"
        cy.get('[formcontrolname="isExcludedFromCalc"] [type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения наименования уровня проекта
        cy.get('[formcontrolname="name"] input')
        .should("have.value", Data.nameLvL_52);
        //Проверка отображения статуса проверки
        cy.get('[formcontrolname="status"] .ng-value-label')
        .should('contain.text', Data.statusLvL_52);
        //Проверка отображения значения в поле "Куратор"
        cy.get('[formcontrolname="curatorUserId"] .ng-value-label')
        .should("contain.text", Data.curatorLvL_52);
        //Проверка отображения описания уровня проекта
        cy.get('[formcontrolname="description"] textarea')
        .should("have.value", Data.descrLvL_52);
        //Закрытие окна редактирования проверяемого уровня проекта
        cy.get('.cdk-drag .close-btn').click();
    });
});