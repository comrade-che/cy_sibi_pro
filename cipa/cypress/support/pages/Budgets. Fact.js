export class BudgetsDevelopmentFactFactor {
    
    budgetstransition(direction, year, businessblock){
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', direction).as('Lvl1');
        cy.get('@Lvl1').find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.ng-star-inserted').contains('.ng-star-inserted', year).as('Lvl2');
        cy.get('@Lvl2').find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('.item-panel').contains('.item-panel', businessblock).as('Lvl3');
        cy.get('@Lvl3').find('.link-t4').click();
        cy.wait(500);
        //Выбор созданного проекта
        cy.get('.h2').wait(500).click();
        cy.wait(500);
        //Переход на вкладку "Бюджеты" в Боковой информационной панели
        cy.get('[apptooltip="Бюджеты"] span').click();
        //Переход на страницу "Редактирование" бюджетов
        cy.get('[apptooltip="Редактировать"]').click();
    };

    budgetsdevelopmentfactfactor(position, comment, value, rate, factor, cause){
        //Открытие диалогового окна добавления "Факт Освоение Январь"
        cy.get('.link-primary').eq(position).click();
        //Добавление Комметария
        cy.get('[formcontrolname="comment"]').type(comment);
        //Добавление значения факт Освоение
        cy.get('[formcontrolname="factValue"]').type(value);
        //Приминение введенных значений
        cy.get('.button-t1').click();
        //Открытие меню выбора оценки фактора расхождения
        cy.get('[formcontrolname="discrepancyFactorRate"]').click();
        //Выбор оценки фактора расхождения
        cy.get('.ng-dropdown-panel-items .ng-option').contains(rate).click();
        //Открытие меню выбора оценки фактора расхождения
        cy.get('[formcontrolname="discrepancyFactor"]').click();
        //Выбор оценки фактора расхождения
        cy.get('.ng-option .ng-option-label').contains(factor).click();
        //Добавление Причины расхождения
        cy.get('[formcontrolname="discrepancyReason"]').type(cause);
        //Приминение введенных значений
        cy.get('.button-t1').click();
    };

    budgetsdevelopmentfactnotfactor(position, comment, value){
        //Открытие диалогового окна добавления "Факт Освоение"
        cy.get('.link-primary').eq(position).click();
        //Добавление Комметария
        cy.get('[formcontrolname="comment"]').type(comment);
        //Добавление значения факт Освоение
        cy.get('[formcontrolname="factValue"]').type(value);
        //Приминение введенных значений
        cy.get('.button-t1').click();
    };

    budgetsdevelopmentfactpositive(numder, value){
        //Проверка бюджет факт освоение Положительный
        cy.get('.link-primary').eq(numder).should("contain.text", value);
    };

    budgetsdevelopmentfactnegative(numder, value){
        //Проверка бюджет факт освоение Отрицательный
        cy.get('.link-primary').eq(numder).should("contain.text", value);
    };

    budgetsdevelopmentfactprimary(numder, value){
        //Проверка бюджет факт освоение Отрицательный
        cy.get('.link-primary').eq(numder).should("contain.text", value);
    }

    budgetsdevelopmentfacttotal(numder, value){
        //Проверка бюджет факт освоение итого за год
        cy.get('.year-total-value').eq(numder).should("contain.text", value);
    }
}

export const budgetsdevelopmentfactfactor = new BudgetsDevelopmentFactFactor()