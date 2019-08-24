
console.log('FUNctions');

const fancyFunction = (something) => {
    return something + 'fancy';
}

const output = fancyFunction('michael is ');
console.log(output);

// output = 'something else';

let firstName = 'Charity';
let lastName = 'Bunyon';

console.log(`${firstName} ${lastName}`);

firstName = 'Ty';
lastName = 'Jade';

console.log(`${firstName} ${lastName}`);

firstName = 'Justin';
lastName = 'Order';

console.log(`${firstName} ${lastName}`);


// es6 new version of JS
const sayMyName = (first, last) => {
    //do something
    return`${first} ${last}`;
}

//es5 older version has the word function

console.log(sayMyName('Charity', 'Bunyon'))
;



// NUGGET TIME

const nuggetizzer = (animal) => {
    return `nugget ${animal}`
}

const humaneNuggetizer = (animal) => {
    return animal;
}

const spamFactory = (literallyAnthing) => {
    return 'spam (lunch)';
}

console.log(nuggetizzer('chicken'));
console.log(nuggetizzer('octopus'));
console.log(nuggetizzer('john wark'));

console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('octopus'));
console.log(humaneNuggetizer('john wark'));

console.log(spamFactory('chicken'));
console.log(spamFactory('octopus'));
console.log(spamFactory('john wark'));



let bandNumber = 1;

const printToDom = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint}

    // The function needs to exist above it before I use it

const takeNumber = (bandName) => {
    // Write your code here. See comments below for what should be returned
    printToDom(`<p>${bandNumber}. ${bandName}</p>`);
    bandNumber++
}

takeNumber('Beach Boys');
takeNumber('Loveies');




// printToDom('Charity'); const printToDom = (toPrint) => {

