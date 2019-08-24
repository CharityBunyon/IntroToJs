//Basic Conditional Statement 
const bouncer = (age) => {
    if (age >= 21) {
        console.log('DRINK (at the bar)')
    // do the thing
    } else {
        console.log('SHAME')
        //do the other thing
    }
}

bouncer(12);
bouncer(93);

// Wrapped this if statement in a function 

const me = 'martin';
console.log(me.length);

const myPerson = {
    name: 'Charity',
    age: '29',
}

//dot notation
console.log(myPerson.name);
console.log(myPerson['name']);


//Challenge

const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status = 'vip';
    } else {
        employee.status = 'peasant'
    }
    // }
    // return employee;
    console.log(`${employee.name} is a total ${employee.status}`);
    return employee;
}

const person = {
    name: 'Michael',
    status: ''
}

findAndLogEmployeeStatus({
    name: prompt('Enter employee name'),
    status: ''
})
