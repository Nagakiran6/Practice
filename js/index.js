
// function to change greetings dynamicly
function ChangeWelcomeMessage() {
    const htmlElement = document.getElementById("welcome").innerHTML;
    const timeInHours = new Date().getHours();

    if (timeInHours <= 12) {
        const htmlElement = document.getElementById("welcome").innerHTML = "Good Morning User!";
    }

    if (timeInHours >= 12) {
        const htmlElement = document.getElementById("welcome").innerHTML = "Good Afternoon User!";
    }

    if (timeInHours >= 17) {
        const htmlElement = document.getElementById("welcome").innerHTML = "Good Evening User!";
    }

}

// calling the above function (running the above fucntion)
ChangeWelcomeMessage();



var todos = [];
function AddTodo() {
    // accessing input field value
    var textBoxValues = document.getElementById('inputBox').value;
    // pushing input field value to array(todos)
    todos.push(textBoxValues);
    // clearing input field value 
    textBoxValues = document.getElementById('inputBox').value = "";
    // printing array (todo) values in html
    document.getElementById('cards_ul').innerHTML = todos?.map(eachTodo => `<li class="todo_item">${eachTodo}</li>`).join('');
}
