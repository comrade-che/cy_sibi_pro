///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import Data from '../fixtures/Metro_data.json';

describe('TC C131864. Project level society group creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do society group creating", () => {
        //Переход к уровню "Год"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_1).as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t4').wait(500).click();
        //Переход к уровню "Бизнес Блок"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_2).as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t4').wait(500).click();
        //Переход к уровню "Общество группы"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_3).as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t4').wait(500).click();
        //Открытие диалогового окна "Создание - Общество группы"
        cy.get('app-create-project-button .link-t4').click();
        cy.wait(500);
        //Выбор наименования
        cy.get('[formcontrolname="orgCode"]').click();
        cy.get('.ng-option-label').contains('.ng-option-label', Data.nameLvL_4).click();
        //Ввод номера проверки
        cy.get('[formcontrolname="auditNumber"] input').type(Data.numprojLvL_4);
        //Ввод даты начала проверки
        cy.get('[formcontrolname="activeFrom"] input').type(Data.dateFromLvL_4);
        //Ввод даты начала проверки
        cy.get('[formcontrolname="activeTo"] input').type(Data.dateToLvL_4);
        //Открытие селектора выбора статуса проверки
        cy.get('[formcontrolname="status"] .ng-arrow-wrapper').click();
        //Выбор статуса проверки "Исполнение"
        cy.get('.ng-option-label').contains(Data.statusLvL_4).click();
        //Открытие селектора выбора руководителя проверки (куратора)
        cy.get('[formcontrolname="curatorUserId"] .ng-arrow-wrapper').click();
        //Выбор руководителя проверки (куратора) - Хамбиков Артур Зайтунович
        cy.get('.ng-option-label').contains(Data.curatorLvL_4).click();
        //Ввод значения количества СИ в ОГ
        cy.get('[formcontrolname="measurementsToolsCount"] input').type(Data.measOGLvL_4);
        //Ввод значения количества СИ фактически
        cy.get('[formcontrolname="measurementsToolsFactCount"] input').type(Data.measActLvL_4);
        //Открытие селектора выбора участников проверки
        cy.get('[formcontrolname="participantsIds"] [addtagtext="Добавить"]').click();
        //Выбор первого участника проверки
        cy.get('.ng-option-label').contains(Data.RevPartic1LvL_4).click();
        //Открытие селектора выбора участников проверки
        cy.get('[formcontrolname="participantsIds"] [addtagtext="Добавить"]').click();
        //Выбор второго участника проверки
        cy.get('.ng-option-label').contains(Data.RevPartic2LvL_4).click();
        //Открытие селектора выбора участников проверки
        cy.get('[formcontrolname="participantsIds"] [addtagtext="Добавить"]').click();
        //Выбор третьего участника проверки
        cy.get('.ng-option-label').contains(Data.RevPartic3LvL_4).click();
        //Ввод описания проекта
        cy.get('[formcontrolname="description"] textarea') .type(Data.descrLvL_4);
        //Сохранение введенных значений, открытие диалогового окна "Добавьте комментарий или прикрепите документ"
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Приминение внесенных изменений. Создание уровня проекта
        cy.get('.button-t1').eq(1).wait(500).click();
        cy.wait(500);
    });
    
    it("should do society group field validation", () => {
        //Переход к уровню "Год"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_1).as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t4').wait(500).click();
        //Переход к уровню "Бизнес Блок"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_2).as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').wait(500).click();
        //Переход к уровню "Общество группы"
        cy.get('.item-panel').contains('.item-panel', Data.nameLvL_3).as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').wait(500).click();
        //Открытие боковой информационной панели созданного уровня проекта
        cy.get('.h2').contains(Data.nameLvL_4).wait(500).click();
        cy.wait(500);
        //Открытие меню редактирования в боковой информационной панели
        cy.get('.menu span.mdi').click();
        //Открытие диалогового окна редактирования созданного уровня проекта
        cy.get('.menu-items li').contains('Редактировать').click();
        //Проверка отображения наименования уровня проекта
        cy.get('[formcontrolname="orgCode"] .ng-value-label')
        .should('contain.text', Data.nameLvL_4);
        //Проверка отображения номера проверки
        cy.get('[formcontrolname="auditNumber"] input')
        .should('have.value', Data.numprojLvL_4);
        //Проверка отображения даты начала проверки
        cy.get('[formcontrolname="activeFrom"] input')
        .should('have.value', Data.dateFromCheckLvL_4);
        //Проверка отображения даты окончания проверки
        cy.get('[formcontrolname="activeTo"] input')
        .should('have.value', Data.dateToCheckLvL_4);
        //Проверка отображения статуса проверки
        cy.get('[formcontrolname="status"] .ng-value-label')
        .should('contain.text', Data.statusLvL_4);
        //Проверка отображения руководителя (куратора) проверки
        cy.get('[formcontrolname="curatorUserId"] .ng-value-label')
        .should('contain.text', Data.curatorLvL_4);
        //Проверка отображения значения "Количество СИ в ОГ"
        cy.get('[formcontrolname="measurementsToolsCount"] input')
        .should('have.value', Data.measOGLvL_4);
        //Проверка отображения значения "Количество СИ фактически"
        cy.get('[formcontrolname="measurementsToolsFactCount"] input')
        .should('have.value', Data.measActLvL_4);
        //Проверка отображения 1 участника проверки
        cy.get('[formcontrolname="participantsIds"] .ng-value-label').eq(0)
        .should('contain.text', Data.RevPartic1LvL_4);
        //Проверка отображения 2 участника проверки
        cy.get('[formcontrolname="participantsIds"] .ng-value-label').eq(1)
        .should('contain.text', Data.RevPartic2LvL_4);
        //Проверка отображения 3 участника проверки
        cy.get('[formcontrolname="participantsIds"] .ng-value-label').eq(2)
        .should('contain.text', Data.RevPartic3LvL_4);
        //Проверка отображения описания уровня проекта
        cy.get('[formcontrolname="description"] textarea')
        .should('have.value', Data.descrLvL_4);
        //Закрытие окна редактирования проверяемого уровня проекта
        cy.get('.cdk-drag .close-btn').click();
    });
});