"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// Sorting for number collection
const numbersCollection = new NumbersCollection_1.NumbersCollection([1, 5, 8, 3, 4]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Sorting for character collection
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);
// Sorting for linked list
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(606);
linkedList.add(-11);
linkedList.add(10);
linkedList.add(4);
linkedList.sort();
linkedList.print();
