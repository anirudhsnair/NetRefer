Feature: List users using API

 Scenario: List users with valid api
    When api- valid request for listing users
     Then api- all users should be listed

 Scenario: List users with invalid api
    When api- invalid request for listing users
    Then api- error message should be displayed