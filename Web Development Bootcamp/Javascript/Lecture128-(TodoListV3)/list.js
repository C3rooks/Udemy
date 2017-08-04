var todo = ["feed turtle"]; 
var input = prompt("What would you like to do?"); 

while(input !== "quit")
{
	if(input === "list"){
		listItems();
	}
	else if(input === "new")
	{
		createTodo();
	}
	else if(input === "delete")
	{
		deleteTodo();
	}

	input = prompt("What would you like to do?"); 

}
console.log("OK, YOU QUIT THE APP");


function listItems()
{
	console.log("**********");
	todo.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**********");
	
}

function createTodo()
{
	var newTodo = prompt("Enter a new todo"); 
	todo.push(newTodo);
}

function deleteTodo()
{

	var index = prompt("Enter index of todo to delete"); 
	todo.splice(index,1);
}