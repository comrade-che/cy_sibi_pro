///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C133177 object under implementation creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do object under implementation creating", () => {
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
        //Открытие меню выбора создания сущностей 5 уровня
        cy.get('.menu-arrow').eq(1).click();
        //Выбор сущности "Объект под реализацию"
        cy.get('app-dropdown-link li a').contains('Объект под реализацию').click(); 
        //Ввод наименования
        cy.get('[formcontrolname="name"]') 
        .type('Техперевооружение склада хранения нефтепродуктов г. Оха, Резервуарный парк');
        //Открытие меню выбора направления проекта
        cy.get('[formcontrolname="directionProjectDictId"] span').eq(0).click();
        //Выбор направления проекта
        cy.get('.ng-dropdown-panel span').contains('РВС').click();
        //Ввод описания
        cy.get('[formcontrolname="description"]') 
        .type('Описание уровня проекта Объект под реализацию для автоматизированного теста Cypress которое будет записано при создании уровня проекта в процессе выполнения тестового сценария в составе тестового набора мной и ни кем более для проверки качества выпускаемого ПО на проекте БГМ СИБИ-ПРО');
        //Открытие меню выбора статуса проекта
        cy.get('[formcontrolname="status"] ng-select').click();
        //Выбор статуса проекта
        cy.contains('.ng-option', 'Исполнение').click();
        //Открытие меню выбора степени критичности
        cy.get('[formcontrolname="criticalityDegreeId"]').click();
        //Выбор степени критичности
        cy.get('.ng-dropdown-panel-items').contains('Наиболее критичное').click() ;
        //Открытие меню выбора управления
        cy.get('[formcontrolname="responsibleDepartmentDictId"]').click();
        //Выбор управления
        cy.contains('Управление Контроля качества').click() ;
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
        //Ввод количества договоров план
        cy.get('[formcontrolname="contractsCount"]').type('10');
        //Ввод количества договоров факт
        cy.get('[formcontrolname="contractsDoneCount"]').type('5');
        //Ввод контрагентов
        cy.get('[formcontrolname="contractors"]') 
        .type('"ООО \"СпецКомплектПоставка\", \ОАО \"Спецсистемы\", \ОА \"СибСнабКомплект\", \ООО \"МосСпецПрибор\", \ЗАО \"Завод Специальной аппаратуры \"Звезда\"\""');
        //Сохранить
        cy.get('.button-t1').click();
        cy.wait(500);
        //Применить
        cy.get('.button-t1').eq(1).wait(500).click();
        cy.wait(500);
    });
          
    it("should do object under implementation field validation", () => {
        cy.wait(500).reload()
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
        //Выбор созданного проекта
        cy.get('.h2').contains("РВС Техперевооружение склада хранения нефтепродуктов г... ").wait(500).click();
        cy.wait(500);
        //Открытие созданного проекта на редактирование в боковой информационной панеле
        cy.get('.menu').click();
        cy.contains('Редактировать').click();
        //Проверка наименования проекта
        cy.get('[formcontrolname="name"] input')
        .should("have.value", "Техперевооружение склада хранения нефтепродуктов г. Оха, Резервуарный парк");
        //Проверка направления проекта
        cy.get('[formcontrolname="directionProjectDictId"]')
        .should("contain.text", "РВС");
        //Проверка описания проекта
        cy.get('[formcontrolname="description"] textarea')
        .should("have.value", "Описание уровня проекта Объект под реализацию для автоматизированного теста Cypress которое будет записано при создании уровня проекта в процессе выполнения тестового сценария в составе тестового набора мной и ни кем более для проверки качества выпускаемого ПО на проекте БГМ СИБИ-ПРО");
        //Проверка статуса проекта
        cy.get('[formcontrolname="status"]')
        .should("contain.text", "Исполнение");
        //Проверка степени критичности проекта
        cy.get('[formcontrolname="criticalityDegreeId"]') 
        .should("contain.text", "Наиболее критичное");
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
        //Проверка договоры план
        cy.get('[formcontrolname="contractsCount"]').find('input') 
        .should("have.value", "10");
        //Проверка договоры факт
        cy.get('[formcontrolname="contractsDoneCount"]').find('input') 
        .should("have.value", "5");
        //Проверка контрагенты
        cy.get('[formcontrolname="contractors"]').find('textarea') 
        .should("have.value", "\"ООО \"СпецКомплектПоставка\", ОАО \"Спецсистемы\", ОА \"СибСнабКомплект\", ООО \"МосСпецПрибор\", ЗАО \"Завод Специальной аппаратуры \"Звезда\"\"\"");
        //Закрытие диалогового окна нажатие на кнопку "Отмена"
        cy.get('.button-t2').click();
    });
});