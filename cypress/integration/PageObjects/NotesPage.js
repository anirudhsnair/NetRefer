class NotesPage 
{

getNewNote()
{
    return cy.get('.icon-new-note > path');
}

getNoteEditor(){
    return cy.get('.note-editor');
}

getViewLine(){
    return cy.get('.view-line');
}

getViewLines()
    {
    return cy.get('.view-lines');
    }

getNavigationMenu()
{
    return cy.get('.icon-menu > g > path');
}

getSettings()
{
    return cy.get(':nth-child(1) > .button');
}
getSignOutButton()
{
    return cy.get('.dialog-actions > :nth-child(3) > .button');
}

getSafelyLogout()
{
    return cy.get('.log-out');
}

getNote(){

    return cy.get('.mtk1', {timeout: 5000});
}
getDeletNote()
{
    return cy.get('.icon-trash');
}

}

export default NotesPage