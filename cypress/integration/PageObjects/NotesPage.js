class NotesPage 
{

getNewNote()
{
    return cy.get('.icon-new-note > path',{timeout: 10000});
}

getNoteEditor(){
    return cy.get('.note-editor',{timeout: 10000});
}

getViewLine(){
    return cy.get('.view-line',{timeout: 10000});
}

getViewLines()
    {
    return cy.get('.view-lines',{timeout: 10000});
    }

getNavigationMenu()
{
    return cy.get('.icon-menu > g > path',{timeout: 10000});
}

getSettings()
{
    return cy.get(':nth-child(1) > .button',{timeout: 10000});
}
getSignOutButton()
{
    return cy.get('.dialog-actions > :nth-child(3) > .button',{timeout: 10000});
}

getSafelyLogout()
{
    return cy.get('.log-out',{timeout: 10000});
}

getNote(){

    return cy.get('.mtk1', {timeout: 10000});
}
getDeletNote()
{
    return cy.get('.icon-trash');
}

}

export default NotesPage