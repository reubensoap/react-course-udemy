/*

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
    }
};

const { title, author } = book;
const {name: publisherName = 'Self Publish'} = book.publisher;

console.log(`The name of the book is ${title} by ${author}`);
console.log(`This book is published by ${publisherName}`);
*/

const item = ['coffee', '(hot)', '$2.50', '$2.75'];

const [,type, medCost] = item;

console.log(`The medium ${type} coffee, cost ${medCost}`);

