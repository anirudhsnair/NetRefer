import { Given , When,Then} from "cypress-cucumber-preprocessor/steps";
var statusCode;
var bodyContent;
var apibaseUrl=Cypress.config('registrationBackendUrl');
When ('api- register a user with email:{string} and password:{string}', (mail,pwd) => {
    cy.request({
        method: 'POST',
        url: apibaseUrl, // baseUrl is prepended to url'
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          email: mail,
          password: pwd
        }
      }).then((response) => {
        statusCode=response.status;
        bodyContent=response.body;
      })
})

Then ('api- user registration should be successful',() => {

  expect(statusCode).to.equals(200);
  console.log(bodyContent);

})

When ('api- register a user with email:{string}', (mail) => {
    cy.request({
        method: 'POST',
        url: apibaseUrl, // baseUrl is prepended to url'
        failOnStatusCode: false ,
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          email: mail,
        }
      }).then((response) => {
        statusCode=response.status;
        bodyContent=response.body;
      })
})

Then ('api- error message should be displayed',() => {

  expect(statusCode).to.equals(400);
  console.log(bodyContent);

})