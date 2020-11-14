Feature: Google search
 Scenario Outline: As a user, I want to search on google the key word, so I can answer a question

    Given I am on the google page
    When I search for the key <word>
    And I am going to the <reliable> result
    Then I check what happened in <data>

    Examples:
      | word       | reliable  | data |
      | automation | Wikipedia | 1785 |