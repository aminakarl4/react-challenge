### Challenge requirements

1. Create a component that will render an Array of Tasks. Render first 5 initially, and only render the "details" property of each Task.  Your Task JSON Object should have the following structure:
 ```
 {
 id: Number, //This id needs to be Unique for each Task
 details: String,
 completed: Boolean
 }
 ```
 
2. Have a button that allows you to "Show More" which will render 5 additional JSON objects every time it is clicked, until there are no more Tasks to display.
 
3. Allow Tasks to be set to "completed" by rendering a checkbox component for each Task. Clicking this box should update the "completed" property of a Task to either true or false based on if the box was checked or unchecked.

### To run the application:
1. Clone the repo
1. Navigate inside the `react-challenge` folder
1. Run `npm install`
1. Run `npm start`
1. In case the app doesn't open on it's own, you can find it at `http://localhost:3000/`
