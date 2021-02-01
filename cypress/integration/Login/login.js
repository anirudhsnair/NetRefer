import { Given , When,Then} from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../PageObjects/LoginPage';
import 'cypress-wait-until';

const loginPage=new LoginPage();

Given('User is on Login Page', () => {
    cy.visit('https://www.evernote.com/Login.action',{timeout: 10000});
    cy.on('uncaught:exception', (err, runnable) => {
        return false
      }) 
})

When ('User login to the system with {string} and {string}', (email,password) => {
    loginPage.getEmail().type(email);
    loginPage.getLoginButton().click();
    loginPage.getPassword().type(password);
    loginPage.getLoginButton().click();
    
})

Then ('Homepage should be displayed',() => {
    loginPage.getLoginUserName().should('have.text','Anirudh');
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  }) 
})

When ('User tries to login with a {string}', (email) => {
    loginPage.getEmail().type(email);
    loginPage.getLoginButton().click();
    
})

Then ('Warning message {string} should be displayed',(warningMessage) => {
    if(warningMessage.startsWith("There is no account"))
    {
    loginPage.getResponseMessage().should('have.text',warningMessage);
    }
    else if(warningMessage.startsWith("Incorrect password"))
    {
        loginPage.getErrorStatusMessage().contains("Incorrect password. You modified your password ");
  
    }
    else if(warningMessage.startsWith("Required data missing"))
    {
        loginPage.getResponseMessage().should('have.text',warningMessage);
  
    }
})

When ('User clicks on continue button without entering email', () => {
    loginPage.getLoginButton().click();
    
}) 

When ('User clicks on continue button by inputting {string}', (email) => {
    loginPage.getEmail().type(email);
    loginPage.getLoginButton().click();
    
}) 

When ('User clicks on Sign in button without entering password', () => {
    loginPage.getLoginButton().click();

    
})

When ('User checks Remember me for 30 days while login to the system with {string} and {string}', (email,password) => {
    loginPage.getEmail().type(email);
    loginPage.getLoginButton().click();
    loginPage.getPassword().type(password);
    loginPage.getRememberMe().check();
    loginPage.getLoginButton().click();

    
})

And ('Logout from Evernote', () => {
    loginPage.getUserMenu().click();
    loginPage.getSignOutButton().click();

    
})

And ('Navigate to login page', () => {
    loginPage.getNavigationButton().click();
    loginPage.getLoginLink().click();

    
})

Then ('{string} should be prefilled in email input field',(email)=>{

     expect(loginPage.getEmail().invoke('val').should('not.to.be.empty'));
    loginPage.getEmail().should('have.value', email)



})

When ('User un-checks Remember me for 30 days while login to the system with {string} and {string}', (email,password) => {
    loginPage.getEmail().type(email);
    loginPage.getLoginButton().click();
    loginPage.getPassword().type(password);
    loginPage.getRememberMe().uncheck();
    loginPage.getLoginButton().click();

    
})

Then ('{string} should be cleared in email input field',(email)=>{

  expect(loginPage.getEmail().invoke('val').should('to.be.empty'));
      loginPage.getEmail().should('not.have.value', email)


})
