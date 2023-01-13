@REQ_XP-11
Feature: As a user in order to validate the existence of placeholder text I want to access the duckduckgo home page

    @TEST_XP-13
    Scenario: visiting the frontpage
        When I visit duckduckgo.com
        Then I should see a search bar
