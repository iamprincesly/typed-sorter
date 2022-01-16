import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([1, 74, 7, 2, 5, 9, 3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
