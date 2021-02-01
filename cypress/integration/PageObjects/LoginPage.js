class LoginPage {
getEmail() {
    return cy.get('#username',{timeout: 20000});
}

getPassword(){
    return cy.get('#password', {timeout: 20000});
}
getLoginButton(){
    return cy.get('#loginButton');
}
getLoginUserName() {
    return cy.get('._2nB_7KEJsuhQKdDMrrWUp8',{timeout: 25000});
}

getResponseMessage() {
    return cy.get('#responseMessage',{timeout: 20000});
}

getErrorStatusMessage() {
    return cy.get('.error-status',{timeout: 20000});
}

getRememberMe()
{
    return cy.get('#rememberMe',{timeout: 20000});
}

getUserMenu()
{
    return cy.get('._1-Kc8Ggn0BS8u9vp8UwmQw',{timeout: 20000});
}

getSignOutButton()
{
    return cy.get('._2AlnYOJxMYsUbT9btUT98m',);
}

getLoginLink()
{
    return cy.get(':nth-child(5) > .nav-label');
}

getNavigationButton()
{
  return cy.get('.drawer-nav-open-btn > img',{timeout: 20000});  
}

getEmailForSimpleNote() {
    return cy.get('#email',{timeout: 20000});
}

getPasswordForSimpleNote(){
    return cy.get('#password', {timeout: 20000});
}
getLoginButtonForSimpleNote(){
    return cy.get('[type="submit"]');
}



}



export default LoginPage