//Concatination
// let age = 30;
// let name = "anand";
// console.log('My name is ' + name + ' I am ' + age + ' years old');

// //temlate string
// const details = `My name is ${name} I am ${age} years old`;
// console.log(details);

//spliting Ex1
// const name = 'Hello Anand';
// console.log(a.split(''));
// Ex2
// const name = 'Anand G' , age = 21 , address = 
// "Prestige Falcon City, Bangalore";

// console.log("personal details = My name is ",name, "age is", age," address is", address)

// //reverse
// let name = 'ram';
// console.log(name.split('').reverse().join(''));

// const arr = [4,5,3,5,6,8];
// const min = Math.max(...arr);
// console.log(min);

//Object literals
// const person = {
//     firstName: 'virat',
//     lastName: 'kohli',
//     age: 30,
//     hobbies:['cricket', 'advertisment', 'sports'],
//     address: { 
//         street:'Shabbir nagar',
//         city:'bangalore',
//         state:'Karnataka'
//     }
// }
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[0]);
// console.log(person.address.state);

// todos

const todos = [
    {
        id: 1,
        Text: 'call with peter',
        isCompleted: true
    },
    {
        id: 2,
        Text: 'hospital appointment',
        isCompleted: true
    },
    {
        id: 3,
        Text: 'client meetings',
        isCompleted: false
    },
    ]
    // console.log(todos[0 ].Text);

    //JSON
    const todosJSN = JSON.stringify(todos);
    console.log(todosJSN)
   


