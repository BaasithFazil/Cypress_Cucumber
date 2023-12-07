Feature: Orange HRM Login Validation
   @OnlyScenario
   Scenario: 01  User should be able to login in

   Given Visit Orange HRM website
   When user provide the user name as "Admin"
   When user provide password
   Then Click on the login button into the orange HRM website
   Then The header element "Dashboard" should be visible




