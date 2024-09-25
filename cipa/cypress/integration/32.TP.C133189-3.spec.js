///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C133189 for reference creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do for reference creating", () => {
        cy.wait(500)
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', "2023 ").as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('.item-panel').contains('.item-panel', "Разведка и добыча ").as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню Объект под реализацию, Исполнение поручений, Мероприятия, Справочно"
        cy.get('.item-panel').contains('.item-panel', 'АО \«Самотлорнефтегаз\»').as('Lvl-4');
        cy.get('@Lvl-4').find('.link-t4').click();
        //Открытие меню выбора создания сущностей 5 уровня
        cy.get('.menu-arrow').eq(1).click();
        //Выбор сущности "Справочно"
        cy.get('app-dropdown-link li a').contains('Справочно').click();
        //Ввод наименования
        cy.get('[formcontrolname="name"]') 
        .type('Оснащение РВС средствами измерения уровня и температуры. Модернизация АСУТП УПН Украинский');
        //Ввод описания
        cy.get('[formcontrolname="description"]') 
        .type('Описание уровня проекта "Справочно" выполнено для автотеста на Cypress для проверки ввода текста в поле "Описание" при создании и валидации полей. Выполлнено на основе ТК C133189 изначально написанного для проведения ручного тестирования, но так сложилось, что мы теперь одной ногой в автоматизации, так что "Привет"!');
        //Открытие меню выбора статуса проекта
        cy.get('[formcontrolname="status"] ng-select').click();
        //Выбор статуса проекта
        cy.contains('.ng-option', 'Исполнение').click();
        //Открытие меню выбора степени критичности
        cy.get('[formcontrolname="criticalityDegreeId"]').click();
        //Выбор степени критичности
        cy.get('.ng-dropdown-panel-items').contains('Наименее критичное').click();
        //Открытие меню выбора управления
        cy.get('[formcontrolname="responsibleDepartmentDictId"]').click();
        //Выбор управления
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
        //Ввод количество договоров план
        cy.get('[formcontrolname="contractsCount"]').type('10');
        //Ввод количество договоров факт
        cy.get('[formcontrolname="contractsDoneCount"]').type('5');
        //Сохранить
        cy.get('.button-t1').click();
        cy.wait(500);
        //Применить
        cy.get('.button-t1').eq(1).wait(500).click(); 
        cy.wait(500);
    });
        
    it("should do for reference field validation", () => {
        cy.wait(500).reload();
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', "2023 ").as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('.item-panel').contains('.item-panel', "Разведка и добыча ").as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню Объект под реализацию, Исполнение поручений, Мероприятия, Справочно"
        cy.get('.item-panel').contains('.item-panel', 'АО \«Самотлорнефтегаз\»').as('Lvl-4');
        cy.get('@Lvl-4').find('.link-t4').click();
        cy.wait(500);
        //Выбор созданного проекта
        cy.get('.h2').contains("Оснащение РВС средствами измерения уровня и темпер... ").click();
        cy.wait(500);
        //Открытие созданного проекта на редактирование в боковой информационной панеле
        cy.get('.menu').click();
        cy.contains('Редактировать').click();
        //Проверка наименования проекта
        cy.get('[formcontrolname="name"] input')
        .should("have.value", "Оснащение РВС средствами измерения уровня и температуры. Модернизация АСУТП УПН Украинский");
        //Проверка описания проекта
        cy.get('[formcontrolname="description"] textarea') 
        .should("have.value", "Описание уровня проекта \"Справочно\" выполнено для автотеста на Cypress для проверки ввода текста в поле \"Описание\" при создании и валидации полей. Выполлнено на основе ТК C133189 изначально написанного для проведения ручного тестирования, но так сложилось, что мы теперь одной ногой в автоматизации, так что \"Привет\"!");
        //Проверка статуса проекта
        cy.get('[formcontrolname="status"]') 
        .should("contain.text", "Исполнение");
        //Проверка степени критичности проекта
        cy.get('[formcontrolname="criticalityDegreeId"]') 
        .should("contain.text", "Наименее критичное");
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
        //Проверка количество договоров план
        cy.get('[formcontrolname="contractsCount"] input') 
        .should("have.value", "10");
        //Проверка количества договоров факт
        cy.get('[formcontrolname="contractsDoneCount"] input') 
        .should("have.value", "5");
        //Закрытие диалогового окна нажатие на кнопку "Отмена"
        cy.get('.button-t2').click();
    });
})