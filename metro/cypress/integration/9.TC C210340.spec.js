///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import Data from '../fixtures/Metro_data.json';

describe('TC C210340. Project level Event for Measures to eliminate violations creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do Event for Measures to eliminate violations creating", () => {
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
        //Переход к уровню "Мероприятия по устранению нарушения"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_51).as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').wait(500).click();
        //Открытие боковой информационной панели созданного уровня проекта
        cy.get('.h2').contains(Data.pointNumLvL_61+' '+Data.nameCheckLvL_61).wait(500).click();
        cy.wait(500);
        //Переход на вкладку "Мероприятия" в боковой информационной панели
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Открытие диалогового окна "Добавить Мероприятие"
        cy.get('app-project-events .add-btn').click();
        //Ввод даты мероприятия
        cy.get('[formcontrolname="date"] input').type(Data.dateLvL_7);
        //Ввод наименования мероприятия
        cy.get('[formcontrolname="title"] input').type(Data.nameLvL_7);
        //Ввод описания мероприятия
        cy.get('[formcontrolname="information"] textarea').type(Data.descrLvL_7);
        //Сохранение введенных значений, создание мероприятия
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
    });
    
    it("should do Event for Measures to eliminate violations validation", () => {
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
        //Переход к уровню "Мероприятия по устранению нарушения"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_51).as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').wait(500).click();
        //Открытие боковой информационной панели созданного уровня проекта
        cy.get('.h2').contains(Data.pointNumLvL_61+' '+Data.nameCheckLvL_61).wait(500).click();
        cy.wait(500);
        //Переход на вкладку "Мероприятия" в боковой информационной панели
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка что 1 мероприятие отображено в БИП уровня проекта
        cy.get('app-event-item').should('be.visible')
        .should('have.length', 1);
        //Проверка что мероприятие имеет наименование которое вводили при создании
        cy.get('app-event-item .info-block span')
        .should('contain.text', Data.nameLvL_7);
        //Открытие диалогового окна редактирования Мероприятия
        cy.get('[apptooltip="Редактировать"]').click();
        //Проверка оотображения даты мероприятия
        cy.get('[formcontrolname="date"] input')
        .should('have.value', Data.dateCheckLvL_7);
        //Проверка оотображения типа мероприятия (При создании установлен по-умолчанию, других значений не имеет)
        cy.get('[formcontrolname="type"] .ng-value-label')
        .should('contain.text', 'Текущий статус');
        //Ввод наименования мероприятия
        cy.get('[formcontrolname="title"] input')
        .should('have.value', Data.nameLvL_7);
        //Ввод описания мероприятия
        cy.get('[formcontrolname="information"] textarea')
        .should('have.value', Data.descrLvL_7);
        //Закрытие диалогового окна "Редактировать мероприятие"
        cy.get('.cdk-drag .close-btn').wait(500).click();
    });
});