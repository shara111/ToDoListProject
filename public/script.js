

const inputBox = document.getElementById("input-box"); //we have this in the html file
const Listcontainer = document.getElementById("list-container");

function addTask()
{
    //if the input box is empty
    if(inputBox.value === '')
    {
        alert("You must write something!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; 
        //innerHTML is the text inside li so whatever text we add in the input field that will be added in the li


        //displaying li in the list container
        Listcontainer.appendChild(li); 

        //to create the cross icon to delete the tasks
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


Listcontainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", Listcontainer.innerHTML);
}

function showTask(){
    Listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();