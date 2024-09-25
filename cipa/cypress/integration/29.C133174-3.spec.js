///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C133174 business block creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do business block creating", () => {
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', "2023 ").as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').click();
        //Создание "ББ"
        cy.get('.link-t4').click();
        //Выбор наименования
        cy.get('[formcontrolname="orgCode"]').click();
        cy.get('.ng-option-label').contains('.ng-option-label', "Разведка и добыча").click();
        //Ввод описания
        cy.get('[formcontrolname="description"]')
        .type('Описание ББ Cypress Автотест');
        //Выбор управления
        cy.get('[formcontrolname="responsibleDepartmentDictId"]').click();
        cy.contains('Управление Контроля качества').click();
        //Ввод номера проекта
        cy.get('[formcontrolname="projectNumber"]').type('280885');
        //Ввод даты начала
        cy.get('[formcontrolname="activeFrom"]').type('01.01.2023');
        //Ввод даты окончания
        cy.get('[formcontrolname="activeTo"]').type('31.12.2023');
        //Ввод даты прогнозного завершения
        cy.get('[formcontrolname="completionDateForecast"]').type('18.09.2023');
        //Ввод ответственного
        cy.get('[formcontrolname="responsible"]').type('Черненко Е.Г.');
        //Выбор куратора
        cy.get('[formcontrolname="curatorUserId"]').click();
        cy.contains('Черненко Евгений Геннадиевич').click();
        //Сохранить
        cy.get('.button-t1').click();
        //Применить
        cy.get('.button-t1').eq(1).click();
    });
          
    it("should do business block field validation", () => {
        cy.wait(500).reload()
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', "2023 ").as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').click();
        cy.wait(500);
        //Выбор созданного проекта
        cy.get('.h2').contains('Разведка и добыча ').wait(500).click();
        cy.wait(500);
        //Открытие созданного проекта на редактирование в боковой информационной панеле
        cy.get('.menu').click();
        cy.contains('Редактировать').click();
        //Проверка наименования проекта
        cy.get('[formcontrolname="orgCode"]')
        .should("contain.text", "Разведка и добыча");
        //Проверка описания проекта
        cy.get('[formcontrolname="description"] textarea')
        .should("have.value", "Описание ББ Cypress Автотест");
        //Проверка управления
        cy.get('[formcontrolname="responsibleDepartmentDictId"]')
        .should("contain.text", "Управление Контроля качества");
        //Проверка номера проекта
        cy.get('[formcontrolname="projectNumber"] input') 
        .should("have.value", "280885");
        //Проверка даты начала
        cy.get('[formcontrolname="activeFrom"] input') 
        .should("have.value", "01.01.2023");
        //Проверка даты окончания
        cy.get('[formcontrolname="activeTo"] input') 
        .should("have.value", "31.12.2023");
        //Проверка даты прогнозного завершения
        cy.get('[formcontrolname="completionDateForecast"] input')
        .should("have.value", "18.09.2023");
        //Проверка куратора
        cy.get('[formcontrolname="curatorUserId"]') 
        .should("contain.text", "Черненко Евгений Геннадиевич");
        //Проверка ответственного
        cy.get('[formcontrolname="responsible"] input') 
        .should("have.value", "Черненко Е.Г.");
        //Закрытие диалогового окна нажатие на кнопку "Отмена"
        cy.get('.button-t2').eq(1).click();
    });
})