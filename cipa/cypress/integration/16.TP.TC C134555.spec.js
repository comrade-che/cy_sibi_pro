///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import { risks } from "../support/pages/Risks.js";

describe('TC C134555 inherited risks for object under implementation and active risks for reference creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do inherited risks for object under implementation creating", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, переход на вкладку риски, поднятие диалогового окна "Создание - Риск"
        risks.transitiontorisks
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.3.7. Приобретение оборудования взамен устаревшег... ", "9.2. Поверка измерительной системы ");
        //Ввод описания риска
        risks.risksdescription('Риск срыва сроков завершения ПНР из-за отсутствия МТР для выполнения СМР со стороны ОГ. ');
        //Выбор статуса риска
        risks.risksstatusId('Наследуемый');
        //Выбор степени риска
        risks.risksriskDegree('Мероприятия требующие повышенного внимания');
        //Выбор этапа реализации
        risks.risksprojectStageDictId('СМР');
        cy.wait(500);
        //Выбор ответственного за риск
        risks.risksresponsibleForRiskDictId('ОГ');
        cy.wait(500);
        //Выбор системной причины риска
        risks.risksriskssystemRiskCauseDictId('Несвоевременное обеспечение Подрядчика материалами.');
        //Выбор даты создания риска через выпадающий календарь
        risks.riskscreatedAt(" янв ", " 15 ");
        //Введение даты выявления риска
        risks.risksdetectedAt('01.02.2023');
        //Введение даты возможного смещения сроков проекта
        risks.riskspossibleTimingShift('01.05.2024');
        cy.wait(500);
        //Приминение изменений
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
    });
          
    it("should do inherited risks for object under implementation field validation", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, переход на вкладку риски, поднятие диалогового окна "Редактирование - Риск"
        risks.transitiontocreatedrisks
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.3.7. Приобретение оборудования взамен устаревшег... ", "9.2. Поверка измерительной системы ", "Риск срыва сроков завершения ПНР из-за отсутствия МТР для выполнения СМР со стороны ОГ. ");
        //Проверка описания риска
        risks.validrisksdescription("Риск срыва сроков завершения ПНР из-за отсутствия МТР для выполнения СМР со стороны ОГ. ");
        //Проверка статуса риска
        risks.validrisksstatusId("Наследуемый");
        //Проверка степени риска
        risks.validrisksriskDegree("Мероприятия требующие повышенного внимания");
        //Проверка этапа реализации
        risks.validrisksprojectStageDictId("СМР");
        //Проверка ответственного за риск
        risks.validrisksresponsibleForRiskDictId("ОГ");
        //Проверка системной причины риска
        risks.validrisksriskssystemRiskCauseDictId("Несвоевременное обеспечение Подрядчика материалами.");
        //Проверка даты создания риска
        risks.validriskscreatedAt("15.01.2023");
        //Проверка даты выявления риска
        risks.validrisksdetectedAt("01.02.2023");
        //Проверка даты возможного смещения сроков проекта
        risks.validriskspossibleTimingShift("01.05.2024");
        //Выход из диалогового окна редактирования, нажатик кнопки "Отменить"
        cy.get('.button-t2').click();
    })

    it("should do active risks for reference creating", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, переход на вкладку риски, поднятие диалогового окна "Создание - Риск"
        risks.transitiontorisks("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ", "8. Пусконаладочные работы и опытно промышленная эк... ");
        //Ввод описания риска
        risks.risksdescription('Риск непоставки лабораторного оборудования в 2022 году.');
        //Выбор статуса риска
        risks.risksstatusId('Активный');
        //Выбор степени риска
        risks.risksriskDegree('Мероприятия требующие немедленного вмешательства');
        //Выбор этапа реализации
        risks.risksprojectStageDictId('Закупки');
        cy.wait(500);
        //Выбор ответственного за риск
        risks.risksresponsibleForRiskDictId('ЕОС ИТ');
        cy.wait(500);
        //Выбор системной причины риска
        risks.risksriskssystemRiskCauseDictId('Срыв сроков проведения этапов закупки.');
        //Выбор даты создания риска через выпадающий календарь
        risks.riskscreatedAt(" янв ", " 15 ");
        //Введение даты возможного смещения сроков проекта
        risks.risksdetectedAt('01.02.2023');
        //Введение даты возможного смещения сроков проекта
        risks.riskspossibleTimingShift('01.05.2024');
        cy.wait(500);
        //Приминение изменений
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
    });
          
    it("should do active risks for reference field validation", () => {
        cy.wait(500).reload();
        //Переход к уровню 6, переход на вкладку риски, поднятие диалогового окна "Редактирование - Риск"
        risks.transitiontocreatedrisks
        ("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ", "АО \«ИГиРГИ\» ", "1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ", "8. Пусконаладочные работы и опытно промышленная эк... ", "Риск непоставки лабораторного оборудования в 2022 году. ");
        //Проверка описания риска
        risks.validrisksdescription("Риск непоставки лабораторного оборудования в 2022 году.");
        //Проверка статуса риска
        risks.validrisksstatusId("Активный");
        //Проверка степени риска
        risks.validrisksriskDegree("Мероприятия требующие немедленного вмешательства");
        //Проверка этапа реализации
        risks.validrisksprojectStageDictId("Закупки");
        //Проверка ответственного за риск
        risks.validrisksresponsibleForRiskDictId("ЕОС ИТ");
        //Проверка системной причины риска
        risks.validrisksriskssystemRiskCauseDictId("Срыв сроков проведения этапов закупки.");
        //Проверка даты создания риска
        risks.validriskscreatedAt("15.01.2023");
        //Проверка даты выявления риска
        risks.validrisksdetectedAt("01.02.2023");
        //Проверка даты возможного смещения сроков проекта
        risks.validriskspossibleTimingShift("01.05.2024");
        //Выход из диалогового окна редактирования, нажатик кнопки "Отменить"
        cy.get('.button-t2').click();
    });
});