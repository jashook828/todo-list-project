/* script.js file for Onboarding Project*/

/*Here we are using the getElementByID() method to select the HTML elements from our
HTML file and storing them in javascript elements.  This will allow us to use them
without having to constantly call the method.*/
var form = document.getElementById('todo-form');        //Allows user to interact with the form
var input = document.getElementById('todo-input');      //Allows user to store list items ny using the button
var list = document.getElementById('task-list');        //Allows user to see the updated todo-list

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

   /*This is the function that will be responsible for creating a new list item for each task
   and appending it to the existing task list on our webpage. */
   function addTaskToList(task){    //Defined the function with the parameter task
    var listItem = document.createElement('li');    //Creating a new list item of type 'li" and assigning it to a variable for reference
    listItem.textContent = task;    //textContent gets the content of all elements, including <script> and <style> elements.

    listItem.addEventListener('click', function(){   //Another eventListner to trigger an event on 'click'
        listItem.remove();      //When event 'click' occurs the task will be removed from both the list
        localStorage.removeItem(task);      //and removed from the local storage
    });
    list.appendChild(listItem);     //Appends listItem to the list (the parent uI element) This will make the new list item element appear on the webpage under the task list.
   }
   
  
  
 