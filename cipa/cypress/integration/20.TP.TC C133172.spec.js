///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C133172 field validation on S.I.P. all project levels', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    //-----Валидация полей и проверка рабоспособности вкладкой и пунктов меню в боковой информационной панели уровня 1 "Направление"
    it("should do field validation on S.I.P. direction", () => {
        cy.wait(500).reload();
        //Выбор созданного проекта уровня Направление
        cy.get('.titles-block').contains('.titles-block', "Целевая программа Cypress Автотест").as('lvl1');
        //Открытие боковой информационной панели
        cy.get('@lvl1').find('.title').click();
        //Проверка наличия иконки и кнопки вкладки "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-information-outline");
        //Проверка наличия иконки "Направление"
        cy.get('app-project-title-block .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-direction");
        //Проверка наличия наименования уровня проекта
        cy.get('.link-project-name').should('be.visible')
        .should("contain.text", "Целевая программа Cypress Автотест ");
        //Проверка наличия блока и дат выполнения уровня проекта
        cy.get('[blocktitle="Даты выполнения"]').should('be.visible')
        .should("contain.text", "Даты выполнения 01.01.2023 - 31.12.2023 ");
        //Проверка наличия блока, количества (план/факт) и процента исполнения договоров
        cy.get('[blocktitle="Количество договоров"]').should('be.visible')
        .should("contain.text", "Количество договоров10/20\n(50%)");
        //Проверка наличия блока и процента выполнения (план/факт)
        cy.get('app-simple-block').eq(2).should('be.visible')
        .should("contain.text", "Выполнение план/факт: 0%  0% ");
        //Проверка наличия "Крестика" закрытия боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn tab-icon mdi mdi-close ng-star-inserted");

        //Проверка наличия кнопки "Меню"
        cy.get('.menu').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "menu ng-star-inserted");
        //Открытие меню
        cy.get('.menu').click();
        //Проверка первой вкладки "Редактировать"
        cy.get('.menu-items li').eq(0)
        .should('be.visible').should("contain.text", "Редактировать");
        //Проверка второй вкладки "История изменений"
        cy.get('.menu-items li').eq(1)
        .should('be.visible').should("contain.text", "История изменений");
        //Проверка третьей вкладки "Удалить"
        cy.get('.menu-items li').eq(2)
        .should('be.visible').should("contain.text", "Удалить");
        //Проверка наличия "Крестика" закрытия меню
        cy.get('.sidebar-detail .close-btn').eq(0)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn mdi mdi-close");
        //Закрытие меню
        cy.get('.sidebar-detail .close-btn').eq(0).click();

        //Проверка наличия иконки и кнопки вкладки "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-alert");
        //Переход на вкладку "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon').click();
        //Проверка наименования раздела боковой информационной панели и предупреждения о невозможности создания риска на данном уровне
        cy.get('app-project-risks .title')
        .should("contain.text", " Риски  Добавить риски можно  только на шестом уровне. ");
        //Проверка наличия и отображения первого риска
        cy.get('app-risk-item2').eq(0).should('be.visible');
        //Проверка отображения наименования 6 уровня пароекта у первого риска
        cy.get('app-risk-item2 .risk-title').contains('.risk-title', "9.2. Поверка измерительной системы")
        .should("contain.text", " 9.2. Поверка измерительной системы ");
        //Проверка отображения степени критичности риска
        cy.get('app-risk-item2').contains('.title-block', " 9.2. Поверка измерительной системы").find('span')
        .should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "risks-degree mdi mdi-alert risk-degree-medium");
        //Проверка отображения статуса первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', '9.2. Поверка измерительной системы').find('.status')
        .should("contain.text", " Статус: Наследуемый");
        //Проверка отображения описания первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "9.2. Поверка измерительной системы").as('riskInfo');
        cy.get('@riskInfo').find('.description')
        .should("contain.text", " Риск срыва сроков завершения ПНР из-за отсутствия МТР для выполнения СМР со стороны ОГ.  ");
        //Проверка отображения этапа реализации первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(0)
        .should("contain.text", "Этап реализации: СМР");
        //Проверка отображения ответственного за первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(1)
        .should("contain.text", "Ответственный за риск: ОГ");
        //Проверка отображения системной причины первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(2)
        .should("contain.text", "Системная причина риска: Несвоевременное обеспечение Подрядчика материалами.");
        //Проверка отображения возможного смещения сроков первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(3)
        .should("contain.text", " Возможное смещение сроков: 01.05.2024 ");
        //Проверка отображения даты выявления первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(4)
        .should("contain.text", " Дата выявления риска: 01.02.2023 ");
        //Проверка наличия и отображения второго риска
        cy.get('app-risk-item2').eq(1).should('be.visible');

        //Проверка наличия иконки и кнопки вкладки "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon')
        .should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-calendar-check");
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения наименования раздела "Мероприятия"
        cy.get('app-project-events .title').should("contain.text", " Мероприятия ");        
        //Проверка отображения кнопки добавить мероприятие
        cy.get('app-project-events .add-btn')
        .should('be.visible');
        //Открытие диалогового окна добавления мероприятия
        cy.get('app-project-events .add-btn').click();
        //Проверка отображения диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag').should('be.visible');
        //Закрытие диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag .close-btn').click();
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.actual-info-editor').should('be.visible')
        .should("contain.text", "Нет информации");

        //Проверка наличия иконки и кнопки вкладки "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-paperclip");
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.attach-title').should('be.visible')
        .should("contain.text", " Нет прикрепленных документов ");
        //Проверка наличия окна "Загрузить файл" на вкладке "Документы"
        cy.get('.files-area-container')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "files-area-container ng-star-inserted");
        //Проверка наличия надписей  "Загрузить файл" и "Нажмите или перетащите файл сюда"
        cy.get('.files-area-container .add-btn').should('be.visible')
        .should("contain.text", " Загрузить файл Нажмите или перетащите файл сюда");

        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Включено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin ng-star-inserted");
        //Отключение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Выключено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin-off ng-star-inserted");
        //Включение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Закрытие боковой информационной панели
        cy.get('.close-btn').eq(1).click();
    });

    //-----Валидация полей и проверка рабоспособности вкладкой и пунктов меню в боковой информационной панели уровня 2 "Год"
    it("should do field validation on S.I.P. year", () => {
        cy.wait(500).reload();
        //Выбор созданного проекта уровня Год
        cy.get('.titles-block').contains('.titles-block', "Целевая программа Cypress Автотест").as('lvl1');
        //Переход к дочернему уровню "Год"
        cy.get('@lvl1').find('.link-t3').click();
        //Выбор созданного проекта уровня Год
        cy.get('app-plate-item .h2').contains("2023").wait(500).click();
        cy.wait(500);
        //Проверка наличия иконки и кнопки вкладки "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-information-outline");
        //Проверка наличия иконки "Год"
        cy.get('app-project-title-block .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-year");
        //Проверка наличия наименования проуровня проекта
        cy.get('.link-project-name').should('be.visible')
        .should("contain.text", "2023  / Целевая программа Cypress Автотест ");
        //Проверка наличия блока и дат выполнения уровня проекта
        cy.get('[blocktitle="Даты выполнения"]').should('be.visible')
        .should("contain.text", "Даты выполнения 01.01.2023 - 31.12.2023 ");
        //Проверка наличия блока, количества (план/факт) и процента исполнения договоров
        cy.get('[blocktitle="Количество договоров"]').should('be.visible')
        .should("contain.text", "Количество договоров10/20\n(50%)");
        //Проверка наличия блока и процента выполнения (план/факт)
        cy.get('app-simple-block').eq(2).should('be.visible')
        .should("contain.text", "Выполнение план/факт: 0%  0% ");
        //Проверка наличия "Крестика" закрытия боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn tab-icon mdi mdi-close ng-star-inserted");
        //Проверка наличия кнопки "Меню"
        cy.get('.menu').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "menu ng-star-inserted");
        //Открытие меню
        cy.get('.menu').click();
        //Проверка первой вкладки "Редактировать"
        cy.get('.menu-items li').eq(0)
        .should('be.visible').should("contain.text", "Редактировать");
        //Проверка второй вкладки "История изменений"
        cy.get('.menu-items li').eq(1)
        .should('be.visible').should("contain.text", "История изменений");
        //Проверка третьей вкладки "Удалить"
        cy.get('.menu-items li').eq(2)
        .should('be.visible').should("contain.text", "Удалить");
        //Проверка наличия "Крестика" закрытия меню
        cy.get('.sidebar-detail .close-btn').eq(0)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn mdi mdi-close");
        //Закрытие меню
        cy.get('.sidebar-detail .close-btn').eq(0).click();
        //Проверка наличия иконки и кнопки вкладки "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-alert");
        //Переход на вкладку "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon').click();
        //Проверка наименования раздела боковой информационной панели и предупреждения о невозможности создания риска на данном уровне
        cy.get('app-project-risks .title')
        .should("contain.text", " Риски  Добавить риски можно  только на шестом уровне. ");
        //Проверка наличия и отображения первого риска
        cy.get('app-risk-item2').eq(0).should('be.visible');
        //Проверка отображения наименования 6 уровня пароекта у первого риска
        cy.get('app-risk-item2 .risk-title').contains('.risk-title', "9.2. Поверка измерительной системы")
        .should("contain.text", " 9.2. Поверка измерительной системы ");
        //Проверка отображения степени критичности риска
        cy.get('app-risk-item2').contains('.title-block', " 9.2. Поверка измерительной системы").find('span')
        .should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "risks-degree mdi mdi-alert risk-degree-medium");
        //Проверка отображения статуса первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', '9.2. Поверка измерительной системы').find('.status')
        .should("contain.text", " Статус: Наследуемый");
        //Проверка отображения описания первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "9.2. Поверка измерительной системы").as('riskInfo');
        cy.get('@riskInfo').find('.description')
        .should("contain.text", " Риск срыва сроков завершения ПНР из-за отсутствия МТР для выполнения СМР со стороны ОГ.  ");
        //Проверка отображения этапа реализации первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(0)
        .should("contain.text", "Этап реализации: СМР");
        //Проверка отображения ответственного за первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(1)
        .should("contain.text", "Ответственный за риск: ОГ");
        //Проверка отображения системной причины первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(2)
        .should("contain.text", "Системная причина риска: Несвоевременное обеспечение Подрядчика материалами.");
        //Проверка отображения возможного смещения сроков первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(3)
        .should("contain.text", " Возможное смещение сроков: 01.05.2024 ");
        //Проверка отображения даты выявления первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(4)
        .should("contain.text", " Дата выявления риска: 01.02.2023 ");
        //Проверка наличия и отображения второго риска
        cy.get('app-risk-item2').eq(1).should('be.visible');
        //Проверка наличия иконки и кнопки вкладки "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon')
        .should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-calendar-check");
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения наименования раздела "Мероприятия"
        cy.get('app-project-events .title').should("contain.text", " Мероприятия ");        
        //Проверка отображения кнопки добавить мероприятие
        cy.get('app-project-events .add-btn')
        .should('be.visible');
        //Открытие диалогового окна добавления мероприятия
        cy.get('app-project-events .add-btn').click();
        //Проверка отображения диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag').should('be.visible');
        //Закрытие диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag .close-btn').click();
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.actual-info-editor').should('be.visible')
        .should("contain.text", "Нет информации");
        //Проверка наличия иконки и кнопки вкладки "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-paperclip");
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.attach-title').should('be.visible')
        .should("contain.text", " Нет прикрепленных документов ");
        //Проверка наличия окна "Загрузить файл" на вкладке "Документы"
        cy.get('.files-area-container')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "files-area-container ng-star-inserted");
        //Проверка наличия надписей  "Загрузить файл" и "Нажмите или перетащите файл сюда"
        cy.get('.files-area-container .add-btn').should('be.visible')
        .should("contain.text", " Загрузить файл Нажмите или перетащите файл сюда");
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Включено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin ng-star-inserted");
        //Отключение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Выключено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin-off ng-star-inserted");
        //Включение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Закрытие боковой информационной панели
        cy.get('.close-btn').eq(1).click();
    });

    //-----Валидация полей и проверка рабоспособности вкладкой и пунктов меню в боковой информационной панели уровня 3 "Бизнес Блок"
    it("should do field validation on S.I.P. business block", () => {
        cy.wait(500).reload();
        //Выбор созданного проекта уровня Бизнес Блок
        cy.get('.titles-block').contains('.titles-block', "Целевая программа Cypress Автотест").as('lvl1');
        //Переход к дочернему уровню "Год"
        cy.get('@lvl1').find('.link-t3').click();
        //Выбор созданного проекта уровня Год
        cy.get('app-plate-item-year').contains('app-plate-item-year', "2023 ").as('lvl2');
        //Переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('@lvl2').find('.link-t4').click();
        //Выбор созданного проекта уровня ББ
        cy.get('app-plate-item .h2').contains('.h2', "КНИПИ ").as('lvl3');
        cy.get('@lvl3').wait(500).click();
        cy.wait(500);
        //Проверка наличия иконки и кнопки вкладки "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-information-outline");
        //Проверка наличия иконки "Бизнес Блок"
        cy.get('app-project-title-block .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-bb");
        //Проверка наличия наименования проуровня проекта
        cy.get('.link-project-name').should('be.visible')
        .should("contain.text", "КНИПИ  / 2023 ");
        //Проверка наличия блока и дат выполнения уровня проекта
        cy.get('[blocktitle="Даты выполнения"]').should('be.visible')
        .should("contain.text", "Даты выполнения 01.01.2023 - 31.12.2023 ");
        //Проверка наличия блока "Отчет карта рисков"
        cy.get('[blocktitle="Отчет: карта рисков"]').should('be.visible');
        //Проверка наличия и значения наименования блока
        cy.get('[blocktitle="Отчет: карта рисков"] .info-title').should('be.visible')
        .should("contain.text", "Отчет: карта рисков");
        //Проверка наличия и кнопки "Скачать файл"
        cy.get('app-report-btn-risks-map').should('be.visible');
        //Проверка наличия и отображения надписи "скачать файл"
        cy.get('app-report-btn-risks-map .button-t2').should('be.visible')
        .should("contain.text", "Скачать файл");
        //Проверка наличия блока, количества (план/факт) и процента исполнения договоров
        cy.get('[blocktitle="Количество договоров"]').should('be.visible')
        .should("contain.text", "Количество договоров10/20\n(50%)");
        //Проверка наличия блока и процента выполнения (план/факт)
        cy.get('app-simple-block').eq(4).should('be.visible')
        .should("contain.text", "Выполнение план/факт: 0%  0% ");
        //Проверка наличия "Крестика" закрытия боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn tab-icon mdi mdi-close ng-star-inserted");
        //Проверка наличия кнопки "Меню"
        cy.get('.menu').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "menu ng-star-inserted");
        //Открытие меню
        cy.get('.menu').click();
        //Проверка первой вкладки "Редактировать"
        cy.get('.menu-items li').eq(0)
        .should('be.visible').should("contain.text", "Редактировать");
        //Проверка второй вкладки "История изменений"
        cy.get('.menu-items li').eq(1)
        .should('be.visible').should("contain.text", "История изменений");
        //Проверка третьей вкладки "Удалить"
        cy.get('.menu-items li').eq(2)
        .should('be.visible').should("contain.text", "Удалить");
        //Проверка наличия "Крестика" закрытия меню
        cy.get('.sidebar-detail .close-btn').eq(0)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn mdi mdi-close");
        //Закрытие меню
        cy.get('.sidebar-detail .close-btn').eq(0).click();
        //Проверка наличия иконки и кнопки вкладки "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-alert");
        //Переход на вкладку "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon').click();
        //Проверка наименования раздела боковой информационной панели и предупреждения о невозможности создания риска на данном уровне
        cy.get('app-project-risks .title')
        .should("contain.text", " Риски  Добавить риски можно  только на шестом уровне. ");
        //Проверка наличия и отображения первого риска
        cy.get('app-risk-item2').eq(0).should('be.visible');
        //Проверка отображения наименования 6 уровня пароекта у первого риска
        cy.get('app-risk-item2 .risk-title').contains('.risk-title', "9.2. Поверка измерительной системы")
        .should("contain.text", " 9.2. Поверка измерительной системы ");
        //Проверка отображения степени критичности риска
        cy.get('app-risk-item2').contains('.title-block', " 9.2. Поверка измерительной системы").find('span')
        .should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "risks-degree mdi mdi-alert risk-degree-medium");
        //Проверка отображения статуса первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', '9.2. Поверка измерительной системы').find('.status')
        .should("contain.text", " Статус: Наследуемый");
        //Проверка отображения описания первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "9.2. Поверка измерительной системы").as('riskInfo');
        cy.get('@riskInfo').find('.description')
        .should("contain.text", " Риск срыва сроков завершения ПНР из-за отсутствия МТР для выполнения СМР со стороны ОГ.  ");
        //Проверка отображения этапа реализации первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(0)
        .should("contain.text", "Этап реализации: СМР");
        //Проверка отображения ответственного за первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(1)
        .should("contain.text", "Ответственный за риск: ОГ");
        //Проверка отображения системной причины первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(2)
        .should("contain.text", "Системная причина риска: Несвоевременное обеспечение Подрядчика материалами.");
        //Проверка отображения возможного смещения сроков первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(3)
        .should("contain.text", " Возможное смещение сроков: 01.05.2024 ");
        //Проверка отображения даты выявления первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(4)
        .should("contain.text", " Дата выявления риска: 01.02.2023 ");
        //Проверка наличия и отображения второго риска
        cy.get('app-risk-item2').eq(1).should('be.visible');
        //Проверка наличия иконки и кнопки вкладки "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon')
        .should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-calendar-check");
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения наименования раздела "Мероприятия"
        cy.get('app-project-events .title').should("contain.text", " Мероприятия ");        
        //Проверка отображения кнопки добавить мероприятие
        cy.get('app-project-events .add-btn')
        .should('be.visible');
        //Открытие диалогового окна добавления мероприятия
        cy.get('app-project-events .add-btn').click();
        //Проверка отображения диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag').should('be.visible');
        //Закрытие диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag .close-btn').click();
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.actual-info-editor').should('be.visible')
        .should("contain.text", "Нет информации");
        //Проверка наличия иконки и кнопки вкладки "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-paperclip");
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.attach-title').should('be.visible')
        .should("contain.text", " Нет прикрепленных документов ");
        //Проверка наличия окна "Загрузить файл" на вкладке "Документы"
        cy.get('.files-area-container')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "files-area-container ng-star-inserted");
        //Проверка наличия надписей  "Загрузить файл" и "Нажмите или перетащите файл сюда"
        cy.get('.files-area-container .add-btn').should('be.visible')
        .should("contain.text", " Загрузить файл Нажмите или перетащите файл сюда");
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Включено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin ng-star-inserted");
        //Отключение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Выключено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin-off ng-star-inserted");
        //Включение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Закрытие боковой информационной панели
        cy.get('.close-btn').eq(1).click();
    });

    //-----Валидация полей и проверка рабоспособности вкладкой и пунктов меню в боковой информационной панели уровня 4 "Общество группы"
    it("should do field validation on S.I.P. society group", () => {
        cy.wait(500).reload();
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', 'Целевая программа Cypress Автотест').as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', '2023 ').as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('.item-panel').contains('.item-panel', 'КНИПИ ').as('Lvl-3');
        cy.get('@Lvl-3').find('.link-t4').click();
        cy.wait(500);
        //Выбор созданного проекта
        cy.get('.h2').wait(500).click();
        cy.wait(500);
        //Проверка наличия иконки и кнопки вкладки "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-information-outline");
        //Проверка наличия иконки "Общество группы"
        cy.get('app-project-title-block .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-og");
        //Проверка наличия наименования уровня проекта
        cy.get('.link-project-name').should('be.visible')
        .should("contain.text", "АО \«ИГиРГИ\»  / КНИПИ ");
        //Проверка наличия блока и дат выполнения уровня проекта
        cy.get('[blocktitle="Даты выполнения"]').should('be.visible')
        .should("contain.text", "Даты выполнения 01.01.2023 - 31.12.2023 ");
        //Проверка наличия блока, количества (план/факт) и процента исполнения договоров
        cy.get('[blocktitle="Количество договоров"]').should('be.visible')
        .should("contain.text", "Количество договоров10/20\n(50%)");
        //Проверка наличия блока и процента выполнения (план/факт)
        cy.get('app-simple-block').eq(2).should('be.visible')
        .should("contain.text", "Выполнение план/факт: 0%  0% ");
        //Проверка наличия "Крестика" закрытия боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn tab-icon mdi mdi-close ng-star-inserted");
        //Проверка наличия кнопки "Меню"
        cy.get('.menu').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "menu ng-star-inserted");
        //Открытие меню
        cy.get('.menu').click();
        //Проверка первой вкладки "Редактировать"
        cy.get('.menu-items li').eq(0)
        .should('be.visible').should("contain.text", "Редактировать");
        //Проверка второй вкладки "История изменений"
        cy.get('.menu-items li').eq(1)
        .should('be.visible').should("contain.text", "История изменений");
        //Проверка третьей вкладки "Удалить"
        cy.get('.menu-items li').eq(2)
        .should('be.visible').should("contain.text", "Удалить");
        //Проверка наличия "Крестика" закрытия меню
        cy.get('.sidebar-detail .close-btn').eq(0)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn mdi mdi-close");
        //Закрытие меню
        cy.get('.sidebar-detail .close-btn').eq(0).click();
        //Проверка наличия иконки и кнопки вкладки "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-alert");
        //Переход на вкладку "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon').click();
        //Проверка наименования раздела боковой информационной панели и предупреждения о невозможности создания риска на данном уровне
        cy.get('app-project-risks .title')
        .should("contain.text", " Риски  Добавить риски можно  только на шестом уровне. ");
        //Проверка наличия и отображения первого риска
        cy.get('app-risk-item2').eq(0).should('be.visible');
        //Проверка отображения наименования 6 уровня пароекта у первого риска
        cy.get('app-risk-item2 .risk-title').contains('.risk-title', "9.2. Поверка измерительной системы")
        .should("contain.text", " 9.2. Поверка измерительной системы ");
        //Проверка отображения степени критичности риска
        cy.get('app-risk-item2').contains('.title-block', " 9.2. Поверка измерительной системы").find('span')
        .should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "risks-degree mdi mdi-alert risk-degree-medium");
        //Проверка отображения статуса первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', '9.2. Поверка измерительной системы').find('.status')
        .should("contain.text", " Статус: Наследуемый");
        //Проверка отображения описания первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "9.2. Поверка измерительной системы").as('riskInfo');
        cy.get('@riskInfo').find('.description')
        .should("contain.text", " Риск срыва сроков завершения ПНР из-за отсутствия МТР для выполнения СМР со стороны ОГ.  ");
        //Проверка отображения этапа реализации первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(0)
        .should("contain.text", "Этап реализации: СМР");
        //Проверка отображения ответственного за первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(1)
        .should("contain.text", "Ответственный за риск: ОГ");
        //Проверка отображения системной причины первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(2)
        .should("contain.text", "Системная причина риска: Несвоевременное обеспечение Подрядчика материалами.");
        //Проверка отображения возможного смещения сроков первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(3)
        .should("contain.text", " Возможное смещение сроков: 01.05.2024 ");
        //Проверка отображения даты выявления первого риска
        cy.get('@riskInfo').find('.secondary-info div').eq(4)
        .should("contain.text", " Дата выявления риска: 01.02.2023 ");
        //Проверка наличия и отображения второго риска
        cy.get('app-risk-item2').eq(1).should('be.visible');
        //Проверка наличия иконки и кнопки вкладки "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon')
        .should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-calendar-check");
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения наименования раздела "Мероприятия"
        cy.get('app-project-events .title').should("contain.text", " Мероприятия ");        
        //Проверка отображения кнопки добавить мероприятие
        cy.get('app-project-events .add-btn')
        .should('be.visible');
        //Открытие диалогового окна добавления мероприятия
        cy.get('app-project-events .add-btn').click();
        //Проверка отображения диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag').should('be.visible');
        //Закрытие диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag .close-btn').click();
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.actual-info-editor').should('be.visible')
        .should("contain.text", "Нет информации");
        //Проверка наличия иконки и кнопки вкладки "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-paperclip");
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.attach-title').should('be.visible')
        .should("contain.text", " Нет прикрепленных документов ");
        //Проверка наличия окна "Загрузить файл" на вкладке "Документы"
        cy.get('.files-area-container')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "files-area-container ng-star-inserted");
        //Проверка наличия надписей  "Загрузить файл" и "Нажмите или перетащите файл сюда"
        cy.get('.files-area-container .add-btn').should('be.visible')
        .should("contain.text", " Загрузить файл Нажмите или перетащите файл сюда");
        //Проверка наличия иконки и кнопки вкладки "Бюджеты"
        cy.get('[apptooltip="Бюджеты"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-currency-rub");
        //Переход на вкладку "Бюджеты"
        cy.get('[apptooltip="Бюджеты"] .tab-icon').click();
        cy.wait(500);
        //Проверка наличия наименования вкладки "Бюджеты"
        cy.get('app-tab-budgets2 .title')
        .should('be.visible').should("contain.text", "Бюджет");
        //Проверка проверка отображения наименования раздела "Освоение, тыс. руб:"
        cy.get('[infotitle="Освоение"] .budget-title')
        .should('be.visible').should("contain.text", "Освоение, тыс руб:");
        //Проверка отображения значка отклонения План-Факта Освоение
        cy.get('[infotitle="Освоение"] .budget-alert')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "budget-alert mdi mdi-alert ng-star-inserted");
        //Проверка отображения наименования поля и его значения (Факт КВ) Освоение
        cy.get('[infotitle="Освоение"] .title-value-block').eq(0)
        .should('be.visible').should("contain.text", "Бюджет КВ (Факт)111\u00a0502,93");
        //Проверка отображения наименования поля (План КВ) Освоение
        cy.get('[infotitle="Освоение"] .title-value-block .title-block').eq(2)
        .should('be.visible').should("contain.text", "Бюджет КВ (План)");
        //Проверка отображения значения поля (План КВ) Освоение
        cy.get('[infotitle="Освоение"] .title-value-block .value-block').eq(2)
        .should('be.visible').should("contain.text", "144\u00a0124,94");
        //Проверка отображения отклонения значения (План КВ) Освоение
        cy.get('[infotitle="Освоение"] .badge')
        .should('be.visible').should("contain.text", "+10% ");
        //Проверка отображения наименования поля и его значения (План СПМ) Освоение
        cy.get('[infotitle="Освоение"] .title-value-block').eq(3)
        .should("contain.text", "План СпМ130\u00a0578,00");
        //Проверка отображения наименования поля и его значения (Прогноз) Освоение
        cy.get('[infotitle="Освоение"] .title-value-block').eq(1)
        .should("contain.text", "Прогноз137\u00a0763,00");
        //Проверка проверка отображения наименования раздела "Финансирование, тыс. руб:"
        cy.get('[infotitle="Финансирование"] .budget-title')
        .should("contain.text", "Финансирование, тыс руб:");
        //Проверка отображения значка отклонения План-Факта Финансирование
        cy.get('[infotitle="Освоение"] .budget-alert')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "budget-alert mdi mdi-alert ng-star-inserted");
        //Проверка отображения наименования поля и его значения (Факт КВ) Финансирование
        cy.get('[infotitle="Финансирование"] .title-value-block').eq(0)
        .should('be.visible').should("contain.text", "Бюджет КВ (Факт)111\u00a0710,44");
        //Проверка отображения наименования поля (План КВ) Финансирование
        cy.get('[infotitle="Финансирование"] .title-value-block .title-block').eq(2)
        .should('be.visible').should("contain.text", "Бюджет КВ (План)");
        //Проверка отображения значения поля (План КВ) Финансирование
        cy.get('[infotitle="Финансирование"] .title-value-block .value-block').eq(2)
        .should('be.visible').should("contain.text", "166\u00a0976,00");
        //Проверка отображения отклонения значения (План КВ) Финансирование
        cy.get('[infotitle="Финансирование"] .badge')
        .should('be.visible').should("contain.text", "+12% ");
        //Проверка отображения наименования поля и его значения (План СПМ) Финансирование
        cy.get('[infotitle="Финансирование"] .title-value-block').eq(3)
        .should('be.visible').should("contain.text", "План СпМ149\u00a0334,00");
        //Проверка отображения наименования поля и его значения (Прогноз) Финансирование
        cy.get('[infotitle="Финансирование"] .title-value-block').eq(1)
        .should('be.visible').should("contain.text", "Прогноз166\u00a0976,00");
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Включено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin ng-star-inserted");
        //Отключение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Выключено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin-off ng-star-inserted");
        //Включение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Закрытие боковой информационной панели
        cy.get('.close-btn').eq(1).click();
    });

    //-----Валидация полей и проверка рабоспособности вкладок и пунктов меню в боковой информационной панели уровня 5 "Объект под реализацию"
    it("should do field validation on S.I.P. object under implementation", () => {
        cy.wait(500).reload();
        cy.wait(500);
        //Выбор созданного проекта уровня Направление
        cy.get('.titles-block').contains('.titles-block', "Целевая программа Cypress Автотест").as('lvl1');
        //Переход к дочернему уровню "Год"
        cy.get('@lvl1').find('.link-t3').click();
        //Выбор созданного проекта уровня Год
        cy.get('app-plate-item-year').contains('app-plate-item-year', "2023 ").as('lvl2');
        //Переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('@lvl2').find('.link-t4').click();
        //Выбор созданного проекта
        cy.get('.item-panel').contains('.item-panel', "КНИПИ ").as('lvL3');
        //Переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('@lvL3').find('[class="link-t4 sub-projects"]').click();
        //Выбор созданного проекта уровня ОГ
        cy.get('.item-panel').contains('.item-panel', "АО \«ИГиРГИ\» ").as('lvL4');
        //Переход к дочерним уровням "Объект под реализацию", "Исполнение поручений", "Справочно"
        cy.get('@lvL4').find('.link-t4').click();
        cy.wait(500);
        //Выбор созданного проекта уровня Объект под реализацию
        cy.get('.h2').contains('.h2', "1.3.7. Приобретение оборудования взамен устаревшег... ").as('lvl5-1');
        cy.get('@lvl5-1').wait(500).click();
        cy.wait(500);
        //Проверка наличия иконки и кнопки вкладки "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-information-outline");
        //Проверка наличия иконки "Объект под реализацию"
        cy.get('app-project-title-block .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-object");
        //Проверка наличия наименования проуровня проекта
        cy.get('.link-project-name').should('be.visible')
        .should("contain.text", "ИУ 1.3.7. Приобретение оборудования взамен устаревшег... ");
        //Проверка наличия блока и дат выполнения уровня проекта
        cy.get('[blocktitle="Даты выполнения"]').should('be.visible')
        .should("contain.text", "Даты выполнения 01.01.2023 - 31.12.2023 Наиболее критичное\n");
        //Проверка наличия блока и процента выполнения (план/факт)
        cy.get('app-simple-block').eq(2).should('be.visible')
        .should("contain.text", "Выполнение план/факт: 0%  0% ");
        //Проверка наличия "Крестика" закрытия боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn tab-icon mdi mdi-close ng-star-inserted");
        //Проверка наличия кнопки "Меню"
        cy.get('.menu').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "menu ng-star-inserted");
        //Открытие меню
        cy.get('.menu').click();
        //Проверка первой вкладки "Редактировать"
        cy.get('.menu-items li').eq(0)
        .should('be.visible').should("contain.text", "Редактировать");
        //Проверка второй вкладки "История изменений"
        cy.get('.menu-items li').eq(1)
        .should('be.visible').should("contain.text", "История изменений");
        //Проверка третьей вкладки "Удалить"
        cy.get('.menu-items li').eq(2)
        .should('be.visible').should("contain.text", "Удалить");
        //Проверка наличия "Крестика" закрытия меню
        cy.get('.sidebar-detail .close-btn').eq(0)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn mdi mdi-close");
        //Закрытие меню
        cy.get('.sidebar-detail .close-btn').eq(0).click();
        //Проверка наличия иконки и кнопки вкладки "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-alert");
        //Переход на вкладку "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon').click();
        //Проверка наименования раздела боковой информационной панели и предупреждения о невозможности создания риска на данном уровне
        cy.get('app-project-risks .title')
        .should("contain.text", " Риски  Добавить риски можно  только на шестом уровне. ");
        //Проверка наличия и отображения первого риска
        cy.get('app-risk-item2').eq(0).should('be.visible');
        //Проверка отображения наименования 6 уровня пароекта у первого риска
        cy.get('app-risk-item2 .risk-title').contains('.risk-title', "9.2. Поверка измерительной системы")
        .should("contain.text", " 9.2. Поверка измерительной системы ");
        //Проверка отображения степени критичности риска
        cy.get('app-risk-item2').contains('.title-block', "9.2. Поверка измерительной системы").find('span')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "risks-degree mdi mdi-alert risk-degree-medium");
        //Проверка отображения статуса первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "9.2. Поверка измерительной системы").find('.status')
        .should("contain.text", " Статус: Наследуемый");
        //Проверка отображения описания первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "9.2. Поверка измерительной системы").as('riskInfo');
        cy.get('@riskInfo').find('.description')
        .should("contain.text", " Риск срыва сроков завершения ПНР из-за отсутствия МТР для выполнения СМР со стороны ОГ.  ");
        //Проверка отображения этапа реализации первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(0)
        .should("contain.text", "Этап реализации: СМР");
        //Проверка отображения ответственного за первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(1)
        .should("contain.text", "Ответственный за риск: ОГ");
        //Проверка отображения системной причины первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(2)
        .should("contain.text", "Системная причина риска: Несвоевременное обеспечение Подрядчика материалами.");
        //Проверка отображения возможного смещения сроков первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(3)
        .should("contain.text", " Возможное смещение сроков: 01.05.2024 ");
        //Проверка отображения даты выявления первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(4)
        .should("contain.text", " Дата выявления риска: 01.02.2023 ");
        //Проверка наличия иконки и кнопки вкладки "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon')
        .should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-calendar-check");
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения наименования раздела "Мероприятия"
        cy.get('app-project-events .title').should("contain.text", " Мероприятия ");        
        //Проверка отображения кнопки добавить мероприятие
        cy.get('app-project-events .add-btn')
        .should('be.visible');
        //Открытие диалогового окна добавления мероприятия
        cy.get('app-project-events .add-btn').click();
        //Проверка отображения диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag').should('be.visible');
        //Закрытие диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag .close-btn').click();
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.actual-info-editor').should('be.visible')
        .should("contain.text", "Нет информации");
        //Проверка наличия иконки и кнопки вкладки "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-paperclip");
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.attach-title').should('be.visible')
        .should("contain.text", " Нет прикрепленных документов ");
        //Проверка наличия окна "Загрузить файл" на вкладке "Документы"
        cy.get('.files-area-container')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "files-area-container ng-star-inserted");
        //Проверка наличия надписей  "Загрузить файл" и "Нажмите или перетащите файл сюда"
        cy.get('.files-area-container .add-btn').should('be.visible')
        .should("contain.text", " Загрузить файл Нажмите или перетащите файл сюда");
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Включено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin ng-star-inserted");
        //Отключение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Выключено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin-off ng-star-inserted");
        //Включение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Закрытие боковой информационной панели
        cy.get('.close-btn').eq(1).click();
    });

    //-----Валидация полей и проверка рабоспособности вкладок и пунктов меню в боковой информационной панели уровня 5 "Поручения"
    it("should do field validation on S.I.P. execution of assignment", () => {
        cy.wait(500).reload();
        cy.wait(500);
        //Выбор созданного проекта уровня Направление
        cy.get('.titles-block').contains('.titles-block', "Целевая программа Cypress Автотест").as('lvl1');
        //Переход к дочернему уровню "Год"
        cy.get('@lvl1').find('.link-t3').click();
        //Выбор созданного проекта уровня Год
        cy.get('app-plate-item-year').contains('app-plate-item-year', "2023 ").as('lvl2');
        //Переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('@lvl2').find('.link-t4').click();
        //Выбор созданного проекта
        cy.get('.item-panel').contains('.item-panel', "КНИПИ ").as('lvL3');
        //Переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('@lvL3').find('[class="link-t4 sub-projects"]').click();
        //Выбор созданного проекта уровня ОГ
        cy.get('.item-panel').contains('.item-panel', "АО \«ИГиРГИ\» ").as('lvL4')
        //Переход к дочерним уровням "Объект под реализацию", "Исполнение поручений", "Справочно"
        cy.get('@lvL4').find('.link-t4').click();
        cy.wait(500);
        //Выбор созданного проекта уровня Исполнение поручений
        cy.get('.h2').contains('.h2', "Статистика исполнения поручений оперативных совеща... ").as('lvl5-2');
        cy.get('@lvl5-2').wait(500).click();
        cy.wait(500);
        //Проверка наличия иконки и кнопки вкладки "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-information-outline");
        //Проверка наличия иконки "Поручение"
        cy.get('app-project-title-block .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-order-execution");
        //Проверка наличия наименования уровня проекта
        cy.get('.link-project-name').should('be.visible')
        .should("contain.text", "Статистика исполнения поручений оперативных совеща... ");
        //Проверка наличия блока и дат выполнения уровня проекта
        cy.get('[blocktitle="Даты выполнения"]').should('be.visible')
        .should("contain.text", "Даты выполнения 01.01.2023 - 31.12.2023 не определено\n");
        //Проверка наличия блока и процента выполнения (план/факт)
        cy.get('app-simple-block').eq(2).should('be.visible')
        .should("contain.text", "Выполнение план/факт: 0%  0% ");
        //Проверка наличия "Крестика" закрытия боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn tab-icon mdi mdi-close ng-star-inserted");
        //Проверка наличия кнопки "Меню"
        cy.get('.menu').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "menu ng-star-inserted");
        //Открытие меню
        cy.get('.menu').click();
        //Проверка первой вкладки "Редактировать"
        cy.get('.menu-items li').eq(0)
        .should('be.visible').should("contain.text", "Редактировать");
        //Проверка второй вкладки "История изменений"
        cy.get('.menu-items li').eq(1)
        .should('be.visible').should("contain.text", "История изменений");
        //Проверка третьей вкладки "Удалить"
        cy.get('.menu-items li').eq(2)
        .should('be.visible').should("contain.text", "Удалить");
        //Проверка наличия "Крестика" закрытия меню
        cy.get('.sidebar-detail .close-btn').eq(0)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn mdi mdi-close");
        //Закрытие меню
        cy.get('.sidebar-detail .close-btn').eq(0).click();
        //Проверка наличия иконки и кнопки вкладки "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon')
        .should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-calendar-check");
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения наименования раздела "Мероприятия"
        cy.get('app-project-events .title').should("contain.text", " Мероприятия ");        
        //Проверка отображения кнопки добавить мероприятие
        cy.get('app-project-events .add-btn')
        .should('be.visible');
        //Открытие диалогового окна добавления мероприятия
        cy.get('app-project-events .add-btn').click();
        //Проверка отображения диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag').should('be.visible');
        //Закрытие диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag .close-btn').click();
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.actual-info-editor').should('be.visible')
        .should("contain.text", "Нет информации");
        ///Проверка наличия иконки и кнопки вкладки "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-paperclip");
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.attach-title').should('be.visible')
        .should("contain.text", " Нет прикрепленных документов ");
        //Проверка наличия окна "Загрузить файл" на вкладке "Документы"
        cy.get('.files-area-container')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "files-area-container ng-star-inserted");
        //Проверка наличия надписей  "Загрузить файл" и "Нажмите или перетащите файл сюда"
        cy.get('.files-area-container .add-btn').should('be.visible')
        .should("contain.text", " Загрузить файл Нажмите или перетащите файл сюда");
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Включено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin ng-star-inserted");
        //Отключение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Выключено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin-off ng-star-inserted");
        //Включение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Закрытие боковой информационной панели
        cy.get('.close-btn').eq(1).click();
    });

    //-----Валидация полей и проверка рабоспособности вкладок и пунктов меню в боковой информационной панели уровня 5 "Справочно"
    it("should do field validation on S.I.P. for reference", () => {
        cy.wait(500).reload();
        cy.wait(500);
        //Выбор созданного проекта уровня Направление
        cy.get('.titles-block').contains('.titles-block', "Целевая программа Cypress Автотест").as('lvl1');
        //Переход к дочернему уровню "Год"
        cy.get('@lvl1').find('.link-t3').click();
        //Выбор созданного проекта уровня Год
        cy.get('app-plate-item-year').contains('app-plate-item-year', "2023 ").as('lvl2');
        //Переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('@lvl2').find('.link-t4').click();
        //Выбор созданного проекта
        cy.get('.item-panel').contains('.item-panel', "КНИПИ ").as('lvL3');
        //Переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('@lvL3').find('[class="link-t4 sub-projects"]').click();
        //Выбор созданного проекта уровня ОГ
        cy.get('.item-panel').contains('.item-panel', "АО \«ИГиРГИ\» ").as('lvL4');
        //Переход к дочерним уровням "Объект под реализацию", "Исполнение поручений", "Справочно"
        cy.get('@lvL4').find('.link-t4').click();
        cy.wait(500);
        //Выбор созданного проекта уровня Справочно
        cy.get('.h2').contains('.h2', "1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ").as('lvl5-3');
        cy.get('@lvl5-3').wait(500).click();
        cy.wait(500);
        //Проверка наличия иконки и кнопки вкладки "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-information-outline");
        //Проверка наличия иконки "Справочно"
        cy.get('app-project-title-block .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-reference")
        //Проверка наличия наименования проуровня проекта
        cy.get('.link-project-name').should('be.visible')
        .should("contain.text", "1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ")
        //Проверка наличия блока и дат выполнения уровня проекта
        cy.get('[blocktitle="Даты выполнения"]').should('be.visible')
        .should("contain.text", "Даты выполнения 01.01.2023 - 31.12.2023 Наименее критичное\n")
        //Проверка наличия блока и процента выполнения (план/факт)
        cy.get('app-simple-block').eq(2).should('be.visible')
        .should("contain.text", "Выполнение план/факт: 0%  0% ")
        //Проверка наличия "Крестика" закрытия боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn tab-icon mdi mdi-close ng-star-inserted");
        //Проверка наличия кнопки "Меню"
        cy.get('.menu').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "menu ng-star-inserted");
        //Открытие меню
        cy.get('.menu').click();
        //Проверка первой вкладки "Редактировать"
        cy.get('.menu-items li').eq(0)
        .should('be.visible').should("contain.text", "Редактировать");
        //Проверка второй вкладки "История изменений"
        cy.get('.menu-items li').eq(1)
        .should('be.visible').should("contain.text", "История изменений");
        //Проверка третьей вкладки "Удалить"
        cy.get('.menu-items li').eq(2)
        .should('be.visible').should("contain.text", "Удалить");
        //Проверка наличия "Крестика" закрытия меню
        cy.get('.sidebar-detail .close-btn').eq(0)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn mdi mdi-close");
        //Закрытие меню
        cy.get('.sidebar-detail .close-btn').eq(0).click();
        //Проверка наличия иконки и кнопки вкладки "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-alert");
        //Переход на вкладку "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon').click();
        //Проверка наименования раздела боковой информационной панели и предупреждения о невозможности создания риска на данном уровне
        cy.get('app-project-risks .title')
        .should("contain.text", " Риски  Добавить риски можно  только на шестом уровне. ");
        //Проверка наличия и отображения первого риска
        cy.get('app-risk-item2').eq(0).should('be.visible');
        //Проверка отображения наименования 6 уровня пароекта у первого риска
        cy.get('app-risk-item2 .risk-title').contains('.risk-title', "8. Пусконаладочные работы и опытно промышленная эксплуатация")
        .should("contain.text", " 8. Пусконаладочные работы и опытно промышленная эксплуатация");
        //Проверка отображения степени критичности риска
        cy.get('app-risk-item2').contains('.title-block', "8. Пусконаладочные работы и опытно промышленная эксплуатация").find('span')
        .should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "risks-degree mdi mdi-alert risk-degree-high");
        //Проверка отображения статуса первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "8. Пусконаладочные работы и опытно промышленная эксплуатация").find('.status')
        .should("contain.text", " Статус: Активный");
        //Проверка отображения описания первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "8. Пусконаладочные работы и опытно промышленная эксплуатация").as('riskInfo')
        cy.get('@riskInfo').find('.description')
        .should("contain.text", " Риск непоставки лабораторного оборудования в 2022 году. ");
        //Проверка отображения этапа реализации первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(0)
        .should("contain.text", "Этап реализации: Закупки");
        //Проверка отображения ответственного за первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(1)
        .should("contain.text", "Ответственный за риск: ЕОС ИТ");
        //Проверка отображения системной причины первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(2)
        .should("contain.text", "Системная причина риска: Срыв сроков проведения этапов закупки.");
        //Проверка отображения возможного смещения сроков первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(3)
        .should("contain.text", " Возможное смещение сроков: 01.05.2024 ");
        //Проверка отображения даты выявления первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(4)
        .should("contain.text", " Дата выявления риска: 01.02.2023 ");
        //Проверка наличия иконки и кнопки вкладки "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon')
        .should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-calendar-check");
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения наименования раздела "Мероприятия"
        cy.get('app-project-events .title').should("contain.text", " Мероприятия ");        
        //Проверка отображения кнопки добавить мероприятие
        cy.get('app-project-events .add-btn')
        .should('be.visible');
        //Открытие диалогового окна добавления мероприятия
        cy.get('app-project-events .add-btn').click();
        //Проверка отображения диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag').should('be.visible');
        //Закрытие диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag .close-btn').click();
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.actual-info-editor').should('be.visible')
        .should("contain.text", "Нет информации");
        //Проверка наличия иконки и кнопки вкладки "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-paperclip");
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.attach-title').should('be.visible')
        .should("contain.text", " Нет прикрепленных документов ");
        //Проверка наличия окна "Загрузить файл" на вкладке "Документы"
        cy.get('.files-area-container')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "files-area-container ng-star-inserted");
        //Проверка наличия надписей  "Загрузить файл" и "Нажмите или перетащите файл сюда"
        cy.get('.files-area-container .add-btn').should('be.visible')
        .should("contain.text", " Загрузить файл Нажмите или перетащите файл сюда");
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Включено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin ng-star-inserted");
        //Отключение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Выключено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin-off ng-star-inserted");
        //Включение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Закрытие боковой информационной панели
        cy.get('.close-btn').eq(1).click();
    });

    //-----Валидация полей и проверка рабоспособности вкладок и пунктов меню в боковой информационной панели уровня 6 "Этап реализации объекта" для 5 уровня "Объект под реализацию"
    it("should do field validation on S.I.P. object implementation stage for object under implementation", () => {
        cy.wait(500).reload();
        cy.wait(500);
        //Выбор созданного проекта уровня Направление
        cy.get('.titles-block').contains('.titles-block', "Целевая программа Cypress Автотест").as('lvl1');
        //Переход к дочернему уровню "Год"
        cy.get('@lvl1').find('.link-t3').click();
        //Выбор созданного проекта уровня Год
        cy.get('app-plate-item-year').contains('app-plate-item-year', "2023 ").as('lvl2');
        //Переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('@lvl2').find('.link-t4').click();
        //Выбор созданного проекта
        cy.get('.item-panel').contains('.item-panel', "КНИПИ ").as('lvL3');
        //Переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('@lvL3').find('[class="link-t4 sub-projects"]').click();
        //Выбор созданного проекта уровня ОГ
        cy.get('.item-panel').contains('.item-panel', "АО \«ИГиРГИ\» ").as('lvL4');
        //Переход к дочерним уровням "Объект под реализацию", "Исполнение поручений", "Справочно"
        cy.get('@lvL4').find('.link-t4').click();
        //Выбор созданного проекта
        cy.get('.item-panel').contains('.item-panel', "1.3.7. Приобретение оборудования взамен устаревшег... ").as('lvL5-1');
        //Переход к дочернему уровню "Этап реализации объекта" для "Объекта под реализацию"
        cy.get('@lvL5-1').find('[class="link-t4 sub-projects"]').click();
        //Выбор созданного проекта
        cy.get('.h2').contains('.h2', "9.2. Поверка измерительной системы ").as('lvL6-1');
        cy.get('@lvL6-1').wait(500).click();
        cy.wait(500);
        //Проверка наличия иконки и кнопки вкладки "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-information-outline");
        //Проверка наличия иконки "Этап реализации объекта"
        cy.get('app-project-title-block .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-stage");
        //Проверка наличия наименования уровня проекта
        cy.get('.link-project-name').should('be.visible')
        .should("contain.text", "9.2. Поверка измерительной системы  / ИУ 1.3.7. Приобретение оборудования взамен устаревшег... ");
        //Проверка наличия и отображения статуса уровня проекта
        cy.get('app-tab-general-info .current-status')
        .should('be.visible').should("contain.text", "Исполнение ");
        //Проверка наличия блока и дат выполнения уровня проекта
        cy.get('[blocktitle="Даты выполнения"]').should('be.visible')
        .should("contain.text", "Даты выполнения 01.01.2023 - 31.12.2023");
        //Проверка наличия блока и ... вместо значения фактической даты
        cy.get('[blocktitle="Фактическая дата выполнения"]')
        .should('be.visible').should("contain.text", "  ...  ");
        //Проверка наличия "Крестика" закрытия боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn tab-icon mdi mdi-close ng-star-inserted");
        //Проверка наличия кнопки "Меню"
        cy.get('.menu').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "menu ng-star-inserted");
        //Открытие меню
        cy.get('.menu').click();
        //Проверка первой вкладки "Редактировать"
        cy.get('.menu-items li').eq(0)
        .should('be.visible').should("contain.text", "Редактировать");
        //Проверка второй вкладки "История изменений"
        cy.get('.menu-items li').eq(1)
        .should('be.visible').should("contain.text", "История изменений");
        //Проверка третьей вкладки "Удалить"
        cy.get('.menu-items li').eq(2)
        .should('be.visible').should("contain.text", "Удалить");
        //Проверка наличия "Крестика" закрытия меню
        cy.get('.sidebar-detail .close-btn').eq(0)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn mdi mdi-close");
        //Закрытие меню
        cy.get('.sidebar-detail .close-btn').eq(0).click();
        //Проверка наличия иконки и кнопки вкладки "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-alert");
        //Переход на вкладку "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon').click();
        //Проверка наименования раздела боковой информационной панели
        cy.get('app-project-risks .title').should('be.visible')
        .should("contain.text", " Риски ");
        //Открытие диалогового окна "Добавить риск"
        cy.get('.title .add-btn').click();
        //Проверка наличия открытого диалогвого окна "Добавить риск"
        cy.get('app-dialog-risk-edit')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "ng-star-inserted")
        //Закрытие диалогового окна "Добавить риск"
        cy.get('.buttons [type="button"]').click()
        //Проверка наличия и отображения первого риска
        cy.get('app-risk-item2').eq(0).should('be.visible');
        //Проверка отображения наименования 6 уровня пароекта у первого риска
        cy.get('app-risk-item2 .risk-title').contains('.risk-title', "9.2. Поверка измерительной системы")
        .should('be.visible').should("contain.text", " 9.2. Поверка измерительной системы ");
        //Проверка отображения степени критичности риска
        cy.get('app-risk-item2').contains('.title-block', "9.2. Поверка измерительной системы").find('.risks-degree')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "risks-degree mdi mdi-alert risk-degree-medium");
        //Проверка отображения статуса первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "9.2. Поверка измерительной системы").find('.status')
        .should('be.visible').should("contain.text", " Статус: Наследуемый");
        //Проверка отображения описания первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "9.2. Поверка измерительной системы").as('riskInfo')
        cy.get('@riskInfo').find('.description').should('be.visible')
        .should("contain.text", " Риск срыва сроков завершения ПНР из-за отсутствия МТР для выполнения СМР со стороны ОГ.  ");       
        //Проверка отображения этапа реализации первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(0)
        .should('be.visible').should("contain.text", "Этап реализации: СМР");
        //Проверка отображения ответственного за первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(1)
        .should('be.visible').should("contain.text", "Ответственный за риск: ОГ");
        //Проверка отображения системной причины первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(2)
        .should('be.visible').should("contain.text", "Системная причина риска: Несвоевременное обеспечение Подрядчика материалами.");
        //Проверка отображения возможного смещения сроков первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(3)
        .should('be.visible').should("contain.text", " Возможное смещение сроков: 01.05.2024 ");
        //Проверка отображения даты выявления первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(4)
        .should('be.visible').should("contain.text", " Дата выявления риска: 01.02.2023 ");
        
        //Проверка наличия иконки и кнопки вкладки "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon')
        .should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-calendar-check");
	    //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения наименования раздела "Мероприятия"
        cy.get('app-project-events .title').should("contain.text", " Мероприятия ");  
        //Проверка отображения кнопки добавить мероприятие
        cy.get('app-project-events .add-btn')
        .should('be.visible');
        //Открытие диалогового окна добавления мероприятия
        cy.get('app-project-events .add-btn').click();
        //Проверка отображения диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag').should('be.visible');
        //Закрытие диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag .close-btn').click();
        //Проверка отображения первого мероприятия
        cy.get('app-event-item').eq(0).should('be.visible');
        //Проверка отображения кнопки "Редактировать" у первого мероприятия
        cy.get('app-event-item [apptooltip="Редактировать"]').should('be.visible')
        .should('have.attr', 'apptooltip').and('equal', "Редактировать");
        //Открытие диалогового окна "Редактировать мероприятие" первого мероприятия
        cy.get('app-event-item [apptooltip="Редактировать"]').eq(0).click();
        //Проверка отображения диалогового окна "Редактировать мероприятие" первого мероприятия
        cy.get('app-dialog-event-edit').should('be.visible');
        //Закрытие диалогового окна "Редактировать мероприятие" первого мероприятия
        cy.get('.cdk-drag .close-btn').click();
        //Проверка отображения кнопки "Удалить" у первого мероприятия
        cy.get('app-event-item [apptooltip="Удалить"]').should('be.visible')
        .should('have.attr', 'apptooltip').and('equal', "Удалить");
        //Проверка кликабельности кнопки "Удалить" у первого мероприятия
        cy.get('app-event-item [apptooltip="Удалить"]').eq(0).click();
        //Проверка отображения диалогового окна подтверждения удаления
        cy.get('.cdk-drag').should('be.visible');
        //Закрытие диалогового окна подтверждения удаления
        cy.get('.cdk-drag .close-btn').click();
        //Отображение даты и пометки "Присутствуют проблемы" первого мероприятия первого мероприятия
        cy.get('app-event-item .info-block').eq(0)
        .should("contain.text", " 28.02.2022 Присутствуют проблемы");
        //Проверка отображение даты и пометки "Присутствуют проблемы" первого мероприятия
        cy.get('app-event-item .info-block').eq(1)
        .should("contain.text", "Текущий статус Мероприятие тест Cypress ЭРО д...");
        //Проверка отображение "Красной" метки первого мероприятия
        cy.get('.label-color').eq(0)
        .should('be.visible').should('have.attr', 'style')
        .and('equal', "background-color: rgb(255, 131, 115);");
        //Проверка отображение типа первого мероприятия
        cy.get('.event-type').eq(0).should('be.visible')
        .should("contain.text", " Текущий статус ");
        //Проверка описания первого мероприятия
        cy.get('app-event-item .ng-star-inserted').contains(' В работе на текущую дату 2022 года ')
        .should('be.visible').should("contain.text", " В работе на текущую дату 2022 года ");
        //Проверка отображения второго мероприятия
        cy.get('app-event-item').eq(1).should('be.visible');
        
        //Проверка наличия иконки и кнопки вкладки "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-paperclip");
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.attach-title').should('be.visible')
        .should("contain.text", " Нет прикрепленных документов ");
        //Проверка наличия окна "Загрузить файл" на вкладке "Документы"
        cy.get('.files-area-container')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "files-area-container ng-star-inserted");
        //Проверка наличия надписей  "Загрузить файл" и "Нажмите или перетащите файл сюда"
        cy.get('.files-area-container .add-btn').should('be.visible')
        .should("contain.text", " Загрузить файл Нажмите или перетащите файл сюда");
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Включено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin ng-star-inserted");
        //Отключение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Выключено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin-off ng-star-inserted");
        //Включение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Закрытие боковой информационной панели
        cy.get('.close-btn').eq(1).click();
    });

    //-----Валидация полей и проверка рабоспособности вкладок и пунктов меню в боковой информационной панели уровня 6 "Поручение" для 5 уровня "Исполнение поручений"
    it("should do field validation on S.I.P. order", () => {
        cy.wait(500).reload();
        cy.wait(500);
        //Выбор созданного проекта уровня Направление
        cy.get('.titles-block').contains('.titles-block', "Целевая программа Cypress Автотест").as('lvl1');
        //Переход к дочернему уровню "Год"
        cy.get('@lvl1').find('.link-t3').click();
        //Выбор созданного проекта уровня Год
        cy.get('app-plate-item-year').contains('app-plate-item-year', "2023 ").as('lvl2');
        //Переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('@lvl2').find('.link-t4').click();
        //Выбор созданного проекта
        cy.get('.item-panel').contains('.item-panel', "КНИПИ ").as('lvL3');
        //Переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('@lvL3').find('[class="link-t4 sub-projects"]').click();
        //Выбор созданного проекта уровня ОГ
        cy.get('.item-panel').contains('.item-panel', "АО \«ИГиРГИ\» ").as('lvL4');
        //Переход к дочерним уровням "Объект под реализацию", "Исполнение поручений", "Справочно"
        cy.get('@lvL4').find('.link-t4').click();
        //Выбор созданного проекта
        cy.get('.item-panel').contains('.item-panel', "Статистика исполнения поручений оперативных совеща... ").as('lvL5-2');
        //Переход к дочернему уровню "Этап реализации объекта" для "Объекта под реализацию"
        cy.get('@lvL5-2').find('[class="link-t4 sub-projects"]').click();
        //Выбор созданного проекта
        cy.get('.h2').contains('.h2', "от 11.03.2021 № 45 п. 9 ").as('lvL6-2');
        cy.get('@lvL6-2').wait(500).click();
        cy.wait(500);
        //Проверка наличия иконки и кнопки вкладки "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-information-outline");
        //Проверка наличия иконки "Поручение"
        cy.get('app-project-title-block .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-order");
        //Проверка наличия наименования проуровня проекта
        cy.get('.link-project-name').should('be.visible')
        .should("contain.text", "от 11.03.2021 № 45 п. 9  / Статистика исполнения поручений оперативных совеща... ");
        //Проверка наличия и отображения статуса уровня проекта
        cy.get('app-sidebar-order .current-status')
        .should('be.visible').should("contain.text", "Исполнение ");
        //Проверка наличия блока и дат выполнения уровня проекта
        cy.get('[blocktitle="Даты выполнения"]').should('be.visible')
        .should("contain.text", "Даты выполнения 01.01.2023 - 31.12.2023");
        //Проверка наличия блока и процента выполнения (план/факт)
        cy.get('app-plan-fact-progress').should('be.visible')
        .should("contain.text", "Выполнение план/факт: 0%  0% ");
        //Проверка наличия и отображения блока "Описание"
        cy.get('[blocktitle="Описание"]').should('be.visible')
        .should('have.attr', 'blocktitle').and('equal', "Описание");
        //Проверка наличия "Крестика" закрытия боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn tab-icon mdi mdi-close ng-star-inserted");
        //Проверка наличия кнопки "Меню"
        cy.get('.menu').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "menu ng-star-inserted");
        //Открытие меню
        cy.get('.menu').click();
        //Проверка первой вкладки "Редактировать"
        cy.get('.menu-items li').eq(0)
        .should('be.visible').should("contain.text", "Редактировать");
        //Проверка второй вкладки "История изменений"
        cy.get('.menu-items li').eq(1)
        .should('be.visible').should("contain.text", "История изменений");
        //Проверка третьей вкладки "Удалить"
        cy.get('.menu-items li').eq(2)
        .should('be.visible').should("contain.text", "Удалить");
        //Проверка наличия "Крестика" закрытия меню
        cy.get('.sidebar-detail .close-btn').eq(0)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn mdi mdi-close");
        //Закрытие меню
        cy.get('.sidebar-detail .close-btn').eq(0).click();

        //Проверка наличия иконки и кнопки вкладки "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon')
        .should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-calendar-check");
	    //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения наименования раздела "Мероприятия"
        cy.get('app-project-events .title').should("contain.text", " Мероприятия ");  
        //Проверка отображения кнопки добавить мероприятие
        cy.get('app-project-events .add-btn')
        .should('be.visible');
        //Открытие диалогового окна добавления мероприятия
        cy.get('app-project-events .add-btn').click();
        //Проверка отображения диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag').should('be.visible');
        //Закрытие диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag .close-btn').click();
        //Проверка отображения первого мероприятия
        cy.get('app-event-item').eq(0).should('be.visible');
        //Проверка отображения кнопки "Редактировать" у первого мероприятия
        cy.get('app-event-item [apptooltip="Редактировать"]').should('be.visible')
        .should('have.attr', 'apptooltip').and('equal', "Редактировать");
        //Открытие диалогового окна "Редактировать мероприятие" первого мероприятия
        cy.get('app-event-item [apptooltip="Редактировать"]').eq(0).click();
        //Проверка отображения диалогового окна "Редактировать мероприятие" первого мероприятия
        cy.get('app-dialog-event-edit').should('be.visible');
        //Закрытие диалогового окна "Редактировать мероприятие" первого мероприятия
        cy.get('.cdk-drag .close-btn').click();
        //Проверка отображения кнопки "Удалить" у первого мероприятия
        cy.get('app-event-item [apptooltip="Удалить"]').should('be.visible')
        .should('have.attr', 'apptooltip').and('equal', "Удалить");
        //Проверка кликабельности кнопки "Удалить" у первого мероприятия
        cy.get('app-event-item [apptooltip="Удалить"]').eq(0).click();
        //Проверка отображения диалогового окна подтверждения удаления
        cy.get('.cdk-drag').should('be.visible');
        //Закрытие диалогового окна подтверждения удаления
        cy.get('.cdk-drag .close-btn').click();
        //Отображение даты и пометки "Присутствуют проблемы" первого мероприятия первого мероприятия
        cy.get('app-event-item .info-block').eq(0)
        .should("contain.text", " 28.02.2022 Присутствуют проблемы");
        //Проверка отображение даты и пометки "Присутствуют проблемы" первого мероприятия
        cy.get('app-event-item .info-block').eq(1)
        .should("contain.text", "Мероприятие тест Cypress ПОР для ИП");
        //Проверка отображение "Красной" метки первого мероприятия
        cy.get('.label-color').eq(0)
        .should('be.visible').should('have.attr', 'style')
        .and('equal', "background-color: rgb(255, 131, 115);");
        //Проверка отображение типа первого мероприятия
        cy.get('.event-type').eq(0).should('be.visible')
        .should("contain.text", " Совещание ");
        //Проверка описания первого мероприятия
        cy.get('app-event-item .ng-star-inserted').contains(' В работе на текущую дату 2022 года ')
        .should('be.visible').should("contain.text", " В работе на текущую дату 2022 года ");
        //Проверка отображения второго мероприятия
        cy.get('app-event-item').eq(1).should('be.visible');

        //Проверка наличия иконки и кнопки вкладки "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-paperclip");
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.attach-title').should('be.visible')
        .should("contain.text", " Нет прикрепленных документов ");
        //Проверка наличия окна "Загрузить файл" на вкладке "Документы"
        cy.get('.files-area-container')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "files-area-container ng-star-inserted");
        //Проверка наличия надписей  "Загрузить файл" и "Нажмите или перетащите файл сюда"
        cy.get('.files-area-container .add-btn').should('be.visible')
        .should("contain.text", " Загрузить файл Нажмите или перетащите файл сюда");
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Включено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin ng-star-inserted");
        //Отключение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Выключено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin-off ng-star-inserted");
        //Включение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Закрытие боковой информационной панели
        cy.get('.close-btn').eq(1).click();
    });

    //-----Валидация полей и проверка рабоспособности вкладок и пунктов меню в боковой информационной панели уровня 6 "Этап реализации объекта" для уровня 5 "Справочно"
    it("should do field validation on S.I.P. object implementation stage for reference", () => {
        cy.wait(500).reload();
        cy.wait(500);
        //Выбор созданного проекта уровня Направление
        cy.get('.titles-block').contains('.titles-block', "Целевая программа Cypress Автотест").as('lvl1');
        //Переход к дочернему уровню "Год"
        cy.get('@lvl1').find('.link-t3').click();
        //Выбор созданного проекта уровня Год
        cy.get('app-plate-item-year').contains('app-plate-item-year', "2023 ").as('lvl2');
        //Переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('@lvl2').find('.link-t4').click();
        //Выбор созданного проекта
        cy.get('.item-panel').contains('.item-panel', "КНИПИ ").as('lvL3');
        //Переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('@lvL3').find('[class="link-t4 sub-projects"]').click();
        //Выбор созданного проекта уровня ОГ
        cy.get('.item-panel').contains('.item-panel', "АО \«ИГиРГИ\» ").as('lvL4');
        //Переход к дочерним уровням "Объект под реализацию", "Исполнение поручений", "Справочно"
        cy.get('@lvL4').find('.link-t4').click();
        //Выбор созданного проекта
        cy.get('.item-panel').contains('.item-panel', "1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ").as('lvL5-3');
        //Переход к дочернему уровню "Этап реализации объекта" для "Объекта под реализацию"
        cy.get('@lvL5-3').find('[class="link-t4 sub-projects"]').click();
        //Выбор созданного проекта
        cy.get('.h2').contains('.h2', "8. Пусконаладочные работы и опытно промышленная эк... ").as('lvL6-3');
        cy.get('@lvL6-3').wait(500).click();
        cy.wait(500);
        //Проверка наличия иконки и кнопки вкладки "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-information-outline");
        //Проверка наличия иконки "Этап реализации объекта"
        cy.get('app-project-title-block .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-stage");
        //Проверка наличия наименования проуровня проекта
        cy.get('.link-project-name').should('be.visible')
        .should("contain.text", "8. Пусконаладочные работы и опытно промышленная эк...  / 1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ");
        //Проверка наличия и отображения статуса уровня проекта
        cy.get('app-sidebar-stage .current-status')
        .should("contain.text", "Исполнение ");
        //Проверка наличия блока и дат выполнения уровня проекта
        cy.get('[blocktitle="Даты выполнения"]').should('be.visible')
        .should("contain.text", "Даты выполнения 01.01.2023 - 31.12.2023");
        //Проверка наличия блока и ... вместо значения фактической даты
        cy.get('[blocktitle="Фактическая дата выполнения"]')
        .should("contain.text", "  ...  ");
        //Проверка наличия "Крестика" закрытия боковой информационной панели
        cy.get('.sidebar-detail .close-btn').eq(1)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn tab-icon mdi mdi-close ng-star-inserted");
        //Проверка наличия кнопки "Меню"
        cy.get('.menu').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "menu ng-star-inserted");
        //Открытие меню
        cy.get('.menu').click();
        //Проверка первой вкладки "Редактировать"
        cy.get('.menu-items li').eq(0)
        .should('be.visible').should("contain.text", "Редактировать");
        //Проверка второй вкладки "История изменений"
        cy.get('.menu-items li').eq(1)
        .should('be.visible').should("contain.text", "История изменений");
        //Проверка третьей вкладки "Удалить"
        cy.get('.menu-items li').eq(2)
        .should('be.visible').should("contain.text", "Удалить");
        //Проверка наличия "Крестика" закрытия меню
        cy.get('.sidebar-detail .close-btn').eq(0)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "close-btn mdi mdi-close");
        //Закрытие меню
        cy.get('.sidebar-detail .close-btn').eq(0).click();
        //Проверка наличия иконки и кнопки вкладки "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-alert");
        //Переход на вкладку "Риски"
        cy.get('[apptooltip="Риски"] .tab-icon').click();
        //Проверка наименования раздела боковой информационной панели и предупреждения о невозможности создания риска на данном уровне
        cy.get('app-project-risks .title').should('be.visible')
        .should("contain.text", " Риски ");
        //Открытие диалогового окна "Добавить риск"
        cy.get('.title .add-btn').click();
        //Проверка наличия открытого диалогвого окна "Добавить риск"
        cy.get('app-dialog-risk-edit').should('be.visible')
        //Закрытие диалогового окна "Добавить риск"
        cy.get('.buttons [type="button"]').click();
        //Проверка наличия и отображения первого риска
        cy.get('app-risk-item2').eq(0).should('be.visible');
        //Проверка отображения наименования 6 уровня пароекта у первого риска
        cy.get('app-risk-item2 .risk-title').contains('.risk-title', "8. Пусконаладочные работы и опытно промышленная эксплуатация")
        .should('be.visible').should("contain.text", " 8. Пусконаладочные работы и опытно промышленная эксплуатация");
        //Проверка отображения степени критичности риска
        cy.get('app-risk-item2').contains('.title-block', "8. Пусконаладочные работы и опытно промышленная эксплуатация").find('.risks-degree')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "risks-degree mdi mdi-alert risk-degree-high");
        //Проверка отображения статуса первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "8. Пусконаладочные работы и опытно промышленная эксплуатация").find('.status')
        .should('be.visible').should("contain.text", " Статус: Активный");
        //Проверка отображения описания первого риска
        cy.get('app-risk-item2').contains('app-risk-item2', "8. Пусконаладочные работы и опытно промышленная эксплуатация").as('riskInfo')
        cy.get('@riskInfo').find('.description')
        .should('be.visible').should("contain.text", " Риск непоставки лабораторного оборудования в 2022 году. ");
        //Проверка отображения этапа реализации первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(0)
        .should('be.visible').should("contain.text", "Этап реализации: Закупки");
        //Проверка отображения ответственного за первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(1)
        .should('be.visible').should("contain.text", "Ответственный за риск: ЕОС ИТ");
        //Проверка отображения системной причины первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(2)
        .should('be.visible').should("contain.text", "Системная причина риска: Срыв сроков проведения этапов закупки.");
        //Проверка отображения возможного смещения сроков первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(3)
        .should('be.visible').should("contain.text", " Возможное смещение сроков: 01.05.2024 ");
        //Проверка отображения даты выявления первого риска
        cy.get('@riskInfo').find('.secondary-info').find('div').eq(4)
        .should('be.visible').should("contain.text", " Дата выявления риска: 01.02.2023 ");

        //Проверка наличия иконки и кнопки вкладки "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon')
        .should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-calendar-check");
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Проверка отображения наименования раздела "Мероприятия"
        cy.get('app-project-events .title').should("contain.text", " Мероприятия ");
        //Проверка отображения кнопки добавить мероприятие
        cy.get('app-project-events .add-btn')
        .should('be.visible');
        //Открытие диалогового окна добавления мероприятия
        cy.get('app-project-events .add-btn').click();
        //Проверка отображения диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag').should('be.visible');
        //Закрытие диалогового окна "Добавить мероприятие"
        cy.get('app-dialogs2-container .cdk-drag .close-btn').click();
        //Проверка отображения первого мероприятия
        cy.get('app-event-item').eq(0).should('be.visible');
        //Проверка отображения кнопки "Редактировать" у первого мероприятия
        cy.get('app-event-item [apptooltip="Редактировать"]').should('be.visible')
        .should('have.attr', 'apptooltip').and('equal', "Редактировать");
        //Открытие диалогового окна "Редактировать мероприятие" первого мероприятия
        cy.get('app-event-item [apptooltip="Редактировать"]').eq(0).click();
        //Проверка отображения диалогового окна "Редактировать мероприятие" первого мероприятия
        cy.get('app-dialog-event-edit').should('be.visible');
        //Закрытие диалогового окна "Редактировать мероприятие" первого мероприятия
        cy.get('.cdk-drag .close-btn').click();
        //Проверка отображения кнопки "Удалить" у первого мероприятия
        cy.get('app-event-item [apptooltip="Удалить"]').should('be.visible')
        .should('have.attr', 'apptooltip').and('equal', "Удалить");
        //Проверка кликабельности кнопки "Удалить" у первого мероприятия
        cy.get('app-event-item [apptooltip="Удалить"]').eq(0).click();
        //Проверка отображения диалогового окна подтверждения удаления
        cy.get('.cdk-drag').should('be.visible');
        //Закрытие диалогового окна подтверждения удаления
        cy.get('.cdk-drag .close-btn').click();
        //Отображение даты и пометки "Присутствуют проблемы" первого мероприятия первого мероприятия
        cy.get('app-event-item .info-block').eq(0)
        .should("contain.text", " 28.02.2022 Присутствуют проблемы");
        //Проверка отображение даты и пометки "Присутствуют проблемы" первого мероприятия
        cy.get('app-event-item .info-block').eq(1)
        .should("contain.text", "Текущий статус Мероприятие тест Cypress ЭРО д...");
        //Проверка отображение "Красной" метки первого мероприятия
        cy.get('.label-color').eq(0)
        .should('be.visible').should('have.attr', 'style')
        .and('equal', "background-color: rgb(255, 131, 115);");
        //Проверка отображение типа первого мероприятия
        cy.get('.event-type').eq(0).should('be.visible')
        .should("contain.text", " Текущий статус ");
        //Проверка описания первого мероприятия
        cy.get('app-event-item .ng-star-inserted').contains(' В работе на текущую дату 2022 года ')
        .should('be.visible').should("contain.text", " В работе на текущую дату 2022 года ");
        //Проверка отображения второго мероприятия
        cy.get('app-event-item').eq(1).should('be.visible');
        
        //Проверка наличия иконки и кнопки вкладки "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "tab-icon mdi mdi-paperclip");
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Проверка уведомления об отсутствии мероприятий "Нет информации"
        cy.get('.attach-title').should('be.visible')
        .should("contain.text", " Нет прикрепленных документов ");
        //Проверка наличия окна "Загрузить файл" на вкладке "Документы"
        cy.get('.files-area-container')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "files-area-container ng-star-inserted");
        //Проверка наличия надписей  "Загрузить файл" и "Нажмите или перетащите файл сюда"
        cy.get('.files-area-container .add-btn').should('be.visible')
        .should("contain.text", " Загрузить файл Нажмите или перетащите файл сюда");
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Включено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin ng-star-inserted");
        //Отключение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Проверка наличия кнопки закрепления боковой информационной панели для смещения смещения плиток в положении "Выключено"
        cy.get('.app-pin').should('be.visible')
        .should('have.attr', 'class')
        .and('equal', "app-pin mdi mdi-pin-off ng-star-inserted");
        //Включение закрепления боковой информационной панели
        cy.get('.app-pin').click();
        cy.wait(500);
        //Закрытие боковой информационной панели
        cy.get('.close-btn').eq(1).click();
    });
});