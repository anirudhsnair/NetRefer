import { Given , When,Then} from "cypress-cucumber-preprocessor/steps";
var statusCode;
var bodyContent;
When ('api- valid request for listing users', () => {

      cy.request({
        url: 'https://reqres.in/api/users/', 
        failOnStatusCode: false 
      }).then((response) => {
        statusCode=response.status;
        bodyContent=response.body;
      })
      
    })
    
   
  
    When ('api- invalid request for listing users', () => { 

      cy.request({
        url: 'https://reqres.in/api/users/23', 
        failOnStatusCode: false 
      }).then((response) => {
        statusCode=response.status;
        bodyContent=response.body;

      })
    
        })


Then ('api- all users should be listed',() => {
  expect(statusCode).to.equals(200);
  console.log(bodyContent);
  cy.get(bodyContent).should('not.be.empty');
  expect(bodyContent).to.have.property('page');
  expect(bodyContent).to.have.property('per_page');
  expect(bodyContent).to.have.property('total');
  expect(bodyContent).to.have.property('total_pages');
  expect(bodyContent).to.have.property('data');
  expect(bodyContent).to.have.property('support');

}) 
  


Then ('api- error message should be displayed',() => {
  expect(statusCode).to.equals(404);
  console.log(bodyContent);
  cy.get(bodyContent).should('not.be.empty');
  expect(bodyContent).not.to.have.property('page');
  expect(bodyContent).not.to.have.property('per_page');
  expect(bodyContent).not.to.have.property('total');
  expect(bodyContent).not.to.have.property('total_pages');
  expect(bodyContent).not.to.have.property('data');
  expect(bodyContent).not.to.have.property('support');


})