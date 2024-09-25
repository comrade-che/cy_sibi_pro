///<reference types="Cypress"/>
import { Transition_Login } from "../support/pages/Creation.js";

describe('TC C11380 field validation on tiles all project levels', () => {

    beforeEach(() => {
        //Установка разрешения экрана тестового сценария
        cy.viewport(1920, 1080);
        //Вход на "Разводящую страницу"
        cy.visit("/");
        //Переход к разделу "Метрология" и авторизация
        Transition_Login('admin', 'Wbahfqleninastr1');
    });

    it("should do field validation on tiles direction", () => {
        cy.wait(500).reload();
        //Проверка отображения плитки 1 уровня проекта
        cy.get('app-plate-item').contains('.titles-block', "Целевая программа Cypress Автотест")
        .should('be.visible');
        //Проверка наличия наименования уровня проекта
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").find('.title')
        .should('be.visible').should("contain.text", "Целевая программа Cypress Автотест");
        //Проверка наличия описания уровня проекта
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").find('.description')
        .should('be.visible').should("contain.text", " Описание целевая программа Cypress Автотест ");
        //Проверка количества дочерних уровней и наличия ссылки перехода к ним
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").find('.sub-projects-link')
        .should('be.visible').should("contain.text", "Подпроекты(1)");
    });

    it("should do field validation on tiles year", () => {
        cy.wait(500).reload();
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', 'Целевая программа Cypress Автотест').as('LvL-1');
        cy.get('@LvL-1').find('.link-t3').click();
        //Проверка наличия иконки "Год" слева от наименования уровня проекта
        cy.get('app-plate-item-year .type-icon').should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-year");
        //Проверка наличия наименования уровня проекта
        cy.get('.h2').should('be.visible').should("contain.text", "2023 ");
        //Проверка количества дочерних уровней и наличия ссылки перехода к ним
        cy.get('app-plate-item-year .sub-projects-link')
        .should('be.visible').should("contain.text", "Подпроекты(1)");
        //Проверка наличия блока и количества объектов (ЦП, Мероприятия, Справочно)
        cy.get('app-objects-count .info-block').should('be.visible')
        .should("contain.text", " Количество объектов: Объекты ЦП 0/1 Справочно 0/1 ");
        //Проверка наличия блока и количества договоров
        cy.get('app-contracts-count .info-block').should('be.visible')
        .should("contain.text", " Количество договоров:  10/20 ");
        //Проверка наличия блока и сумм бюджетов
        cy.get('app-budget .info-block').should('be.visible')
        .should("contain.text", " Бюджет, млн. руб: Освоение 111,50/144,12 Финансирование 111,71/166,98 ");
        //Проверка наличия бублика выполнения и отображения значений процента выполнения
        cy.get('app-plate-item-year app-plate-circle-progress')
        .should('be.visible').should("contain.text", "0% 0% ");
        //Проверка отображения и количества "Мероприятий требующийх повышенного внимания"
        cy.get('app-plate-item-year .medium')
        .should('be.visible').should("contain.text", " 0 ");
        //Проверка отображения и количества "Мероприятий требующийх немедленного вмешательства"
        cy.get('app-plate-item-year .high')
        .should('be.visible').should("contain.text", " 1 ");
        //Проверка отображения и количества прикрепленных документов
        cy.get('app-plate-item-year .attachments')
        .should('be.visible').should("contain.text", "0");
    });

    it("should do field validation on tiles business block", () => {
        cy.wait(500).reload()
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', "Целевая программа Cypress Автотест").as('Lvl-1');
        cy.get('@Lvl-1').find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', "2023 ").as('Lvl-2');
        cy.get('@Lvl-2').find('.link-t4').click();
        //Проверка наличия иконки "Бизнес Блок" слева от наименования уровня проекта
        cy.get('app-plate-item-business-block .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-bb");
        //Проверка наличия наименования уровня проекта
        cy.get('app-plate-item-business-block .h2')
        .should('be.visible').should("contain.text", "КНИПИ ");
        //Проверка наличия значка "Мероприятия требующие немедленного вмешательства"
        cy.get('app-plate-item-business-block .risk-degree')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "risk-degree mdi mdi-alert risk-degree-high ng-star-inserted");
        //Проверка количества дочерних уровней и наличия ссылки перехода к ним
        cy.get('app-plate-item-business-block .sub-projects-link')
        .should('be.visible').should("contain.text", "Подпроекты(1)");
        //Проверка наличия блока и количества объектов (ЦП, Мероприятия, Справочно)
        cy.get('app-simple-block .info-block')
        .should('be.visible').should("contain.text", " Количество ОГ:  1 ");
        //Проверка наличия блока и количества объектов (ЦП, Мероприятия, Справочно)
        cy.get('app-objects-count .info-block').should('be.visible')
        .should("contain.text", " Количество объектов: Объекты ЦП 0/1 Справочно 0/1 ");
        //Проверка наличия блока и количества договоров
        cy.get('app-contracts-count .info-block').should('be.visible')
        .should("contain.text", " Количество договоров:  10/20 ");
        //Проверка наличия блока и сумм бюджетов
        cy.get('app-budget .info-block').should('be.visible')
        .should("contain.text", " Бюджет, млн. руб: Освоение 111,50/144,12 Финансирование 111,71/166,98 ");
        //Проверка наличия бублика выполнения и отображения значений процента выполнения
        cy.get('.chart-block app-plate-circle-progress')
        .should('be.visible').should("contain.text", "0% 0% ");
        //Проверка отображения и количества "Мероприятий требующийх повышенного внимания"
        cy.get('.chart-block .medium')
        .should('be.visible').should("contain.text", " 0 ");
        //Проверка отображения и количества "Мероприятий требующийх немедленного вмешательства"
        cy.get('.chart-block .high')
        .should('be.visible').should("contain.text", " 1 ");
        //Проверка отображения и количества прикрепленных документов
        cy.get('.chart-block .attachments')
        .should('be.visible').should("contain.text", "0");
    });

    it("should do field validation on tiles society group", () => {
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
        //Проверка наличия иконки "Общество группы" слева от наименования уровня проекта
        cy.get('app-plate-item-og .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-og");
        //Проверка наличия наименования уровня проекта
        cy.get('app-plate-item-og .h2').should('be.visible')
        .should("contain.text", 'АО \«ИГиРГИ\»');
        //Проверка наличия значка "Мероприятия требующие немедленного вмешательства"
        cy.get('app-plate-item-og .risk-degree')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "risk-degree mdi mdi-alert risk-degree-high ng-star-inserted");
        //Проверка количества дочерних уровней и наличия ссылки перехода к ним
        cy.get('app-plate-item-og .sub-projects-link')
        .should('be.visible').should("contain.text", "Подпроекты(3)");
        //Проверка наличия блока и количества объектов (ЦП, Мероприятия, Справочно)
        cy.get('app-objects-count .info-block').should('be.visible')
        .should("contain.text", " Количество объектов: Объекты ЦП 0/1 Справочно 0/1 ");
        //Проверка наличия блока и количества договоров
        cy.get('app-contracts-count .info-block').should('be.visible')
        .should("contain.text", " Количество договоров:  10/20 ");
        //Проверка наличия блока и сумм бюджетов
        cy.get('app-budget .info-block').should('be.visible')
        .should("contain.text", " Бюджет, млн. руб: Освоение 111,50/144,12 Финансирование 111,71/166,98 ");
        //Проверка наличия бублика выполнения и отображения значений процента выполнения
        cy.get('.chart-block app-plate-circle-progress')
        .should('be.visible').should("contain.text", "0% 0% ");
        //Проверка отображения и количества "Мероприятий требующийх повышенного внимания"
        cy.get('.chart-block .medium')
        .should('be.visible').should("contain.text", " 0 ");
        //Проверка отображения и количества "Мероприятий требующийх немедленного вмешательства"
        cy.get('.chart-block .high')
        .should('be.visible').should("contain.text", " 1 ");
        //Проверка отображения и количества прикрепленных документов
        cy.get('.chart-block .attachments')
        .should('be.visible').should("contain.text", "0");
    });

    it("should do field validation on tiles object under implementation", () => {
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
        //Проверка наличия иконки "Объект под реализацию" слева от наименования уровня проекта
        cy.get('app-plate-object span').eq(0)
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-object");
        //Проверка наличия наименования уровня проекта
        cy.get('app-plate-object .h2').should('be.visible')
        .should("contain.text", "ИУ 1.3.7. Приобретение оборудования взамен устаревшег... ");
        //Проверка количества дочерних уровней и наличия ссылки перехода к ним
        cy.get('app-plate-object span').eq(3)
        .should('be.visible').should("contain.text", "Подпроекты(1)");
        //Проверка наличия блока "Наиболее критичное" и его содержания
        cy.get('app-plate-object app-criticality-degree')
        .should('be.visible').should("contain.text", "Наиболее критичное\n");
        //Проверка наличия блока и сроков исполнения
        cy.get('app-plate-object app-completion-dates').should('be.visible')
        .should("contain.text", " Сроки: Плановые 01.01.2023 - 31.12.2023 Выполнено - ");
        //Проверка наличия блока и количества дочерних объектов
        cy.get('app-plate-object app-objects-count-short')
        .should('be.visible').should("contain.text", "Количество объектов:0/1");
        //Проверка наличия блока и количества договоров
        cy.get('app-plate-object app-contracts-count').should('be.visible')
        .should("contain.text", " Количество договоров:  5/10 ");
        //Проверка наличия бублика выполнения и отображения значений процента выполнения
        cy.get('app-plate-object app-plate-circle-progress')
        .should('be.visible').should("contain.text", "0% 0% ");
        //Проверка отображения и количества "Мероприятий требующийх повышенного внимания"
        cy.get('app-plate-object [apptooltip="Мероприятия, требующие повышенного внимания"]')
        .should('be.visible').should("contain.text", " 0 ");
        //Проверка отображения и количества "Мероприятий требующийх немедленного вмешательства"
        cy.get('app-plate-object [apptooltip="Мероприятия, требующие немедленного вмешательства"]')
        .should('be.visible').should("contain.text", " 0 ");
        //Проверка отображения и количества прикрепленных документов
        cy.get('app-plate-object [apptooltip="Документы"]')
        .should('be.visible').should("contain.text", "0");
    });

    it("should do field validation on tiles execution of assignment", () => {
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
        //Проверка наличия иконки "Исполнение поручений" слева от наименования уровня проекта
        cy.get('app-plate-item-orders-exec .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-order-execution");
        //Проверка наличия наименования уровня проекта
        cy.get('app-plate-item-orders-exec .h2')
        .should('be.visible').should("contain.text", "Статистика исполнения поручений оперативных совеща... ");
        //Проверка количества дочерних уровней и наличия ссылки перехода к ним
        cy.get('app-plate-item-orders-exec .sub-projects-link')
        .should('be.visible').should("contain.text", "Подпроекты(1)");
        //Проверка наличия блока и сроков исполнения
        cy.get('app-plate-item-orders-exec app-completion-dates .info-block').should('be.visible')
        .should("contain.text", " Сроки: Плановые 01.01.2023 - 31.12.2023 Выполнено - ");
        //Проверка наличия блока и количества дочерних объектов
        cy.get('app-plate-item-orders-exec app-objects-count-short .info-block')
        .should('be.visible').should("contain.text", "Количество объектов:0/1");
        //Проверка наличия бублика выполнения и отображения значений процента выполнения
        cy.get('app-plate-item-orders-exec app-plate-circle-progress')
        .should('be.visible').should("contain.text", "0% 0% ");
        //Проверка отображения и количества прикрепленных документов
        cy.get('app-plate-item-orders-exec .attachments')
        .should('be.visible').should("contain.text", "0");
    });

    it("should do field validation on tiles for reference", () => {
        cy.wait(500).reload()
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
        //Проверка наличия иконки "Справочно" слева от наименования уровня проекта
        cy.get('app-plate-object-reference .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-reference");
        //Проверка наличия наименования уровня проекта
        cy.get('app-plate-object-reference .h2').should('be.visible')
        .should("contain.text", "1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ");
        //Проверка наличия значка "Мероприятия требующие немедленного вмешательства"
        cy.get('app-plate-object-reference .risk-degree')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "risk-degree mdi mdi-alert risk-degree-high ng-star-inserted");
        //Проверка количества дочерних уровней и наличия ссылки перехода к ним
        cy.get('app-plate-object-reference .sub-projects-link')
        .should('be.visible').should("contain.text", "Подпроекты(1)");
        //Проверка наличия блока "Наиболее критичное" и его содержания
        cy.get('app-plate-object-reference .criticality-degree-less-critical')
        .should('be.visible').should("contain.text", "Наименее критичное\n");
        //Проверка наличия блока и сроков исполнения
        cy.get('app-plate-object-reference app-completion-dates .info-block')
        .should('be.visible').should("contain.text", " Сроки: Плановые 01.01.2023 - 31.12.2023 Выполнено - ");
        //Проверка наличия блока и количества дочерних объектов
        cy.get('app-plate-object-reference app-objects-count-short .info-block')
        .should('be.visible').should("contain.text", "Количество объектов:0/1");
        //Проверка наличия блока и количества договоров
        cy.get('app-plate-object-reference app-contracts-count .info-block')
        .should('be.visible').should("contain.text", " Количество договоров:  5/10 ");
        //Проверка наличия бублика выполнения и отображения значений процента выполнения
        cy.get('app-plate-object-reference app-plate-circle-progress')
        .should('be.visible').should("contain.text", "0% 0% ");
        //Проверка отображения и количества "Мероприятий требующийх повышенного внимания"
        cy.get('app-plate-object-reference .medium')
        .should('be.visible').should("contain.text", " 0 ");
        //Проверка отображения и количества "Мероприятий требующийх немедленного вмешательства"
        cy.get('app-plate-object-reference .high')
        .should('be.visible').should("contain.text", " 1 ");
        //Проверка отображения и количества прикрепленных документов
        cy.get('app-plate-object-reference .attachments')
        .should('be.visible').should("contain.text", "0");
    });

    it("should do field validation on tiles object implementation stage for object under implementation", () => {
        cy.wait(500).reload()
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
        //Выбор созданного проекта и переход к дочернему уровню "Этап реализации объекта"
        cy.get('.item-panel').contains('.item-panel', '1.3.7. Приобретение оборудования взамен устаревшег... ').as('Lvl-5.1');
        cy.get('@Lvl-5.1').find('.link-t4').wait(500).click();
        //Проверка наличия иконки "Этап реализации объекта" слева от наименования уровня проекта
        cy.get('app-plate-item-stage .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-stage");
        //Проверка наличия наименования уровня проекта
        cy.get('app-plate-item-stage .h2').should('be.visible')
        .should("contain.text", "9.2. Поверка измерительной системы ");
        //Проверка наличия блока и сроков исполнения
        cy.get('app-completion-dates .info-block').should('be.visible')
        .should("contain.text", " Сроки: Плановые 01.01.2023 - 31.12.2023 Выполнено - ");
        //Проверка наличия иконки статуса уровня проекта
        cy.get('app-status-event .icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "icon mdi mdi-progress-check ng-star-inserted");
        //Проверка наличия иконки статуса уровня проекта
        cy.get('app-status-event span').contains(" Исполнение ")
        .should('be.visible').should("contain.text", " Исполнение ");
        //Проверка отображения и количества "Мероприятий требующийх повышенного внимания"
        cy.get('[apptooltip="Мероприятия, требующие повышенного внимания"]')
        .should('be.visible').should("contain.text", " 0 ");
        //Проверка отображения и количества "Мероприятий требующийх немедленного вмешательства"
        cy.get('[apptooltip="Мероприятия, требующие немедленного вмешательства"]')
        .should('be.visible').should("contain.text", " 0 ");
        //Проверка отображения и количества прикрепленных документов
        cy.get('[apptooltip="Документы"]')
        .should('be.visible').should("contain.text", "0");
    });

    it("should do field validation on tiles order for execution of assignment", () => {
        cy.wait(500).reload()
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
        //Проверка наличия иконки "Поручение" слева от наименования уровня проекта
        cy.get('app-plate-item-order .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-order");
        //Проверка наличия наименования уровня проекта
        cy.get('app-plate-item-order .h2').should('be.visible')
        .should("contain.text", "от 11.03.2021 № 45 п. 9 ");
        //Проверка наличия блока и ФИО ответственного
        cy.get('[blocktitle="Ответственный"] .info-block').should('be.visible')
        .should("contain.text", " Ответственный:  Черненко Е.Г. ");
        //Проверка наличия блока и даты создания
        cy.get('[blocktitle="Дата начала"] .info-block').should('be.visible')
        .should("contain.text", " Дата начала:  01.01.2023 ");
        //Проверка наличия блока и даты завершения
        cy.get('[blocktitle="Дата завершения"] .info-block').should('be.visible')
        .should("contain.text", " Дата завершения:  31.12.2023 ");
        //Проверка наличия иконки статуса уровня проекта
        cy.get('app-status-event .icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "icon mdi mdi-progress-check ng-star-inserted");
        //Проверка наличия иконки статуса уровня проекта
        cy.get('app-status-event').contains(" Исполнение ")
        .should('be.visible').should("contain.text", " Исполнение ");
        //Проверка отображения и количества прикрепленных документов
        cy.get('[apptooltip="Документы"] ')
        .should('be.visible').should("contain.text", "0");
    });

    it("should do field validation on tiles object implementation stage for reference", () => {
        cy.wait(500).reload()
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
        //Выбор созданного проекта и переход к дочернему уровню "Этап реализации объекта" для "Справочно"
        cy.get('.item-panel').contains('.item-panel', '1.4.19. Оснащение РВС № 656, 657, 658, 689-692, 84... ').as('Lvl-5.3');
        cy.get('@Lvl-5.3').find('.link-t4').wait(500).click();
        //Проверка наличия иконки "Этап реализации объекта" слева от наименования уровня проекта
        cy.get('app-plate-item-stage .type-icon')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "type-icon app-proj-type app-proj-type-program-stage");
        //Проверка наличия наименования уровня проекта
        cy.get('app-plate-item-stage .h2').should('be.visible')
        .should("contain.text", "8. Пусконаладочные работы и опытно промышленная эк... ");
        //Проверка наличия значка "Мероприятия требующие немедленного вмешательства"
        cy.get('.risk-degree')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "risk-degree mdi mdi-alert risk-degree-high ng-star-inserted");
        //Проверка наличия блока и сроков исполнения
        cy.get('app-completion-dates .info-block').should('be.visible')
        .should("contain.text", " Сроки: Плановые 01.01.2023 - 31.12.2023 Выполнено - ");
        //Проверка наличия иконки статуса уровня проекта
        cy.get('.perform-status span')
        .should('be.visible').should('have.attr', 'class')
        .and('equal', "icon mdi mdi-progress-check ng-star-inserted");
        //Проверка наличия иконки статуса уровня проекта
        cy.get('.perform-status span').contains(" Исполнение ")
        .should('be.visible').should("contain.text", " Исполнение ");
        //Проверка отображения и количества "Мероприятий требующийх повышенного внимания"
        cy.get('[apptooltip="Мероприятия, требующие повышенного внимания"]')
        .should('be.visible').should("contain.text", " 0 ");
        //Проверка отображения и количества "Мероприятий требующийх немедленного вмешательства"
        cy.get('[apptooltip="Мероприятия, требующие немедленного вмешательства"]')
        .should('be.visible').should("contain.text", " 1 ");
        //Проверка отображения и количества прикрепленных документов
        cy.get('[apptooltip="Документы"]')
        .should('be.visible').should("contain.text", "0");
    });
});