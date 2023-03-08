
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
