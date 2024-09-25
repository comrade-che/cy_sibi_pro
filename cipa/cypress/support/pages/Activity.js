export class Activity{
    
    //МЕРОПРИЯТИЯ
    
    //СОЗДАНИЕ МЕРОПРИЯТИЯ
    
    transitiontoаctivity(direction, year, businessblock, societygroup, level5, level6){
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
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Открытые диалогового окна "Добавить мероприятие"
        cy.get('app-project-events .add-btn').click();
    };

    аctivityisProblem(){
        //Установка галочки в чек-бокс "Присутствуют проблемы"
        cy.get('.checkbox-label').click();
    };

    аctivitydate(date){
        //Ввод даты
        cy.get('[formcontrolname="date"]').type(date);
    };

    аctivitytype(type){
        //Открытие списка выбора типа мероприятия
        cy.get('[formcontrolname="type"]').click();
        //Выбора типа мероприятия
        cy.get('.ng-option-label').contains('.ng-option-label', type).click();
    };

    аctivitytitle(title){
        //Заполнение поля "Наименование"
        cy.get('[formcontrolname="title"]').type(title);
    };

    аctivityinformation(information){
        //Заполнение поля "Описание"
        cy.get('[formcontrolname="information"]').type(information);
    };

    аctivitylabelColor(labelColor){
        //Открытие меню выбора цвета метки
        cy.get('.color-rect-btn').eq(0).click();
        //Выбор цвета метки
        cy.get('.available-colors').find(labelColor).click();
    };

    //ВАЛИДАЦИЯ ПОЛЕЙ СОЗДАННОГО МЕРОПРИЯТИЯ

    transitiontocreatedаctivity(direction, year, businessblock, societygroup, level5, level6){
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
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
    };

    openingediting(activity){
        //Открытые диалогового окна "Редактирование мероприятие"
        cy.get('.ng-star-inserted').contains(activity).siblings('.buttons').find('[apptooltip="Редактировать"]').click();
    };

    validproblems(problems){
        cy.get('.ng-star-inserted').contains(" В работе на текущую дату 2022 года ").siblings('.info-block').find('.problems')
        .should("have.text", problems);
    };

    validdate(date){
        //Проверка даты
        cy.get('#date input').should("have.value", date);
    };

    validtype(type){
        //Проверка статуса
        cy.get('[formcontrolname="type"]').should('contain.text', type);
    };

    validtitle(title){
        //Проверка наименования
        cy.get('#title input').should("have.value", title);
    };

    validinformation(information){
        //Проверка описания
        cy.get('#info textarea').should("have.value", information);
    };
    
    //МЕРОПРИЯТИЯ СТАТУС НА КОНЕЦ МЕСЯЦА

    //СОЗДАНИЕ МЕРОПРИЯТИЯ

    transitiontoаctivityATEOTM(direction, year, businessblock, societygroup, level5, level6){
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
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Открытые диалогового окна "Добавить мероприятие"
        cy.get('app-project-events .add-btn').click();
    };

    аctivityATEOTMdate(date){
        //Ввод даты
        cy.get('[formcontrolname="date"]').type(date);
    };
    
    аctivityATEOTMtype(type){
        //Открытие списка выбора типа мероприятия
        cy.get('[formcontrolname="type"]').click();
        //Выбора типа мероприятия
        cy.get('.ng-option-label').contains('.ng-option-label', type).click();
    };

    аctivityATEOTMinformation(information){
        //Заполнение поля "Описание"
        cy.get('[formcontrolname="information"]').type(information);
    };

    аctivityATEOTMtitle(title){
        //Заполнение поля "Наименование"
        cy.get('[formcontrolname="title"]').type(title);
    };

    //ВАЛИДАЦИЯ ПОЛЕЙ СОЗДАННОГО МЕРОПРИЯТИЯ

    transitiontocreatedаctivityATEOTM(direction, year, businessblock, societygroup, level5, level6, аctivityATEOTM){
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
        //Переход на вкладку "Мероприятия"
        cy.get('[apptooltip="Мероприятия"] .tab-icon').click();
        //Открытые диалогового окна "Редактирование мероприятие"
        cy.get('.ng-star-inserted').contains(аctivityATEOTM).siblings('.buttons').find('[apptooltip="Редактировать"]').click();
    };

    validаctivityATEOTMdate(date){
        //Проверка даты
        cy.get('#date input').should("have.value", date);
    };
    
    validаctivityATEOTMtype(type){
        //Проверка статуса
        cy.get('[formcontrolname="type"]').should('contain.text', type);
    };

    validаctivityATEOTMtitle(title){
        //Проверка наименования
        cy.get('#title input').should("have.value", title);
    };

    validаctivityATEOTMinformation(information){
        //Проверка описания
        cy.get('#info textarea').should("have.value", information);
    };

};

export const activity = new Activity()