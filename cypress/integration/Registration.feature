Feature: Register a user using API

 Scenario Outline: Scenario Outline name: Register a user with email and password
    When api- register a user with email:"<email>" and password:"<password>" 
     Then api- user registration should be successful
     Examples:
              |email             |password|
              |eve.holt@reqres.in|pistol |
 Scenario Outline: Register a user with email only
    When api- register a user with email:"<email>"
    Then api- error message should be displayed
    Examples:
              |email             | 
              |eve.holt@reqres.in|