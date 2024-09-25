///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import Data from '../fixtures/Metro_data.json';

describe('TC C125354. Project level control measure creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do control measure creating", () => {
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
        //Переход к уровню "Нарушения/Контрольные мероприятия"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_52).as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').wait(500).click();
        //Открытие диалогового окна "Создание - Контрольное мероприятие"
        cy.get('app-create-project-button .link-t4').click();
        cy.wait(500);
        //Открытие селектора выбора руководителя проверки (куратора)
        cy.get('[formcontrolname="curatorUserId"] .ng-arrow-wrapper').click();
        //Выбор Ответственного исполнителя - Хамбиков Артур Зайтунович
        cy.get('.ng-option-label').contains(Data.curatorLvL_62).click();
        //Ввод даты начала проверки
        cy.get('[formcontrolname="activeFrom"] input').type(Data.dateFromLvL_62);
        //Ввод даты начала проверки
        cy.get('[formcontrolname="activeTo"] input').type(Data.dateToLvL_62);
        //Ввод наименования уровня проекта
        cy.get('[formcontrolname="name"] input')
        .type(Data.nameLvL_62);
        //Ввод описания проекта
        cy.get('[formcontrolname="description"] textarea').type(Data.descrLvL_62);
        //Сохранение введенных значений, открытие диалогового окна "Добавьте комментарий или прикрепите документ"
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Приминение внесенных изменений. Создание уровня проекта
        cy.get('.button-t1').eq(1).wait(500).click();
        cy.wait(500);
    });
    
    it("should do control measure validation", () => {
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
        //Переход к уровню "Нарушения/Контрольные мероприятия"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_52).as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').wait(500).click();
        //Открытие боковой информационной панели созданного уровня проекта
        cy.get('.h2').contains(Data.nameLvL_62).wait(500).click();
        cy.wait(500);
        //Открытие меню редактирования в боковой информационной панели
        cy.get('.menu span.mdi').click();
        //Открытие диалогового окна редактирования созданного уровня проекта
        cy.get('.menu-items li').contains('Редактировать').click();
        //Проверка отображения наименования уровня проекта
        cy.get('[formcontrolname="name"] input')
        .should('have.value', Data.nameLvL_62);
        //Проверка отображения даты начала мероприятия
        cy.get('[formcontrolname="activeFrom"] input')
        .should('have.value', Data.dateFromCheckLvL_62);
        //Проверка отображения даты завершения мероприятия
        cy.get('[formcontrolname="activeTo"] input')
        .should('have.value', Data.dateToCheckLvL_62);
        //Проверка отображения ответственного от ОГ
        cy.get('[formcontrolname="curatorUserId"] .ng-value-label')
        .should('contain.text', Data.curatorLvL_62);
        //Проверка отображения описания уровня проекта
        cy.get('[formcontrolname="description"] textarea')
        .should('have.value', Data.descrLvL_62);
        //Закрытие окна редактирования проверяемого уровня проекта
        cy.get('.cdk-drag .close-btn').click();
    });
});