///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import { budgetsdevelopmentfactfactor } from "../support/pages/Budgets. Fact.js";

describe('TC C161348 Budgets. Financing. Fact creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do budgets financing fact creating", () => {
        cy.wait(500);
        //Переход к странице редактирования бюджетов
        budgetsdevelopmentfactfactor.budgetstransition("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ");
        //Ввод данных факт финансирование Январь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactnotfactor
        (14, 'Просто проверочный текст в поле "Комментарий" Факт Январь Финансирование', '15870,00');
        cy.wait(500);
        //Ввод данных факт финансирование Февраль
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactnotfactor
        (15, 'Просто проверочный текст в поле "Комментарий" Факт Февраль Финансирование', '11558,00');
        cy.wait(500);
        //Ввод данных факт финансирование Март
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (16, 'Просто проверочный текст в поле "Комментарий" Факт Март Финансирование', '8708,00', 'Положительный', 'Отсутствие лимитов КВ', 'Просто проверочный текст в поле "Причина расхождения" Факт Март Финансирование');
        cy.wait(500);
        //Ввод данных факт финансирование Апрель
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactnotfactor
        (17, 'Просто проверочный текст в поле "Комментарий" Факт Апрель Финансирование', '10048,00');
        cy.wait(500);
        //Ввод данных факт финансирование Май
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactnotfactor
        (18, 'Просто проверочный текст в поле "Комментарий" Факт Май Финансирование', '4759,00');
        cy.wait(500);
        //Ввод данных факт финансирование Июнь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (19, 'Просто проверочный текст в поле "Комментарий" Факт Июнь Финансирование', '6920,00', 'Отрицательный', 'Отсутствие лимитов КВ', 'Просто проверочный текст в поле "Причина расхождения" Факт Июнь Финансирование');
        cy.wait(500);
        //Ввод данных факт финансирование Июль
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (20, 'Просто проверочный текст в поле "Комментарий" Факт Июль Финансирование', '5746,00', 'Положительный', 'Смещение сроков заключения договоров услуг', 'Просто проверочный текст в поле "Причина расхождения" Факт Июль Финансирование');
        cy.wait(500);
        //Ввод данных факт финансирование Август
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (21, 'Просто проверочный текст в поле "Комментарий" Факт Август Финансирование', '22257,00', 'Положительный', 'Превышение по факту выполнения работ', 'Просто проверочный текст в поле "Причина расхождения" Факт Август Финансирование');
        cy.wait(500);
        //Ввод данных факт финансирование Сентябрь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (22, 'Просто проверочный текст в поле "Комментарий" Факт Сентябрь Финансирование', '2373,00', 'Отрицательный', 'Смещение сроков документационного обеспечения', 'Просто проверочный текст в поле "Причина расхождения" Факт Сентябрь Финансирование');
        cy.wait(500);
        //Ввод данных факт финансирование Октябрь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (23, 'Просто проверочный текст в поле "Комментарий" Факт Октябрь Финансирование', '6113,00', 'Отрицательный', 'Экономия по результатам закупки', 'Просто проверочный текст в поле "Причина расхождения" Факт Октябрь Финансирование');
        cy.wait(500);
        //Ввод данных факт финансирование Ноябрь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (24, 'Просто проверочный текст в поле "Комментарий" Факт Ноябрь Финансирование', '2334,44', 'Отрицательный', 'Некачественное планирование', 'Просто проверочный текст в поле "Причина расхождения" Факт Ноябрь Финансирование');
        cy.wait(500);
        //Ввод данных факт финансирование Декабрь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (25, 'Просто проверочный текст в поле "Комментарий" Факт Декабрь Финансирование', '15024,00', 'Положительный', 'Смещение сроков документационного обеспечения', 'Просто проверочный текст в поле "Причина расхождения" Факт Декабрь Финансирование');
        cy.wait(500);
    });
        
    it("should do budgets financing fact field validation", () => {
        cy.wait(500);
        //Переход к странице редактирования бюджетов
        budgetsdevelopmentfactfactor.budgetstransition("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ");
        //Проверка бюджет факт финансирование Январь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactprimary(14, " 15\u00a0870,00 ");
        //Проверка бюджет факт финансирование Февраль
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactprimary(15, " 11\u00a0558,00 ");
        //Проверка бюджет факт финансирование Март Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(16, " 8\u00a0708,00 ");
        //Проверка бюджет факт финансирование Апрель
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactprimary(17, " 10\u00a0048,00 ");
        //Проверка бюджет факт финансирование Май
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactprimary(18, " 4\u00a0759,00 ");
        //Проверка бюджет факт финансирование Июнь Отрицательный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactnegative(19, " 6\u00a0920,00 ");
        //Проверка бюджет факт финансирование Июль Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(20, " 5\u00a0746,00 ");
        //Проверка бюджет факт финансирование Август Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(21, " 22\u00a0257,00 ");
        //Проверка бюджет факт финансирование Сентябрь Отрицательный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactnegative(22, " 2\u00a0373,00 ");
        //Проверка бюджет факт финансирование Октябрь Отрицательный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactnegative(23, " 6\u00a0113,00 ");
        //Проверка бюджет факт финансирование Ноябрь Отрицательный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactnegative(24, " 2\u00a0334,44 ");
        //Проверка бюджет факт финансирование Декабрь Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(25, " 15\u00a0024,00 ");
        //Проверка бюджет факт финансирование итого за год
        budgetsdevelopmentfactfactor.budgetsdevelopmentfacttotal(3, "111\u00a0710,44");
    });
});