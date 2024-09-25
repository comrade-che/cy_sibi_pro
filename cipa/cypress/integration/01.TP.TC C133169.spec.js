///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C133169 direction creating and field validation', () => {    
    
    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Целевые программы" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do direction creating", () => {
        cy.wait(500)
        //Открытие меню выбора создаваемой программы
        cy.get('.menu-arrow').eq(1).click();
        //Выбор создаваемой программы
        cy.get('.link-primary').contains(" Целевая программа ").click();
        //Ввод наименования
        cy.get('[formcontrolname="name"]')
        .type('Целевая программа Cypress Автотест');
        //Ввод описания
        cy.get('[formcontrolname="description"]')
        .type('Описание целевая программа Cypress Автотест');
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
        cy.get('[formcontrolname="completionDateForecast"]')
        .wait(500).type('18.09.2023').wait(500);
        //Ввод ответственного
        cy.get('[formcontrolname="responsible"]').type('Черненко Е.Г.');
        //Выбор куратора
        cy.get('[formcontrolname="curatorUserId"]').click();
        cy.contains('Черненко Евгений Геннадиевич').click();
        //Открытие выпадающего списка выбора согласующего
        cy.get('[formcontrolname="coordinatingUserId"]').click();
        //Выбор согласующего Максимов Дмитрий Владимирович
        cy.get('.ng-option-label').contains("Максимов Дмитрий Владимирович").click();
        //Внесение информации в поле Должность согласуюшего
        cy.get('[formcontrolname="coordinatingUserPosition"]') 
        .type('Начальник Управления экспертизы перспективного развития метрологии и автоматизации');
        //Открытие выпадающего списка выбора утверждающего
        cy.get('[formcontrolname="approvingUserId"]').click();
        //Выбор утверждающего Елоза Жанна Ивановна
        cy.get('.ng-option-label').contains("Елоза Жанна Ивановна").click();
        //Внесение информации в поле Должность утверждающего
        cy.get('[formcontrolname="approvingUserPosition"]').type('Главный метролог');
        cy.wait(500);
        //Сохранить
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Применить
        cy.get('.button-t1').eq(1).wait(500).click();
        cy.wait(500);
    });
     
    it("should do direction field validation", () => {
        cy.reload();
        //Выбор созданного проекта
        cy.contains('Целевая программа Cypress Автотест').wait(500).click();
        cy.wait(500);
        //Открытие созданного проекта на редактирование в боковой информационной панеле
        cy.get('.menu').click();
        cy.contains('Редактировать').click();
        //Проверка наименования проекта
        cy.get('[formcontrolname="name"] input')
        .should("have.value", "Целевая программа Cypress Автотест");
        //Проверка описания проекта
        cy.get('[formcontrolname="description"] textarea')
        .should("have.value", "Описание целевая программа Cypress Автотест");
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
        //Проверка ФИО согласующего
        cy.get('[formcontrolname="coordinatingUserId"]') 
        .should("contain.text", "×Максимов Дмитрий Владимирович×");
        //Проверка должности согласующего
        cy.get('[formcontrolname="coordinatingUserPosition"] input')
        .should("have.value", "Начальник Управления экспертизы перспективного развития метрологии и автоматизации");
        //Проверка ФИО утверждающего
        cy.get('[formcontrolname="approvingUserId"]')
        .should("contain.text", "×Елоза Жанна Ивановна×");
        //Проверка должности утверждающего
        cy.get('[formcontrolname="approvingUserPosition"] input') 
        .should("have.value", "Главный метролог");
        //Закрытие диалогового окна нажатие на кнопку "Отмена"
        cy.get('.button-t2').click();
    });
});