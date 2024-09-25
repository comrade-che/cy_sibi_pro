///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import { risks } from "../support/pages/Risks.js";

describe('TC C173747 entering statuses. creating and displaying risks', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("shoud do creating and displaying risks on page entering statuses", () => {
        cy.wait(500);
        //Переход на страницу "Ввод статусов"
        cy.get('[routerlink="/projects/statuses"]').click();
        cy.wait(1000);
        //Открытие меню выбора "Программы"
        cy.get('[placeholder="Программа"] .ng-arrow-wrapper').click();
        //Скролл к тестовой "Программе"
        cy.get('[placeholder="Программа"] .ng-option-label')
        .contains("Целевая программа Cypress Автотест").scrollIntoView();
        //Выбор тестовой программы
        cy.get('[placeholder="Программа"] .ng-option-label')
        .contains("Целевая программа Cypress Автотест").click();
        cy.wait(500);
        //Клик на значение "Нет рисков" ячеки в колонке "Риски" для этапа "3. Выбор подрядчиков/поставщиков"
        cy.get('.risk-link').eq(3).click();
        //Открытие диалогового окна "Добавить риск"
        cy.get('.add-btn').eq(0).click();
        //Проверка что диалоговое окно создания риска поднялось
        cy.get('.app-dialog-body').should('be.visible');
        //Внесение информации в поля создаваемого риска
        risks.risksdescription('Срыв срока выполнения ввода в ПЭ в 2021 году по причине отсутствия действующего договора  на выполнение  СМР.')
        risks.risksstatusId('Реализовался')
        risks.risksriskDegree('Мероприятия требующие немедленного вмешательства')
        risks.risksprojectStageDictId('СМР')
        cy.wait(500)
        risks.risksresponsibleForRiskDictId('ОГ')
        cy.wait(500)
        risks.risksriskssystemRiskCauseDictId('Неудовлетворительное планирование. Отсутствие графиков реализации. Несвоевременное инициирование заключения договора.')
        risks.riskscreatedAt(" янв ", " 15 ")
        risks.risksdetectedAt('01.02.2022')
        risks.riskspossibleTimingShift('01.05.2023')
        cy.wait(500)
        //Приминение изменений
        cy.get('.button-t1').wait(500).click();
        cy.wait(1000);
        //Проверка наличия и отображения первого риска в боковой информационной панеле
        cy.get('app-risk-item2').should('be.visible');
        //Проверка отображения статуса первого риска в боковой информационной панеле
        cy.get('app-risk-item2 .status').should("contain.text", " Статус: Реализовался");
        //Проверка отображения значения "Нет рисков" в ячейке колонки "Риск" этапа "3. Выбор подрядчиков/поставщиков"
        cy.get('.selected .risk-link').should('contain.text', " Нет рисков ").should('be.visible');
        //Открытие диалогового окна "Редактировать риск"
        cy.get('[apptooltip="Редактировать"]').click();
        //Изменение статуса риска на "Снят"
        risks.risksstatusId('Снят');
        cy.wait(500);
        //Приминение изменений
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Проверка наличия и отображения первого риска в боковой информационной панеле
        cy.get('app-risk-item2').should('be.visible');
        //Проверка отображения статуса первого риска в боковой информационной панеле
        cy.get('app-risk-item2 .status').should("contain.text", " Статус: Снят");
        //Проверка отображения значения "Нет рисков" в ячейке колонки "Риск" этапа "3. Выбор подрядчиков/поставщиков"
        cy.get('.selected .risk-link').should('contain.text', " Нет рисков ").should('be.visible');
        //Открытие диалогового окна "Редактировать риск"
        cy.get('[apptooltip="Редактировать"]').click();            
        //Изменение статуса риска на "Наследуемый"
        risks.risksstatusId('Наследуемый');
        cy.wait(500);
        //Приминение изменений
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Проверка наличия и отображения первого риска в боковой информационной панеле
        cy.get('app-risk-item2').should('be.visible');
        //Проверка отображения статуса первого риска в боковой информационной панеле
        cy.get('app-risk-item2 .status').should("contain.text", " Статус: Наследуемый");
        //Проверка отображения значения "Нет рисков" в ячейке колонки "Риск" этапа "3. Выбор подрядчиков/поставщиков"
        cy.get('.selected .risk-link').should('contain.text', " Наследуемый ").should('be.visible')
        .should('have.css', "color", "rgb(255, 131, 115)");
        //Открытие диалогового окна "Редактировать риск"
        cy.get('[apptooltip="Редактировать"]').click();
        //Изменение статуса риска на "Активный"
        risks.risksstatusId('Активный');
        cy.wait(500);
        //Приминение изменений
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Проверка наличия и отображения первого риска в боковой информационной панеле
        cy.get('app-risk-item2').should('be.visible');
        //Проверка отображения статуса первого риска в боковой информационной панеле
        cy.get('app-risk-item2 .status').should("contain.text", " Статус: Активный");
        //Проверка отображения значения "Нет рисков" в ячейке колонки "Риск" этапа "3. Выбор подрядчиков/поставщиков"
        cy.get('.selected .risk-link').should('contain.text', " Высокий ").should('be.visible')
        .should('have.css', "color", "rgb(255, 131, 115)");
        //Открытие диалогового окна "Редактировать риск"
        cy.get('[apptooltip="Редактировать"]').click();
        //Изменение степени риска на "Мероприятия требующие повышенного внимания"
        risks.risksriskDegree('Мероприятия требующие повышенного внимания');
        cy.wait(500);
        //Приминение изменений
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Проверка наличия и отображения первого риска в боковой информационной панеле
        cy.get('app-risk-item2').should('be.visible');
        //Проверка отображения статуса первого риска в боковой информационной панеле
        cy.get('app-risk-item2 .status').should("contain.text", " Статус: Активный");
        //Проверка отображения значения "Нет рисков" в ячейке колонки "Риск" этапа "3. Выбор подрядчиков/поставщиков"
        cy.get('.selected .risk-link').should('contain.text', " Средний ").should('be.visible')
        .should('have.css', "color", "rgb(253, 210, 28)");
        //Открытие диалогового окна "Редактировать риск"
        cy.get('[apptooltip="Редактировать"]').click();
        //Изменение степени риска на "Низкорисковые мероприятия"
        risks.risksriskDegree('Низкорисковые мероприятия');
        cy.wait(500);
        //Приминение изменений
        cy.get('.button-t1').wait(500).click();
        cy.wait(500);
        //Проверка наличия и отображения первого риска в боковой информационной панеле
        cy.get('app-risk-item2').should('be.visible');
        //Проверка отображения статуса первого риска в боковой информационной панеле
        cy.get('app-risk-item2 .status').should("contain.text", " Статус: Активный");
        //Проверка отображения значения "Нет рисков" в ячейке колонки "Риск" этапа "3. Выбор подрядчиков/поставщиков"
        cy.get('.selected .risk-link').should('contain.text', " Низкий ").should('be.visible')
        .should('have.css', "color", "rgb(108, 217, 148)");
    });
})