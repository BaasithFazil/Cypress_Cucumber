 Feature: Orange HRM Demo Admin page testing

 Background: Login into the system
   Given the user is on the "Login" page
   Then User log into the system with "Admin" username and "admin123" password

   Scenario: 01 Navigate to admin panel and selecting dropdown checking

    When Search the "Admin" menu item in the search option
    And Click the "Job" dropdown option
    Then Click the dropdown option "JobTitle" as



