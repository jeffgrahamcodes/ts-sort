import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([
  10000, 3, -5, 10, 1,
]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
