///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C133172 year creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do year creating", () => {
        cy.wait(500).reload();
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', 'Целевая программа Cypress Автотест').as('LvL-1');
        cy.get('@LvL-1').find('.link-t3').click();
        //Открытие диалогового окна "Создание - Год"
        cy.get('.link-t4').click();
        //Ввод наименования
        cy.get('[formcontrolname="name"]').type('2024');
        //Ввод описания
        cy.get('[formcontrolname="description"]').type('Описание год Cypress Автотест');
        //Выбор управления
        cy.get('[formcontrolname="responsibleDepartmentDictId"]').click();
        cy.contains('Управление Контроля качества').click();
        //Ввод номера проекта
        cy.get('[formcontrolname="projectNumber"]').type('280885');
        //Ввод даты начала
        cy.get('[formcontrolname="activeFrom"]').type('01.01.2024');
        //Ввод даты окончания
        cy.get('[formcontrolname="activeTo"]').type('31.12.2024');
        //Ввод даты прогнозного завершения
        cy.get('[formcontrolname="completionDateForecast"]').type('18.09.2024');
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
          
    it("should do year field validation", () => {
        cy.wait(500).reload()
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', 'Целевая программа Cypress Автотест').as('LvL-1');
        cy.get('@LvL-1').find('.link-t3').click();
        //Выбор созданного проекта
        cy.get('.h2').contains("2024 ").wait(500).click();
        cy.wait(500);
        //Открытие созданного проекта на редактирование в боковой информационной панеле
        cy.get('.menu').click();
        cy.contains('Редактировать').click();
        cy.wait(500);
        //Проверка наименования проекта
        cy.get('[formcontrolname="name"] input') 
        .should("have.value", "2024");
        //Проверка описания проекта
        cy.get('[formcontrolname="description"] textarea') 
        .should("have.value", "Описание год Cypress Автотест");
        //Проверка управления
        cy.get('[formcontrolname="responsibleDepartmentDictId"]') 
        .should("contain.text", "Управление Контроля качества");
        //Проверка номера проекта
        cy.get('[formcontrolname="projectNumber"] input')
        .should("have.value", "280885");
        //Проверка даты начала
        cy.get('[formcontrolname="activeFrom"] input')
        .should("have.value", "01.01.2024");
        //Проверка даты окончания
        cy.get('[formcontrolname="activeTo"] input')
        .should("have.value", "31.12.2024");
        //Проверка даты прогнозного завершения
        cy.get('[formcontrolname="completionDateForecast"] input')
        .should("have.value", "18.09.2024");
        //Проверка куратора
        cy.get('[formcontrolname="curatorUserId"]')
        .should("contain.text", "Черненко Евгений Геннадиевич");
        //Проверка ответственного
        cy.get('[formcontrolname="responsible"] input') 
        .should("have.value", "Черненко Е.Г.");
        //Закрытие диалогового окна нажатие на кнопку "Отмена"
        cy.get('.button-t2').click();
    });
});