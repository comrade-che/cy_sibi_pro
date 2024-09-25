///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C133192 order creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do order creating", () => {
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
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "Поручения"
        cy.get('.item-panel').contains('.item-panel', 'Статистика исполнения поручений оперативных совеща... ').as('Lvl-5.2');
        cy.get('@Lvl-5.2').find('.link-t4').wait(500).click();
        //Создание "Поручения"
        cy.get('.link-t4').click();
        //Ввод наименования
        cy.get('[formcontrolname="name"]') 
        .type('от 11.03.2021 № 45 п. 9');
        //Ввод описания
        cy.get('[formcontrolname="description"]') 
        .type('Направить в адрес ЦИПА СПП БГМ утвержденный в ОГ график СМР по РВС.');
        //Открытие меню выбора управления
        cy.get('[formcontrolname="responsibleDepartmentDictId"]').click();
        //Выбор управления
        cy.contains('Управление Контроля качества').click();
        //Ввод даты начала
        cy.get('[formcontrolname="activeFrom"]').type('01.01.2023');
        //Ввод даты окончания
        cy.get('[formcontrolname="activeTo"]').type('31.12.2023');
        //Ввод даты прогнозного завершения
        cy.get('[formcontrolname="completionDateForecast"]').type('18.09.2023');
        //Ввод номера проекта
        cy.get('[formcontrolname="projectNumber"]').type('от 11.03.2021 № 45');
        //Ввод ответственного
        cy.get('[formcontrolname="responsible"]').type('Черненко Е.Г.');
        //Сохранить
        cy.get('.button-t1').click();
        cy.wait(500);
        //Применить
        cy.get('.button-t1').eq(1).wait(500).click();
        cy.wait(500);
    });
          
    it("should do order field validation", () => {
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
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "Поручения"
        cy.get('.item-panel').contains('.item-panel', 'Статистика исполнения поручений оперативных совеща... ').as('Lvl-5.2');
        cy.get('@Lvl-5.2').find('.link-t4').wait(500).click();
        cy.wait(500);
        //Выбор созданного проекта
        cy.get('.h2').contains("от 11.03.2021 № 45 п. 9 ").click();
        cy.wait(500);
        //Открытие созданного проекта на редактирование в боковой информационной панеле
        cy.get('.menu').click();
        cy.contains('Редактировать').click();
        //Проверка наименования проекта
        cy.get('[formcontrolname="name"] input')
        .should("have.value", "от 11.03.2021 № 45 п. 9");
        //Проверка описания проекта
        cy.get('[formcontrolname="description"] textarea') 
        .should("have.value", "Направить в адрес ЦИПА СПП БГМ утвержденный в ОГ график СМР по РВС.");
        //Проверка управления
        cy.get('[formcontrolname="responsibleDepartmentDictId"]') 
        .should("contain.text", "Управление Контроля качества");
        //Проверка номера проекта
        cy.get('[formcontrolname="projectNumber"] input')
        .should("have.value", "от 11.03.2021 № 45");
        //Проверка даты начала
        cy.get('[formcontrolname="activeFrom"] input')
        .should("have.value", "01.01.2023");
        //Проверка даты окончания
        cy.get('[formcontrolname="activeTo"] input') 
        .should("have.value", "31.12.2023");
        //Проверка даты прогнозного завершения
        cy.get('[formcontrolname="completionDateForecast"] input') 
        .should("have.value", "18.09.2023");
        //Проверка ответственного
        cy.get('[formcontrolname="responsible"] input')
        .should("have.value", "Черненко Е.Г.");
        //Закрытие диалогового окна нажатие на кнопку "Отмена"
        cy.get('.button-t2').click();
    });
});