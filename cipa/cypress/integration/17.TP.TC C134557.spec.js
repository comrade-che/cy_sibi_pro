///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import { activity } from "../support/pages/Activity.js";

describe('TC C134557 activity for all sixth project levels creating and field validation', () => {

//МЕРОПРИЯТИЕ ДЛЯ ЭТАПА РЕАЛИЗАЦИИ ОБЪЕКТА В ОБЪЕКТЕ ПОД РЕАЛИЗАЦИЮ

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do activity for object under implementation creating", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия", поднятие диалогового окна "Создание - Мероприятие"
        activity.transitiontoаctivity
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.3.7. Приобретение оборудования взамен устаревшег... ", "9.2. Поверка измерительной системы ");
        cy.wait(500);
        //Включение чек-бокса "Присутствуют проблемы"
        activity.аctivityisProblem();
        //Ввод даты
        activity.аctivitydate('28.02.2022');
        //Выбор типа мероприятия
        activity.аctivitytype("Текущий статус");
        //Ввод наименования мероприятия
        activity.аctivitytitle(' Мероприятие тест Cypress ЭРО для ОПР');
        //Ввод описания мероприятия
        activity.аctivityinformation('В работе на текущую дату 2022 года');
        //Установка цвета метки
        activity.аctivitylabelColor('[style="background-color: rgb(255, 131, 115);"]');
        //Приминение внесенных изменений
        cy.get('.button-t1').click();
    });
          
    it("should do activity for object under implementation field validation", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия"
        activity.transitiontocreatedаctivity
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.3.7. Приобретение оборудования взамен устаревшег... ", "9.2. Поверка измерительной системы ");
        //Проверка отображения у мероприятия надписи "Присутствуют проблемы"
        activity.validproblems("Присутствуют проблемы");
        //Поднятие диалогового окна "Редактирвоание - Мероприятие"
        activity.openingediting(" В работе на текущую дату 2022 года ");
        //Проверка даты
        activity.validdate("28.02.2022");
        //Проверка типа мероприятия
        activity.validtype("Текущий статус");
        //Проверка наименования мероприятия
        activity.validtitle("Текущий статус Мероприятие тест Cypress ЭРО для ОПР");
        //Проверка описания мероприятия
        activity.validinformation("В работе на текущую дату 2022 года");
        //Закрытие диалогового окна нажатием кнопки "Отмена"
        cy.get('.button-t2').click();
    });

    //МЕРОПРИЯТИЕ ДЛЯ ПОРУЧЕНИЯ В ИСПОЛНЕНИИ ПОРУЧЕНИЙ

    it("should do activity for execution of assignment creating", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия", поднятие диалогового окна "Создание - Мероприятие"
        activity.transitiontoаctivity
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "Статистика исполнения поручений оперативных совеща... ", "от 11.03.2021 № 45 п. 9 ");
        cy.wait(500);
        //Включение чек-бокса "Присутствуют проблемы"
        activity.аctivityisProblem();
        //Ввод даты
        activity.аctivitydate('28.02.2022');
        //Выбор типа мероприятия 
        activity.аctivitytype("Совещание");
        //Ввод наименования мероприятия
        activity.аctivitytitle('Мероприятие тест Cypress ПОР для ИП');
        //Ввод описания мероприятия
        activity.аctivityinformation('В работе на текущую дату 2022 года');
        //Установка цвета метки
        activity.аctivitylabelColor('[style="background-color: rgb(255, 131, 115);"]');
        //Приминение внесенных изменений
        cy.get('.button-t1').click() ;
    });
          
    it("should do activity for execution of assignment field validation", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия"
        activity.transitiontocreatedаctivity
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "Статистика исполнения поручений оперативных совеща... ", "от 11.03.2021 № 45 п. 9 ");
        //Проверка отображения у мероприятия надписи "Присутствуют проблемы"
        activity.validproblems("Присутствуют проблемы");
        //Поднятие диалогового окна "Редактирвоание - Мероприятие"
        activity.openingediting(" В работе на текущую дату 2022 года ");
        //Проверка даты
        activity.validdate("28.02.2022");
        //Проверка типа мероприятия
        activity.validtype("Совещание");
        //Проверка наименования мероприятия
        activity.validtitle("Мероприятие тест Cypress ПОР для ИП");
        //Проверка описания мероприятия
        activity.validinformation("В работе на текущую дату 2022 года");
        //Закрытие диалогового окна нажатием кнопки "Отмена"
        cy.get('.button-t2').click();
    });

    //МЕРОПРИЯТИЕ ДЛЯ ЭТАПА РЕАЛИЗАЦИИ ОБЪЕКТА В СПРАВОЧНО

    it("should do activity for reference creating", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия", поднятие диалогового окна "Создание - Мероприятие"
        activity.transitiontoаctivity
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ", "8. Пусконаладочные работы и опытно промышленная эк... ");
        cy.wait(500);
        //Включение чек-бокса "Присутствуют проблемы"
        activity.аctivityisProblem();
        //Ввод даты
        activity.аctivitydate('28.02.2022');
        //Выбор типа мероприятия 
        activity.аctivitytype("Текущий статус");
        //Ввод наименования мероприятия
        activity.аctivitytitle(' Мероприятие тест Cypress ЭРО для СПР');
        //Ввод описания мероприятия
        activity.аctivityinformation('В работе на текущую дату 2022 года');
        //Установка цвета метки
        activity.аctivitylabelColor('[style="background-color: rgb(255, 131, 115);"]');
        //Приминение внесенных изменений
        cy.get('.button-t1').click();
    });
          
    it("should do activity for reference field validation", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, открытие БИП, переход на вкладку "Мероприятия"
        activity.transitiontocreatedаctivity
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ", "8. Пусконаладочные работы и опытно промышленная эк... ");
        //Проверка отображения у мероприятия надписи "Присутствуют проблемы"
        activity.validproblems("Присутствуют проблемы");
        //Поднятие диалогового окна "Редактирвоание - Мероприятие"
        activity.openingediting(" В работе на текущую дату 2022 года ");
        //Проверка даты
        activity.validdate("28.02.2022");
        //Проверка типа мероприятия
        activity.validtype("Текущий статус");
        //Проверка наименования мероприятия
        activity.validtitle("Текущий статус Мероприятие тест Cypress ЭРО для СПР");
        //Проверка описания мероприятия
        activity.validinformation("В работе на текущую дату 2022 года");
        //Закрытие диалогового окна нажатием кнопки "Отмена"
        cy.get('.button-t2').click();
    });
});