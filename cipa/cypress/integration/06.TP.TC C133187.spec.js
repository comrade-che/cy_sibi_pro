///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C133187 execution of assignment creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do execution of assignment creating", () => {
        cy.wait(500)
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', "2023 ").as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('.item-panel').contains('.item-panel', "КНИПИ ").as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню Объект под реализацию, Исполнение поручений, Мероприятия, Справочно"
        cy.get('.item-panel').contains('.item-panel', 'АО \«ИГиРГИ\»').as('Lvl-4');
        cy.get('@Lvl-4').find('.link-t4').click();
        //Открытие меню выбора создания сущностей 5 уровня
        cy.get('.menu-arrow').eq(1).click();
        //Выбор сущности "Объект под реализацию"
        cy.get('app-dropdown-link li a').contains('Исполнение поручений').click();
        //Ввод наименования
        cy.get('[formcontrolname="name"]') 
        .type('Статистика исполнения поручений оперативных совещаний');
        //Ввод описания
        cy.get('[formcontrolname="description"]')
        .type('Описание уровня проекта исполнения поручений "Статистика исполнения поручений оперативных совещаний" которое создается в рамках проведения регрессионного тестирования при запуске тестового набора автотестов на Cypress для ТК C133187 из тестовой модели S101 БГМ, раздела "Целевые программы".');
        //Открытие меню выбора статуса проекта
        cy.get('[formcontrolname="status"] ng-select').click();
        //Выбор статуса проекта
        cy.contains('.ng-option', 'Исполнение').click();
        //Открытие меню выбора "Типа совещания"
        cy.get('[formcontrolname="meetingTypeDictCode"]').as('meetingType');
        cy.get('@meetingType').click();
        //Выбор "Типа совещания"
        cy.get('@meetingType').contains('Оперативное совещание').as('meetingOper');
        cy.get('@meetingOper').click();
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
        cy.wait(500);
        //Применить
        cy.get('.button-t1').eq(1).wait(500).click();
        cy.wait(500);
    });
          
    it("should do execution of assignment field validation", () => {
        cy.wait(500).reload();
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', "2023 ").as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('.item-panel').contains('.item-panel', "КНИПИ ").as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню Объект под реализацию, Исполнение поручений, Мероприятия, Справочно"
        cy.get('.item-panel').contains('.item-panel', 'АО \«ИГиРГИ\»').as('Lvl-4');
        cy.get('@Lvl-4').find('.link-t4').click();
        //Выбор созданного проекта
        cy.get('.h2').contains("Статистика исполнения поручений оперативных совеща... ").wait(500).click(); 
        cy.wait(500);
        //Открытие созданного проекта на редактирование в боковой информационной панеле
        cy.get('.menu').click();
        cy.contains('Редактировать').click();
        //Проверка наименования проекта
        cy.get('[formcontrolname="name"] input')
        .should("have.value", "Статистика исполнения поручений оперативных совещаний");
        //Проверка описания проекта
        cy.get('[formcontrolname="description"] textarea')
        .should("have.value", "Описание уровня проекта исполнения поручений \"Статистика исполнения поручений оперативных совещаний\" которое создается в рамках проведения регрессионного тестирования при запуске тестового набора автотестов на Cypress для ТК C133187 из тестовой модели S101 БГМ, раздела \"Целевые программы\".");
        //Проверка статуса проекта
        cy.get('[formcontrolname="status"]').should("contain.text", "Исполнение");
        //Проверка Типа совещания
        cy.get('[formcontrolname="meetingTypeDictCode"]') 
        .should("contain.text", "×Оперативное совещание×");
        //Проверка номера проекта
        cy.get('[formcontrolname="projectNumber"] input').should("have.value", "280885");
        //Проверка даты начала
        cy.get('[formcontrolname="activeFrom"] input').should("have.value", "01.01.2023");
        //Проверка даты окончания
        cy.get('[formcontrolname="activeTo"] input').should("have.value", "31.12.2023");
        //Проверка даты прогнозного завершения
        cy.get('[formcontrolname="completionDateForecast"] input').should("have.value", "18.09.2023");
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