///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C178526, C133202 Attaching files', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do attaching files", () => {
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
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Прикрепление первого файла из локального каталога
        cy.get('[type="file"]')
        .selectFile("D:/Сибинтек-Софт/@@Программирование@@/CY_AQA_SIBI-PRO/cipa/cypress/files/Execution.pdf", {force: true});
        cy.wait(500);
        //Проверка отображения первого прикрепленного файла
        cy.get('.file-item').contains("Execution.pdf")
        .should('be.visible').should("contain.text", "Execution.pdf");
        //Переход на вкладку "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon').click();
        //Перевод объекта 5 уровня в статус "Завершен"
        cy.get('app-status-block-with-fact-date .link-t4').contains('Завершен').click();
        //Ввод фактической даты завершения
        cy.get('[formcontrolname="completionDate"] input').type('22022023');
        //Применение введенной даты
        cy.get('.button-t1').click();
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Прикрепление второго файла из локального каталога
        cy.get('[type="file"]')
        .selectFile("D:/Сибинтек-Софт/@@Программирование@@/CY_AQA_SIBI-PRO/cipa/cypress/files/Completed.pdf", {force: true});
        cy.wait(1000);
        //Проверка отображения первого прикрепленного файла
        cy.get('.file-item').contains("Execution.pdf")
        .should('be.visible').should("contain.text", "Execution.pdf");
        //Проверка отображения второго прикрепленного файла
        cy.get('.file-item').contains("Completed.pdf")
        .should('be.visible').should("contain.text", "Completed.pdf");
        //Удаление первого прикрепленного файла файла
        cy.get('.file-item .mdi').eq(0).click();
        //Подтверждение удаления
        cy.get('.button-t1').contains('Да').click();
        //Проверка отсутствия первого прикрепленного файла
        cy.get('.file-item')
        .should("not.contain.text", "Execution.pdf");
        //Открытие созданного проекта на редактирование в боковой информационной панеле
        cy.get('.menu').click();
        cy.contains('Редактировать').click();
        //Открытие меню выбора Направления проекта
        cy.get('[formcontrolname="directionProjectDictId"]').click();
        //Выбор направления проекта РВС
        cy.get('[formcontrolname="directionProjectDictId"] .ng-option-label').contains("РВС").click();
        //Очистка поля Описание
        cy.get('app-textarea2[formcontrolname="description"]').find('textarea').clear();
        //Внесение обновленного текста в поле Описание
        cy.get('app-textarea2[formcontrolname="description"]').find('textarea')
        .type('ИЗМЕНЕННОЕ Описание уровня проекта Объект под реализацию для автоматизированного теста Cypress которое будет записано при создании уровня проекта в процессе выполнения тестового сценария в составе тестового набора мной и ни кем более для проверки качества выпускаемого ПО на проекте БГМ СИБИ-ПРО');
        //Прикрепление третьего файла из локального каталога
        cy.get('.app-dialog-body [type="file"]')
        .selectFile("D:/Сибинтек-Софт/@@Программирование@@/CY_AQA_SIBI-PRO/cipa/cypress/files/Editing.pdf", {force: true});
        cy.wait(1000);
        //Сохранение изменений
        cy.get('.button-t1').click();
        //Прикрепление четвертого файла из локального каталога
        cy.get('app-dialog-append-project-docs [type="file"]')
        .selectFile("D:/Сибинтек-Софт/@@Программирование@@/CY_AQA_SIBI-PRO/cipa/cypress/files/Application.pdf", {force: true});
        cy.wait(1000);
        //Приминение изменений
        cy.get('app-dialog-append-project-docs .button-t1').click();
        cy.wait(1000);
        //Проверка отображения второго прикрепленного файла
        cy.get('.file-item').contains("Completed.pdf")
        .should('be.visible').should("contain.text", "Completed.pdf");
        //Проверка отображения третьего прикрепленного файла
        cy.get('.file-item').contains("Editing.pdf")
        .should('be.visible').should("contain.text", "Editing.pdf"); 
        //Проверка отображения четвертого прикрепленного файла
        cy.get('.file-item').contains("Application.pdf")
        .should('be.visible').should("contain.text", "Application.pdf");
        //Переход на вкладку "Основная информация"
        cy.get('[apptooltip="Основная информация"] .tab-icon').click();
        //Перевод объекта 5 уровня в статус "Исполнение"
        cy.get('.link-t4').contains('.link-t4', " Исполнение ").wait(500).click();
        //Переход на вкладку "Документы"
        cy.get('[apptooltip="Документы"] .tab-icon').click();
        cy.wait(500);
        //Проверка отображения второго прикрепленного файла
        cy.get('.file-item').contains("Completed.pdf")
        .should('be.visible').should("contain.text", "Completed.pdf");
        //Проверка отображения третьего прикрепленного файла
        cy.get('.file-item').contains("Editing.pdf")
        .should('be.visible').should("contain.text", "Editing.pdf");
        //Проверка отображения четвертого прикрепленного файла
        cy.get('.file-item').contains("Application.pdf")
        .should('be.visible').should("contain.text", "Application.pdf");
        //Удаление первого прикрепленного файла файла
        cy.get('.file-item .mdi').eq(2).click();
        //Подтверждение удаления
        cy.get('.button-t1').contains('Да').click();
        //Проверка отсутствия первого прикрепленного файла
        cy.get('.file-item')
        .should("not.contain.text", "Application.pdf");
    });
})