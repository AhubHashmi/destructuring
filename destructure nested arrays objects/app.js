let user = {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

let updatedUser = {...user, salary: 12345 };

console.log(updatedUser);


let person = {
    name: 'Ahub',
    age: 22,
    job: 'web-developer',
    friends: ['ahmed', 'ashhad', 'basit', 'salman'],
    childList: {
        firstChild: 'Salman',
        secondChild: 'Ali',
        thirdChild: 'Anas'
    }
}
let { friends: [a, b, c] } = person;
console.log(a, b, c);

let { childList: { firstChild, secondChild } } = person;
console.log(firstChild, secondChild)

console.log(person);

let abcd = {...updatedUser, ...person };
efgh = abcd;
console.log(efgh);