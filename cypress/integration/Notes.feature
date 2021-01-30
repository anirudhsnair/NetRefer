Feature: Note creation functionality of Simplenote

  Scenario Outline: Note creation with title and body
    Given User is logged into the system with "<email>" and "<password>" 
     When A note is created with "<note>"
    And Logout from Simplenote 
     And User login to the system with "<email>" and "<password>"
    Then Created note should be available in the notes list with "<note>"
     Examples: 
      | email                     | password   | note          | 
      | anirudh.s.nair@gmail.com  | Quest@2021 | SampleNote    |