/* script.js file for Onboarding Project*/

/*Here we are using the getElementByID() method to select the HTML elements from our
HTML file and storing them in javascript elements.  This will allow us to use them
without having to constantly call the method.*/
var form = document.getElementById('todo-form');        //Allows user to interact with the form
var input = document.getElementById('todo-input');      //Allows user to store list items ny using the button
var list = document.getElementById('todo-list');        //Allows user to see the updated todo-list

/*Here we are calling the addEventListener on our window.  When our webpage loads
entirely the call back function will load our statement into our window and let us
know that the event is completed.*/
window.addEventListener('load', function() {
    console.log('Page has loaded!');
    for (var i = 0; i < localStorage.length; i++) {  //Here we are looping through the length of our localstorage
        addTaskToList(localStorage.key(i));         //We retrieve the key (task description) and add it to the list to be displayed on the webpage
      }
  });
  form.addEventListener('submit', function(event) { //This piece of code waits on the user to press the submit button or press enter when they are within the todo list
    event.preventDefault();     //preventDefault() stops the page from reloading when the next submit event occurs.
   
    var task = input.value;     //Creates a variable task that awaits user input
    input.value = '';           //User input is assigned to the variable
   
    addTaskToList(task);        //The variable is assigned to the list
    localStorage.setItem(task, task);       //The item is assigned a key, value pair
   });
   
  
  
 