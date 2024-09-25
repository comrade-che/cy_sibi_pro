///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C133191 object implementation stage for object under implementation creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do object implementation stage for object under implementation creating", () => {
        cy.wait(500)
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', "2024 ").as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('.item-panel').contains('.item-panel', "Нефтепереработка и Нефтехимия ").as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню Объект под реализацию, Исполнение поручений, Мероприятия, Справочно"
        cy.get('.item-panel').contains('.item-panel', 'АО \«Куйбышевский НПЗ\»').as('Lvl-4');
        cy.get('@Lvl-4').find('.link-t4').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "Этап реализации объекта"
        cy.get('.item-panel').contains('.item-panel', 'РВС Техперевооружение склада хранения нефтепродуктов г... ').as('Lvl-5.1');
        cy.get('@Lvl-5.1').find('.link-t4').wait(500).click();
        //Создание "Этапа реализации объекта"
        cy.get('.link-t4').click();
        //Ввод наименования
        cy.get('[formcontrolname="name"]').type('10.Ввод в промышленную эксплуатацию');
        //Ввод описания
        cy.get('[formcontrolname="description"]') 
        .type('Описание этапа реализации объекта как тестового сценария и части тестового набора для автоматизации рутинных действий на Cypress.');
        //Открытие меню выбора управления
        cy.get('[formcontrolname="responsibleDepartmentDictId"]').click();
        //Выбор управления
        cy.contains('Управление Контроля качества').click();
        //Ввод даты начала
        cy.get('[formcontrolname="activeFrom"]').type('01.01.2024');
        //Ввод даты окончания
        cy.get('[formcontrolname="activeTo"]').type('31.12.2024');
        //Ввод даты прогнозного завершения
        cy.get('[formcontrolname="completionDateForecast"]').type('18.09.2024');
        //Ввод номера проекта
        cy.get('[formcontrolname="projectNumber"]').type('280885');
        //Ввод ответственного
        cy.get('[formcontrolname="responsible"]').type('Черненко Е.Г.');
        //Сохранить
        cy.get('.button-t1').click();
        cy.wait(500);
        //Применить
        cy.get('.button-t1').eq(1).wait(500).click();
        cy.wait(500);
    });
          
    it("should do object implementation stage for object under implementation field validation", () => {
        cy.wait(500)
        .reload()
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', "2024 ").as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('.item-panel').contains('.item-panel', "Нефтепереработка и Нефтехимия ").as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню Объект под реализацию, Исполнение поручений, Мероприятия, Справочно"
        cy.get('.item-panel').contains('.item-panel', 'АО \«Куйбышевский НПЗ\»').as('Lvl-4');
        cy.get('@Lvl-4').find('.link-t4').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "Этап реализации объекта"
        cy.get('.item-panel').contains('.item-panel', 'РВС Техперевооружение склада хранения нефтепродуктов г... ').as('Lvl-5.1');
        cy.get('@Lvl-5.1').find('.link-t4').wait(500).click();
        //Выбор созданного проекта
        cy.get('.h2').contains("10.Ввод в промышленную эксплуатацию ").wait(500).click();
        cy.wait(500);
        //Открытие созданного проекта на редактирование в боковой информационной панеле
        cy.get('.menu').click();
        cy.contains('Редактировать').click();
        //Проверка наименования проекта
        cy.get('[formcontrolname="name"] input')
        .should("have.value", "10.Ввод в промышленную эксплуатацию");
        //Проверка описания проекта
        cy.get('[formcontrolname="description"] textarea') 
        .should("have.value", "Описание этапа реализации объекта как тестового сценария и части тестового набора для автоматизации рутинных действий на Cypress.");
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
        //Проверка ответственного
        cy.get('[formcontrolname="responsible"] input') 
        .should("have.value", "Черненко Е.Г.");
        //Закрытие диалогового окна нажатие на кнопку "Отмена"
        cy.get('.button-t2').click();
    });
})