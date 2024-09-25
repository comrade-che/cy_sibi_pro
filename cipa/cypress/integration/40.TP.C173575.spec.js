///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C173575 entering statuses. display columns', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Целевые программы" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("shoud do correct column display function on page entering statuses", () => {
        cy.wait(500);
        //Переход на страницу "Ввод статусов"
        cy.get('[routerlink="/projects/statuses"]').click();
        cy.wait(1000);
        //Проверка отсутствия отображения колонки "Программа"
        cy.get('th').contains('Программа').should('not.be.visible');
        //Проверка отсутствия отображения колонки "Год"
        cy.get('th').contains('Год').should('not.be.visible');
        //Проверка отсутствия отображения колонки "Бизнес Блок"
        cy.get('th').contains('Бизнес Блок').should('not.be.visible');
        //Проверка отсутствия колонки "Общество группы"
        cy.get('th').contains('ОГ').should('be.visible');
        //Проверка отсутствия колонки "Объект"
        cy.get('th').contains('Объект').should('be.visible');
        //Проверка отображения колонки "Этап"
        cy.get('th').contains('Этап').should('be.visible');
        //Проверка отображения колонки "Прогнозная дата"
        cy.get('th').contains('Прогнозная дата').should('be.visible');
        //Проверка отсутствия отображения колонки "Дата начала"
        cy.get('th').contains('Дата начала').should('not.be.visible');
        //Проверка отсутствия отображения колонки "Дата завершения"
        cy.get('th').contains('Дата завершения').should('not.be.visible');
        //Проверка отображения колонки "Статус"
        cy.get('th').contains('Статус').should('be.visible');
        //Проверка отображения колонки "Статус на конец месяца"
        cy.get('th').contains('Статус на конец месяца').should('be.visible');
        //Проверка отображения колонки "Риск"
        cy.get('th').contains('th', 'Риск') .should('be.visible');
        //Открытие меню отображения колонок таблицы
        cy.get('app-columns-selector span').click();
        //Проверка отображения и состояния Чекбокса "Программа"
        cy.get('app-checkbox2').contains('Программа').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        //Проверка отображения и состояния Чекбокса "Год"
        cy.get('app-checkbox2').contains('Год').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        //Проверка отображения и состояния Чекбокса "Бизнес Блок"
        cy.get('app-checkbox2').contains('Бизнес Блок').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        //Проверка отображения и состояния Чекбокса "ОГ"
        cy.get('app-checkbox2').contains('ОГ').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Объект"
        cy.get('app-checkbox2').contains('Объект').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Этап"
        cy.get('app-checkbox2').contains('Этап').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Прогнозная дата"
        cy.get('app-checkbox2').contains('Прогнозная дата').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Дата начала"
        cy.get('app-checkbox2').contains('Дата начала').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        //Проверка отображения и состояния Чекбокса "Дата завершения"
        cy.get('app-checkbox2').contains('Дата завершения').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        //Проверка отображения и состояния Чекбокса "Статус"
        cy.get('app-checkbox2').contains('Статус').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Статус на конец месяца"
        cy.get('app-checkbox2').contains('Статус на конец месяца').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Проверка отображения и состояния Чекбокса "Риск"
        cy.get('app-checkbox2').contains('Риск').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Клик на чек-бокс "Дата начала"
        cy.get('app-checkbox2').contains('Дата начала').click();
        //Проверка отображения и состояния Чекбокса "Дата начала"
        cy.get('app-checkbox2').contains('Дата начала').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Клик на чек-бокс "Год"
        cy.get('app-checkbox2').contains('Год').click();
        //Проверка отображения и состояния Чекбокса "Год"
        cy.get('app-checkbox2').contains('Год').siblings('[type="checkbox"]')
        .should('have.prop', "checked", true);
        //Закрытие меню отображения колонок таблицы
        cy.get('.close-btn').click();
        //Проверка отсутствия отображения колонки "Программа"
        cy.get('th').contains('Программа').should('not.be.visible');
        //Проверка отсутствия отображения колонки "Год"
        cy.get('th').contains('Год').should('be.visible');
        //Проверка отсутствия отображения колонки "Бизнес Блок"
        cy.get('th').contains('Бизнес Блок').should('not.be.visible');
        //Проверка отображения колонки "Общество группы"
        cy.get('th').contains('ОГ').should('be.visible');
        cy.get('th').contains('Объект').should('be.visible');
        //Проверка отображения колонки "Этап"
        cy.get('th').contains('Этап').should('be.visible');
        //Проверка отображения колонки "Прогнозная дата"
        cy.get('th').contains('Прогнозная дата').should('be.visible');
        //Проверка отображения колонки "Дата начала"
        cy.get('th').contains('Дата начала').should('be.visible');
        //Проверка отсутствия отображения колонки "Дата завершения"
        cy.get('th').contains('Дата завершения').should('not.be.visible');
        //Проверка отображения колонки "Статус"
        cy.get('th').contains('Статус').should('be.visible');
        //Проверка отображения колонки "Статус на конец месяца"
        cy.get('th').contains('Статус на конец месяца').should('be.visible');
        //Проверка отображения колонки "Риск"
        cy.get('th').contains('th', 'Риск') .should('be.visible');
        //Открытие меню пользователя
        cy.get('app-user-menu-block .menu-arrow').click();
        //Клик на гиперссылку "Выйти" (Выход из системы)
        cy.get('.link-secondary').contains('Выйти').click();
        //Повторная авторизация
        //Ввод логина
        cy.get('[name="username"]').type('admin');
        //Ввод пароля
        cy.get('[name="password"]').type('Wbahfqleninastr1');
        //Нажатие кнопки вход (в раздел "Целевые программы")
        cy.get('.auth-page__btn').click();
        cy.wait(500);
        //Переход на страницу "Ввод статусов"
        cy.get('[routerlink="/projects/statuses"]').click();
        cy.wait(1000);
        //Проверка отсутствия отображения колонки "Программа"
        cy.get('th').contains('Программа').should('not.be.visible');
        //Проверка отсутствия отображения колонки "Год"
        cy.get('th').contains('Год').should('be.visible');
        //Проверка отсутствия отображения колонки "Бизнес Блок"
        cy.get('th').contains('Бизнес Блок').should('not.be.visible');
        //Проверка отображения колонки "Общество группы"
        cy.get('th').contains('ОГ').should('be.visible');
        cy.get('th').contains('Объект').should('be.visible');
        //Проверка отображения колонки "Этап"
        cy.get('th').contains('Этап').should('be.visible');
        //Проверка отображения колонки "Прогнозная дата"
        cy.get('th').contains('Прогнозная дата').should('be.visible');
        //Проверка отображения колонки "Дата начала"
        cy.get('th').contains('Дата начала').should('be.visible');
        //Проверка отсутствия отображения колонки "Дата завершения"
        cy.get('th').contains('Дата завершения').should('not.be.visible');
        //Проверка отображения колонки "Статус"
        cy.get('th').contains('Статус').should('be.visible');
        //Проверка отображения колонки "Статус на конец месяца"
        cy.get('th').contains('Статус на конец месяца').should('be.visible');
        //Проверка отображения колонки "Риск"
        cy.get('th').contains('th', 'Риск') .should('be.visible');
        //Открытие меню пользователя
        cy.get('app-user-menu-block .menu-arrow').click();
        //Открытие меню выбора разделов
        cy.get('.logo').click();
        //Переход к разделу "Метрология"
        cy.get('[data-project="metro-bgm"]').click();
        cy.wait(1000);
        //Переход на страницу "Контрольные мероприятия"
        cy.get('[routerlink="/projects/control-events"]').click();
        //Открытие меню отображения колонок
        cy.get('app-columns-selector .mdi').eq(0).click();
        //Анклик чек-бокса "Дата начала"
        cy.get('app-checkbox2').contains('Дата начала').click();
        //Проверка что чек-бокс "Дата начала" отключен
        cy.get('app-checkbox2').contains('Дата начала').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        //Проверка отсутствия отображения колонки "Дата начала"
        cy.get('th').contains('Дата начала').should('not.be.visible');
        //Анклик чек-бокса "Контрольное мероприятие"
        cy.get('app-checkbox2').contains('Контрольное мероприятие').click();
        //Проверка что чек-бокс "Контрольное мероприятие" отключен
        cy.get('app-checkbox2').contains('Контрольное мероприятие').siblings('[type="checkbox"]')
        .should('have.prop', "checked", false);
        //Проверка отсутствия отображения колонки "Дата завершения"
        cy.get('th').contains('Контрольное мероприятие').should('not.be.visible');
        //Открытие меню выбора разделов
        cy.get('.logo').click();
        //Переход к разделу "Целевые программы"
        cy.get('[data-project="cipa"]').click();
        cy.wait(1000);
        //Переход на страницу "Ввод статусов"
        cy.get('[routerlink="/projects/statuses"]').click();
        cy.wait(1000);
        //Проверка отсутствия отображения колонки "Программа"
        cy.get('th').contains('Программа').should('not.be.visible');
        //Проверка отсутствия отображения колонки "Год"
        cy.get('th').contains('Год').should('be.visible');
        //Проверка отсутствия отображения колонки "Бизнес Блок"
        cy.get('th').contains('Бизнес Блок').should('not.be.visible');
        //Проверка отображения колонки "Общество группы"
        cy.get('th').contains('ОГ').should('be.visible');
        cy.get('th').contains('Объект').should('be.visible');
        //Проверка отображения колонки "Этап"
        cy.get('th').contains('Этап').should('be.visible');
        //Проверка отображения колонки "Прогнозная дата"
        cy.get('th').contains('Прогнозная дата').should('be.visible');
        //Проверка отображения колонки "Дата начала"
        cy.get('th').contains('Дата начала').should('be.visible');
        //Проверка отсутствия отображения колонки "Дата завершения"
        cy.get('th').contains('Дата завершения').should('not.be.visible');
        //Проверка отображения колонки "Статус"
        cy.get('th').contains('Статус').should('be.visible');
        //Проверка отображения колонки "Статус на конец месяца"
        cy.get('th').contains('Статус на конец месяца').should('be.visible');
        //Проверка отображения колонки "Риск"
        cy.get('th').contains('th', 'Риск') .should('be.visible');
    });
});