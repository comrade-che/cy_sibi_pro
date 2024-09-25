///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import { activity } from "../support/pages/Activity.js";

describe('TC C136915 activity at the end of the month for all sixth project levels creating and field validation', () => {

//МЕРОПРИЯТИЕ ДЛЯ ЭТАПА РЕАЛИЗАЦИИ ОБЪЕКТА В ОБЪЕКТЕ ПОД РЕАЛИЗАЦИЮ

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do activity at the end of the month for object under implementation creating", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия", поднятие диалогового окна "Создание - Мероприятие"
        activity.transitiontoаctivityATEOTM
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.3.7. Приобретение оборудования взамен устаревшег... ", "9.2. Поверка измерительной системы ");
        //Ввод даты
        activity.аctivityATEOTMdate('28.02.2022');
        //Выбор типа мероприятия
        activity.аctivityATEOTMtype('Статус на конец месяца');
        //Ввод описания мероприятия
        activity.аctivityATEOTMinformation('Оператор поставки ЕОС ИТ: пп. 3, 11, 12 ЗРГ подписано. Направлено в БГМ 24.08.2021. Выполнено');
        //Приминение внесенных изменений
        cy.get('.button-t1').click();
        //Приминение внесенных изменений
        cy.get('[type="submit"]').find('.button-t1').click();
    });
          
    it("should do activity at the end of the month for object under implementation field validation", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия", поднятие диалогового окна "Редактирование - Мероприятие"
        activity.transitiontocreatedаctivityATEOTM
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.3.7. Приобретение оборудования взамен устаревшег... ", "9.2. Поверка измерительной системы ", " Оператор поставки ЕОС ИТ: пп. 3, 11, 12 ЗРГ п... ");
        //Проверка даты
        activity.validаctivityATEOTMdate("28.02.2022");
         //Проверка типа мероприятия
        activity.validаctivityATEOTMtype("Статус на конец месяца");
        //Проверка наименования мероприятия
        activity.validаctivityATEOTMtitle("Статус на конец месяца");
        //Проверка описания мероприятия
        activity.validаctivityATEOTMinformation("Оператор поставки ЕОС ИТ: пп. 3, 11, 12 ЗРГ подписано. Направлено в БГМ 24.08.2021. Выполнено");
        //Закрытие диалогового окна нажатием кнопки "Отмена"
        cy.get('[class^="button-t2"]').click();
    });

    //МЕРОПРИЯТИЕ ДЛЯ ПОРУЧЕНИЯ В ИСПОЛНЕНИИ ПОРУЧЕНИЙ

    it("should do activity at the end of the month for execution of assignment creating", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия", поднятие диалогового окна "Создание - Мероприятие"
        activity.transitiontoаctivityATEOTM
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "Статистика исполнения поручений оперативных совеща... ", "от 11.03.2021 № 45 п. 9 ");
        //Ввод даты
        activity.аctivityATEOTMdate('28.02.2022');
        //Выбор типа мероприятия
        activity.аctivityATEOTMtype('Статус на конец месяца');
        //Ввод наименования мероприятия
        activity.аctivityATEOTMtitle('Статус на конец месяца Cypress');
        //Ввод описания мероприятия
        activity.аctivityATEOTMinformation('Оператор поставки ЕОС ИТ: пп. 3, 11, 12 ЗРГ подписано. Направлено в БГМ 24.08.2021. Выполнено');
        //Приминение внесенных изменений
        cy.get('.button-t1').click();
    });
          
    it("should do activity at the end of the month for execution of assignment field validation", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия", поднятие диалогового окна "Редактирование - Мероприятие"
        activity.transitiontocreatedаctivityATEOTM
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "Статистика исполнения поручений оперативных совеща... ", "от 11.03.2021 № 45 п. 9 ", " Оператор поставки ЕОС ИТ: пп. 3, 11, 12 ЗРГ п... ");
        //Проверка даты
        activity.validаctivityATEOTMdate("28.02.2022");
        //Проверка типа мероприятия
        activity.validаctivityATEOTMtype("Статус на конец месяца");
        //Проверка наименования мероприятия
        activity.validtitle("Статус на конец месяца Cypress");
        //Проверка описания мероприятия
        activity.validаctivityATEOTMinformation("Оператор поставки ЕОС ИТ: пп. 3, 11, 12 ЗРГ подписано. Направлено в БГМ 24.08.2021. Выполнено");
        //Закрытие диалогового окна нажатием кнопки "Отмена"
        cy.get('.button-t2').click();
    });
    
    //МЕРОПРИЯТИЕ ДЛЯ ЭТАПА РЕАЛИЗАЦИИ ОБЪЕКТА В СПРАВОЧНО

    it("should do activity at the end of the month for reference creating", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия", поднятие диалогового окна "Создание - Мероприятие"
        activity.transitiontoаctivityATEOTM
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ", "8. Пусконаладочные работы и опытно промышленная эк... ");
        //Ввод даты
        activity.аctivityATEOTMdate('28.02.2022');
        //Выбор типа мероприятия
        activity.аctivityATEOTMtype('Статус на конец месяца');
        //Ввод описания мероприятия
        activity.аctivityATEOTMinformation('Оператор поставки ЕОС ИТ: пп. 3, 11, 12 ЗРГ подписано. Направлено в БГМ 24.08.2021. Выполнено');
        //Приминение внесенных изменений
        cy.get('.button-t1').click();
        //Приминение внесенных изменений
        cy.get('[type="submit"]').find('.button-t1').click();
    });
          
    it("should do activity at the end of the month for reference field validation", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия", поднятие диалогового окна "Редактирование - Мероприятие"
        activity.transitiontocreatedаctivityATEOTM
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ", "8. Пусконаладочные работы и опытно промышленная эк... ", " Оператор поставки ЕОС ИТ: пп. 3, 11, 12 ЗРГ п... ");
       //Проверка даты
        activity.validаctivityATEOTMdate("28.02.2022");
        //Проверка типа мероприятия
        activity.validаctivityATEOTMtype("Статус на конец месяца");
        //Проверка наименования мероприятия
        activity.validаctivityATEOTMtitle("Статус на конец месяца");
        //Проверка описания мероприятия
        activity.validаctivityATEOTMinformation("Оператор поставки ЕОС ИТ: пп. 3, 11, 12 ЗРГ подписано. Направлено в БГМ 24.08.2021. Выполнено");
        //Закрытие диалогового окна нажатием кнопки "Отмена"
        cy.get('.button-t2').click();
    });
});