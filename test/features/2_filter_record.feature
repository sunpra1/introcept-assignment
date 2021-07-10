Feature: Filter Record
  As an user I want to filter the record so that, I can view the records based on provided criteria.

  Scenario: User selects the country and the phone brand to filter the record.
    When User selects country, and phone brand    
    Then Records are filtered based on provided criteria and is displayed in the list