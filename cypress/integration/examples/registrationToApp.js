describe('User Registration', () => {
    it('Performs a successful registration', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register', // baseUrl is prepended to url'
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
              email: 'eve.holt@reqres.in',
              password: 'pistol'
            }
          }).then((response) => {
            expect(response.status).to.equals(200);
    })
})
it('Performs an unsuccessful registration', () => {
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register', // baseUrl is prepended to url'
        failOnStatusCode: false ,
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          email: 'eve.holt@reqres.in',
        }
      }).then((response) => {
        expect(response.status).to.equals(400);
})
})
})
