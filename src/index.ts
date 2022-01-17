import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sorting for number collection
const numbersCollection = new NumbersCollection([1, 5, 8, 3, 4]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Sorting for character collection
const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

// Sorting for linked list
const linkedList = new LinkedList();
linkedList.add(606);
linkedList.add(-11);
linkedList.add(10);
linkedList.add(4);
linkedList.sort();
linkedList.print();
