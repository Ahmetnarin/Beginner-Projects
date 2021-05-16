let input = prompt("What would like to do?");
const todos = ['Collect Chicken Eggs' , 'Clean Litter Box'];

while (input !== 'quit' && input !== 'q' ){
    if (input === 'list'){
        console.log('*******************');
        for(let i =0 ; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*******************');
    }else if(input ==="new"){
        const newTodo = prompt("OK, What is new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to list!`);
    } else if(input === "delete"){
        const index = prompt("Ok, enter an index to delete!");
        console.log(`${index} : ${todos[index]} is deleted`);
        todos.splice(index, 1);
        
    }
    input = prompt("What would like to do?")
}

console.log("OK, YOU QUIT THE APP!")