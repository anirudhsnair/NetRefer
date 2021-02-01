import { Given , When,Then} from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../PageObjects/LoginPage';
import NotesPage from '../PageObjects/NotesPage';
import 'cypress-wait-until';

const loginPage=new LoginPage();
const notesPage=new NotesPage();
var baseUrl=Cypress.config('noteCreationbaseUrl');

Given('User is logged into the system with {string} and {string}', (email,password) => {
    cy.visit(baseUrl,{timeout: 10000});
    cy.on('uncaught:exception', (err, runnable) => {
        return false
      }) 
    loginPage.getEmailForSimpleNote().type(email);
    loginPage.getPasswordForSimpleNote().type(password);
    loginPage.getLoginButtonForSimpleNote().click();
})
And ('Logout from Simplenote', () => {
    notesPage.getNavigationMenu().click();
    notesPage.getSettings().click();
    notesPage.getSignOutButton().click();
    notesPage.getSafelyLogout().click();
    
    
})

And ('User login to the system with {string} and {string}', (email,password) => {
    loginPage.getEmailForSimpleNote().type(email);
    loginPage.getPasswordForSimpleNote().type(password);
    loginPage.getLoginButtonForSimpleNote().click();
    
})

When('A note is created with {string}',(note)=> {
    notesPage.getNewNote().click();
    notesPage.getNoteEditor().type(note);

})

Then('Created note should be available in the notes list with {string}',(note)=>{
    
    notesPage.getNote().should('have.text',note);
   // notesPage.getDeletNote().click();

})
