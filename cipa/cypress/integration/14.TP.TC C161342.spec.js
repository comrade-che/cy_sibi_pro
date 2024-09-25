///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";
import { budgetsdevelopmentfactfactor } from "../support/pages/Budgets. Fact.js";


describe('TC C161342 Budgets. Development. Fact creating and field validation', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do budgets development fact creating", () => {
        cy.wait(500);
        //Переход к странице редактирования бюджетов
        budgetsdevelopmentfactfactor.budgetstransition("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ");
        //Ввод данных факт освоение Январь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (0, 'Просто проверочный текст в поле "Комментарий" Факт Январь Освоение', '10339,00', 'Положительный', 'Экономия по результатам закупки', 'Просто проверочный текст в поле "Причина расхождения" Факт Январь Освоение');
        cy.wait(500);
        //Ввод данных факт освоение Февраль
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (1, 'Просто проверочный текст в поле "Комментарий" Факт Февраль Освоение', '10789,00', 'Положительный', 'Превышение по результатам закупки', 'Просто проверочный текст в поле "Причина расхождения" Факт Февраль Освоение');
        cy.wait(500);
        //Ввод данных факт освоение Март
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (2, 'Просто проверочный текст в поле "Комментарий" Факт Март Освоение', '7338,00', 'Положительный', 'Экономия по факту выполнения работ', 'Просто проверочный текст в поле "Причина расхождения" Факт Март Освоение');
        //Ввод данных факт освоение Апрель
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (3, 'Просто проверочный текст в поле "Комментарий" Факт Апрель Освоение', '8009,00', 'Положительный', 'Превышение по факту выполнения работ', 'Просто проверочный текст в поле "Причина расхождения" Факт Апрель Освоение');
        cy.wait(500);
        //Ввод данных факт освоение Май
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (4, 'Просто проверочный текст в поле "Комментарий" Факт Май Освоение', '5616,00', 'Положительный', 'Срыв сроков выполнения работ', 'Просто проверочный текст в поле "Причина расхождения" Факт Май Освоение');
        cy.wait(500);
        //Ввод данных факт освоение Июнь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (5, 'Просто проверочный текст в поле "Комментарий" Факт Июнь Освоение', '7374,00', 'Положительный', 'Опережение сроков выполнения работ', 'Просто проверочный текст в поле "Причина расхождения" Факт Июнь Освоение');
        cy.wait(500);
        //Ввод данных факт освоение Июль
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (6, 'Просто проверочный текст в поле "Комментарий" Факт Июль Освоение', '1926,00', 'Отрицательный', 'Смещение сроков заключения договоров услуг', 'Просто проверочный текст в поле "Причина расхождения" Факт Июль Освоение');
        cy.wait(500);
        //Ввод данных факт освоение Август
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (7, 'Просто проверочный текст в поле "Комментарий" Факт Август Освоение', '16545,00', 'Положительный', 'Смещение сроков заключения договоров поставки', 'Просто проверочный текст в поле "Причина расхождения" Факт Август Освоение');
        cy.wait(500);
        //Ввод данных факт освоение Сентябрь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (8, 'Просто проверочный текст в поле "Комментарий" Факт Сентябрь Освоение', '1372,43', 'Отрицательный', 'Получение полной стоимости проекта по факту выполнения', 'Просто проверочный текст в поле "Причина расхождения" Факт Сентябрь Освоение');
        cy.wait(500);
        //Ввод данных факт освоение Октябрь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (9, 'Просто проверочный текст в поле "Комментарий" Факт Октябрь Освоение', '1008,00', 'Отрицательный', 'Некачественное планирование', 'Просто проверочный текст в поле "Причина расхождения" Факт Октябрь Освоение');
        cy.wait(500);
        //Ввод данных факт освоение Ноябрь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (10, 'Просто проверочный текст в поле "Комментарий" Факт Ноябрь Освоение', '23262,13', 'Положительный', 'Смещение сроков документационного обеспечения', 'Просто проверочный текст в поле "Причина расхождения" Факт Ноябрь Освоение');
        cy.wait(500);
        //Ввод данных факт освоение Декабрь
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactfactor
        (11, 'Просто проверочный текст в поле "Комментарий" Факт Декабрь Освоение', '17924,37', 'Положительный', 'Гарантийное удержание', 'Просто проверочный текст в поле "Причина расхождения" Факт Декабрь Освоение');
        cy.wait(500);
    });
        
        
    it("should do budgets development fact field validation", () => {
        cy.wait(500);
        //Переход к странице редактирования бюджетов
        budgetsdevelopmentfactfactor.budgetstransition("Целевая программа Cypress Автотест", "2023 ", "КНИПИ ");
        //Проверка бюджет факт освоение Январь Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(0, " 10\u00a0339,00 ");
        //Проверка бюджет факт освоение Февраль Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(1, " 10\u00a0789,00 ");
        //Проверка бюджет факт освоение Март Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(2, " 7\u00a0338,00 ");
        //Проверка бюджет факт освоение Апрель Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(3, " 8\u00a0009,00 ");
        //Проверка бюджет факт освоение Май Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(4, " 5\u00a0616,00 ");
        //Проверка бюджет факт освоение Июнь Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(5, " 7\u00a0374,00 ");
        //Проверка бюджет факт освоение Июль Отрицательный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactnegative(6, " 1\u00a0926,00 ");
        //Проверка бюджет факт освоение Август Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(7, " 16\u00a0545,00 ");
        //Проверка бюджет факт освоение Сентябрь Отрицательный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactnegative(8, " 1\u00a0372,43 ");
        //Проверка бюджет факт освоение Октябрь Отрицательный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactnegative(9, " 1\u00a0008,00 ");
        //Проверка бюджет факт освоение Ноябрь Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(10, " 23\u00a0262,13 ");
        //Проверка бюджет факт освоение Декабрь Положительный
        budgetsdevelopmentfactfactor.budgetsdevelopmentfactpositive(11, " 17\u00a0924,37 ");
        //Проверка бюджет факт освоение итого за год
        budgetsdevelopmentfactfactor.budgetsdevelopmentfacttotal(1, "111\u00a0502,93");
    });
});