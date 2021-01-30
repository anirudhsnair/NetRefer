describe('List Users', () => {
    it('returns list of Users', () => {
        cy.request({
          url: 'https://reqres.in/api/users/', 
          failOnStatusCode: false 
        }).then((response) => {
          expect(response.status).to.equals(200);
        })
      })
      it('returns no user', () => {
        cy.request({
          url: 'https://reqres.in/api/users/23', 
          failOnStatusCode: false 
        }).then((response) => {
          expect(response.status).to.equals(404);

        })
      })
      
  })
