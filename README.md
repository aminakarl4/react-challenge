### Challenge requirements

0. Create a component that will render an Array of Tasks. Render first 5 initially, and only render the "details" property of each Task.  Your Task JSON Object should have the following structure:
```
{
id: Number, //This id needs to be Unique for each Task
details: String,
completed: Boolean
}
```
 
0. Have a button that allows you to "Show More" which will render 5 additional JSON objects every time it is clicked, until there are no more Tasks to display.
 
0. Allow Tasks to be set to "completed" by rendering a checkbox component for each Task. Clicking this box should update the "completed" property of a Task to either true or false based on if the box was checked or unchecked.

### To run the application:
0. Clone the repo
0. Navigate inside the folder
0. Run `npm install`
0. Run `npm start`