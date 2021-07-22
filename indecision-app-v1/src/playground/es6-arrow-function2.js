// arugments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
}

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    city: ['Phily', 'New York'],
    printPlacesLived() {
        const cityMessages = this.city.map((city) => {
            return this.name + ' has lived in ' + city + '!';
        });

        return cityMessages;
    }
};

console.log(user.printPlacesLived());





































// Challenge area

const multiplier = {
    //number - array of numbers
    //multiplBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [1, 2, 6, 8],
    multiplyBy: 3,
    multiply() {
        /* THIS WORKS
        const mulled = this.numbers.map((number) => {
            return number * this.multiplyBy;
        })

        return mulled;
        */

        /* THIS ALSO WORKS */
        return this.numbers.map((number) => number * this.multiplyBy);


    }

};

console.log(multiplier.multiply());