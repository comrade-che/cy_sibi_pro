export function Transition_Login(login, password) {
    //Переход к разделу "Метрология"
    cy.get('[data-project="metro-bgm"]').click();
    //Ввод логина
    cy.get('form [formcontrolname="username"]').type(login);
    //Ввод пароля
    cy.get('form [formcontrolname="password"]').type(password);
    //Вход
    cy.get('form [type="submit"]').click();
    //Проверка открытия раздела "Метрология"
    cy.url().should('include', '/metro-bgm/projects/plates');
    cy.get('.plates-container').should('be.visible');
}