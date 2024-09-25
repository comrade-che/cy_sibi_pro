export class Risks {
    
    //СОЗДАНИЕ РИСКА
    
    transitiontorisks(direction, year, businessblock, societygroup, level5, level6){
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', direction).find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', year).find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('.item-panel').contains('.item-panel', businessblock).find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню Объект под реализацию, Исполнение поручений, Мероприятия, Справочно"
        cy.get('.item-panel').contains('.item-panel', societygroup).find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню 6
        cy.get('.item-panel').contains('.item-panel', level5).find('.link-t4').wait(500).click();
        //Выбор созданного проекта
        cy.get('.h2').contains(level6).wait(500).click();
        cy.wait(500);
        //Переход на вкладку "Риски"
        cy.get('[apptooltip="Риски"] span').click();
        //Открытые диалогового окна "Добавить риск"
        cy.get('app-project-risks .add-btn').click();
    };

    risksdescription(description){
        //Введение описания риска
        cy.get('[formcontrolname="description"]').type(description);
    };

    risksstatusId(statusId){
        //Открытие меню выбора статуса риска
        cy.get('[formcontrolname="statusId"]').click();
        //Выбор статуса риска
        cy.get('.ng-option-label').contains(statusId).click();
    };
    
    risksriskDegree(riskDegree){
        //Открытие меню выбора степени риска
        cy.get('[formcontrolname="riskDegree"]').click();
        //Выбор степени риска
        cy.get('.ng-option-label').contains(riskDegree).click();
    };

    risksprojectStageDictId(projectStageDictId){
        //Открытие меню выбора этапа реализации
        cy.get('[formcontrolname="projectStageDictId"]').click();
        //Выбор этапа реализации
        cy.get('.ng-option-label').contains(projectStageDictId).click();
    };

    risksresponsibleForRiskDictId(responsibleForRiskDictId){
        //Открытие меню выбора ответственного за риск
        cy.get('[formcontrolname="responsibleForRiskDictId"]').click();
        //Выбор ответственного за риск
        cy.get('.ng-option-label').contains(responsibleForRiskDictId).click(); 
    };

    risksriskssystemRiskCauseDictId(riskssystemRiskCauseDictId){
        //Открытие меню выбора системной причины риска
        cy.get('[formcontrolname="systemRiskCauseDictId"]').click();
        //Выбор системной причины риска
        cy.get('.ng-option-label').contains(riskssystemRiskCauseDictId).click();
    };

    riskscreatedAt(month, day){
        //Открытие выпадающего календаря
        cy.get('#createdAt .input-icon').click();
        //Переход к выбору месяцев месяца
        cy.get('#createdAt .month-name-year-block').wait(500).click();
        cy.wait(500);
        //Выбор месяца
        cy.get('#createdAt .calendar-table td').contains(month).wait(500).click();
        cy.wait(500);
        //Выбор числа
        cy.get('#createdAt app-table-select-day td.ng-star-inserted').contains(day).click();
    };

    risksdetectedAt(detectedAt){
        //Заполнение поля "Дата выявления риска"
        cy.get('[formcontrolname="detectedAt"] input').type(detectedAt);
    };

    riskspossibleTimingShift(possibleTimingShift){
        //Заполнение поля "Возможное смещение сроков проекта"
        cy.get('[formcontrolname="possibleTimingShift"] input').type(possibleTimingShift);        
    };

    //ВАЛИДАЦИЯ ПОЛЕЙ СОЗДАННОГО РИСКА

    transitiontocreatedrisks(direction, year, businessblock, societygroup, level5, level6, risk){
        //Выбор созданного проекта и переход к дочернему уровню "Год"
        cy.contains('.titles-block', direction).find('.link-t3').click();
        cy.wait(500);
        //Выбор созданного проекта и переход к дочернему уровню "ББ (Бизнес Блок)"
        cy.get('.item-panel').contains('.item-panel', year).find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню "ОГ (Общество Группы)"
        cy.get('.item-panel').contains('.item-panel', businessblock).find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню Объект под реализацию, Исполнение поручений, Мероприятия, Справочно"
        cy.get('.item-panel').contains('.item-panel', societygroup).find('.link-t4').click();
        //Выбор созданного проекта и переход к дочернему уровню 6
        cy.get('.item-panel').contains('.item-panel', level5).find('.link-t4').wait(500).click();
        //Выбор созданного проекта
        cy.get('.h2').contains(level6).wait(500).click();
        cy.wait(500);
        //Переход на вкладку "Риски"
        cy.get('[apptooltip="Риски"] span').click();
        cy.wait(500);
        //Открытие созданного риска на редактирование
        cy.get('.risks-container').contains(risk).as('riskForValid');
        cy.get('@riskForValid').siblings('.title-block').find('[apptooltip="Редактировать"]').click();
    };
    
    validrisksdescription(validdescription){
        //Проверка описания риска
        cy.get('[formcontrolname="description"] input').as('descr');
        cy.get('@descr').should("have.value", validdescription);
    };
    
    validrisksstatusId(validstatusId){
        //Проверка статуса
        cy.get('[formcontrolname="statusId"] .ng-value-label').as('status');
        cy.get('@status').should("contain.text", validstatusId);
    };
        
    validrisksriskDegree(validriskDegree){
        //Проверка степени риска
        cy.get('[formcontrolname="riskDegree"] .ng-value-label').as('degree');
        cy.get('@degree').should("contain.text", validriskDegree);
    };
    
    validrisksprojectStageDictId(validprojectStageDictId){
        //Проверка этапа реализации
        cy.get('[formcontrolname="projectStageDictId"] .ng-value-label').as('stage');
        cy.get('@stage').should("contain.text", validprojectStageDictId);
    };
    
    validrisksresponsibleForRiskDictId(validresponsibleForRiskDictId){
        //Проверка ответственного за риск
        cy.get('[formcontrolname="responsibleForRiskDictId"] .ng-value-label').as('responsible');
        cy.get('@responsible').should("contain.text", validresponsibleForRiskDictId);
    };
    
    validrisksriskssystemRiskCauseDictId(validriskssystemRiskCauseDictId){
        //Проверка системной причины риска
        cy.get('[formcontrolname="systemRiskCauseDictId"] .ng-value-label').as('causeDict');
        cy.get('@causeDict').should("contain.text", validriskssystemRiskCauseDictId);
    }

    validriskscreatedAt(validcreatedAt){
        //Проверка даты создания риска
        cy.get('[formcontrolname="createdAt"] input').should("have.value", validcreatedAt);
    };
    
    validrisksdetectedAt(validdetectedAt){
        //Проверка даты выявления риска
        cy.get('[formcontrolname="detectedAt"] input').should("have.value", validdetectedAt);    
    };
    
    validriskspossibleTimingShift(validpossibleTimingShift){
        //Проверка даты возможного смещения срока проекта
        cy.get('[formcontrolname="possibleTimingShift"] input').as('possible');
        cy.get('@possible').should("have.value", validpossibleTimingShift);
    };
}

export const risks = new Risks()