


describe('Valid Login', function() {
    it('Logins to evernote with valid credentials',function()
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit("https://www.evernote.com/Login.action");
        cy.get('#username').type('anirudh.s.nair@gmail.com');
        cy.get('#loginButton').click();
        cy.get('#password').type('Quest@2021');
        cy.get('#loginButton').click();
        cy.wait(15000);
        cy.get('._2nB_7KEJsuhQKdDMrrWUp8').should('have.text','Anirudh');

    })
})

describe('Invalid Login', function() {
    it('Login to evernote with non registered email',function()
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit("https://www.evernote.com/Login.action");
        cy.get('#username').type('ajay.ratra@gmail.com');
        cy.get('#loginButton').click();
        cy.get('#responseMessage').should('have.text','There is no account for the username or email you entered.');


    })
    it('Login to evernote with valid email and invalid password',function()
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit("https://www.evernote.com/Login.action");
        cy.get('#username').type('anirudh.s.nair@gmail.com');
        cy.get('#loginButton').click();
        cy.get('#password').type('Quest@2020');
        cy.get('#loginButton').click();
        cy.get('.error-status').should('have.text','Incorrect password. You modified your password in the past 24 hours.');
        


    })

    it('Login to evernote without providing username',function()
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit("https://www.evernote.com/Login.action");
        cy.get('#loginButton').click();
        cy.get('#responseMessage').should('have.text','Required data missing');
        


    })
})