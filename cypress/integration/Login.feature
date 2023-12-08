Feature: Orange HRM Testing

   Background: Login into the system

   Given Visit Orange HRM website
   When user provide the user name as "Admin"
   When user provide password
   Then Click on the login button to log in
 
   
   Scenario: 01  Testing the dashboard
   Then The specified element "DashboardHeader" should be visible

   Scenario: 02  Testing the dashboard
   Then The specified element "DashboardHeader" should be visible
   Then The specified element "profileName" should be visible

   @OnlyScenario
   Scenario: 03 Validating the search menu
   When Searching the "Admin" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "Admin"

   When Searching the "PIM" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "PIM"

   When Searching the "Leave" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "Leave"

   When Searching the "Time" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "Time"

   When Searching the "Recruitment" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "Recruitment"

   When Searching the "My Info" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "My Info"

   
   When Searching the "Performance" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "Performance"

   
   When Searching the "Dashboard" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "Dashboard"

   
   When Searching the "Directory" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "Directory"

   
   When Searching the "Maintenance" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "Maintenance"

   
   When Searching the "Claim" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "Claim"

   When Searching the "Buzz" menu item in the search option
   Then The filter option should be equals to "1"
   Then Clear the text "Buzz"

   Then User Need to logout








