# empdir
app for listing out employees

the basic design structure

## utils/API.js
uses Random User API
for backup an employee list JSON file is provided in public/assets/employeeList.json

## components
- Wrapper component that functions as the basic container for the app
- Header component
- Search component that filters and displays results
- Main component that holds / displays the results of the API call
- EmployeeList component calls the getUsers function
- DataTable component constructs the basic table
- DataBody component populates the rows in the table with five attributes of the employee: employee thumbnail, employee name, employee phone, employee email, and employee date of birth
