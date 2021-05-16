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
        const index = parseInt(prompt("Ok, enter an index to delete!"));
        if (!Number.isNaN(index) && index < todos.length){
            const deleted = todos.splice(index , 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index");
        }
    }
    input = prompt("What would like to do?");
}

console.log("OK, YOU QUIT THE APP!");