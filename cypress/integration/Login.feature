Feature: Login functionality of Evernote

  Scenario Outline: Registered user login
    Given User is on Login Page
    When User login to the system with "<email>" and "<password>"
    Then Homepage should be displayed
     Examples: 
      | email                     | password   | 
      | anirudh.s.nair@gmail.com  | Quest@2021 |   
    
     Scenario Outline: Warning message for non-registered email 
    Given User is on Login Page
    When User tries to login with a "<non registered-email>"
    Then Warning message "<warning message>" should be displayed
         Examples: 
      | non registered-email   | warning message                                           |
      | anirudh458@gmail.com   | There is no account for the username or email you entered.|
    
   Scenario Outline: Warning message for wrong password 
    Given User is on Login Page
    When User login to the system with "<valid email>" and "<invalid password>"
    Then Warning message "<warning message>" should be displayed
      Examples: 
      | valid email                | invalid password | warning message                                                    |
      | anirudh.s.nair@gmail.com   | anirudh857$      | Incorrect password. You modified your password 2 days ago.|
    
   Scenario Outline: Warning message on leaving email as blank
    Given User is on Login Page
    When  User clicks on continue button without entering email
    Then Warning message "<warning message>" should be displayed
      Examples:
      | warning message         |
      | Required data missing   |
      
    
    Scenario Outline: Warning message on leaving password as blank
    Given User is on Login Page
    When User clicks on continue button by inputting "<valid email>" 
    And User clicks on Sign in button without entering password
    Then Warning message "<warning message>" should be displayed
    Examples: 
    |valid email              | warning message          |
    |anirudh.s.nair@gmail.com | This is a required field.| 
    
   Scenario Outline: Prefilling of email id on checking "Remember me for 30 days" checkbox
    Given User is on Login Page
    When User checks Remember me for 30 days while login to the system with "<email>" and "<password>"
    And Logout from Evernote
    And Navigate to login page
    Then "<email>" should be prefilled in email input field
     Examples: 
      | email                    | password   | 
      | anirudh.s.nair@gmail.com | Quest@2021| 
      
   Scenario Outline: Clearing of email id on un-checking "Remember me for 30 days" checkbox
    Given User is on Login Page
     When User un-checks Remember me for 30 days while login to the system with "<email>" and "<password>"
    And Logout from Evernote 
    And Navigate to login page
    Then "<email>" should be cleared in email input field 
     Examples: 
      | email                     | password   | 
      | anirudh.s.nair@gmail.com | Quest@2021| 
