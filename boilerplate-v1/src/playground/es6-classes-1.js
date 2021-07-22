

class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return 'Hi';
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }

}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            return description += `. Their major is ${this.major}`;
        }
        return description;
    }

    hasMajor() {
        return !!this.major;
    }
}

class Traveler extends Person {
    constructor(name, age, locationFrom){
        super(name, age);
        this.locationFrom = locationFrom;
    }

    hasLocationFrom(){
        return !!this.locationFrom;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasLocationFrom()) {
            return greeting += `. I am from ${this.locationFrom}`;
        }
        return greeting;
    }

}

const me = new Person('Andrew Mead');

console.log(me.getGreeting());

const other = new Person();
console.log(other);
console.log(other.getDescription());
const pastMe = new Student('Reuben', 25, 'Web Dev');
console.log(pastMe.getDescription());

const traMe = new Traveler('Reuben', 27, 'Plano');
console.log(traMe.getGreeting());

