Feature: Add New Record
  As an user I want to add new record so that, I can reference it later.

  Scenario: User provides name, phone number, country and favourite phone brand, then press add button to add new record in the application
    When User provides name, phone number, country and favourite phone brand
    Then User press add button to add new record    
    Then New record details is displayed in list