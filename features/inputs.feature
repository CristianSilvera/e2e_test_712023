Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the inputs page
    When I inputs with <username>
  

    Examples:
      | username |
      | 12345    |
      | 123456   |
