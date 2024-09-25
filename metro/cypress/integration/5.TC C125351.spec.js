///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import Data from '../fixtures/Metro_data.json';

describe('TC C125351. Project level Violation creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080)
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do Violation creating", () => {
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
        cy.get('.link-primary').contains('Нарушение').click();
        //Ввод наименования уровня проекта
        cy.get('app-input-text2[formcontrolname="name"] input').type(Data.nameLvL_51);
        //Открытие меню выбора направления проверки
        cy.get('app-ctrl-select[formcontrolname="auditDirectionId"] .ng-arrow-wrapper').click();
        //Выбор направления проверки "Метрологический надзор"
        cy.get('.ng-option-label').contains(Data.auditDirLvL_51).click();
        //Ввод объекта проверки
        cy.get('[formcontrolname="auditObject"] input').type(Data.auditObjLvL_51);
        //Ввод номера пункта справки
        cy.get('[formcontrolname="notePointNumber"] input').type(Data.pointNumLvL_51);
        //Открытие меню выбора "Нарушение выявил"
        cy.get('[formcontrolname="curatorUserId"] .ng-arrow-wrapper').click();
        //Выбор выявившего нарушение
        cy.get('.ng-option-label').contains(Data.curatorLvL_51).click();
        //Ввод нормативного документа
        cy.get('[formcontrolname="normativeDocument"] textarea')
        .type(Data.normDocLvL_51);
        //Открытие меню выбора "Категории нарушения"
        cy.get('[formcontrolname="categoryId"] .ng-arrow-wrapper').click();
        //Выбор категории нарушения
        cy.get('.ng-option-label').contains(Data.categoryLvL_51).click();
        cy.wait(500);
        //Открытие меню выбора "Подкатегории нарушения"
        cy.get('[formcontrolname="subCategoryId"] .ng-arrow-wrapper').click();
        //Выбор подкатегории нарушения
        cy.get('.ng-option-label').contains(Data.subCategoryLvL_51).scrollIntoView();
        cy.get('.ng-option-label').contains(Data.subCategoryLvL_51).click({force: true});
        //Ввод описания уровня проекта
        cy.get('[formcontrolname="description"] textarea')
        .type(Data.descrLvL_51);
        //Сохранение введенных значений, открытие диалогового окна "Добавьте комментарий или прикрепите документ"
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Приминение внесенных изменений. Создание уровня проекта
        cy.get('.button-t1').eq(1).wait(500).click();
        cy.wait(500);
    });
    
    it("should do Violation field validation", () => {
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
        cy.get('.h2').contains(Data.nameLvL_51).wait(500).click();
        cy.wait(500);
        //Открытие меню редактирования в боковой информационной панели
        cy.get('.menu span.mdi').click();
        //Открытие диалогового окна редактирования созданного уровня проекта
        cy.get('.menu-items li').contains('Редактировать').click();
        //Проверка отображения наименования уровня проекта
        cy.get('[formcontrolname="name"] input')
        .should("have.value", Data.nameLvL_51);
        //Проверка направления проверки "Метрологический надзор"
        cy.get('[formcontrolname="auditDirectionId"] .ng-value-label')
        .should("contain.text", Data.auditDirLvL_51);
        //Проверка отображения объекта проверки
        cy.get('[formcontrolname="auditObject"] input')
        .should("have.value", Data.auditObjLvL_51);
        //Проверка отображения номера пункта справки
        cy.get('[formcontrolname="notePointNumber"] input')
        .should("have.value", Data.pointNumLvL_51);
        //Проверка отображения значения в поле "Нарушение выявил"
        cy.get('[formcontrolname="curatorUserId"] .ng-value-label')
        .should("contain.text", Data.curatorLvL_51);
        //Проверка отображения нормативного документа
        cy.get('[formcontrolname="normativeDocument"] textarea')
        .should("have.value", Data.normDocLvL_51);
        //Проверка отображения "Категории нарушения"
        cy.get('[formcontrolname="categoryId"] .ng-value-label')
        .should("contain.text", Data.categoryLvL_51);
        //Проверка отображения "Подкатегории нарушения"
        cy.get('[formcontrolname="subCategoryId"] .ng-value-label')
        .should("contain.text", Data.subCategoryLvL_51);
        //Проверка отображения описания уровня проекта
        cy.get('[formcontrolname="description"] textarea')
        .should("have.value", Data.descrLvL_51);
        //Закрытие окна редактирования проверяемого уровня проекта
        cy.get('.cdk-drag .close-btn').click();
    });
});