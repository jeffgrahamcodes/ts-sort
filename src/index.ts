import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([
  10000, 3, -5, 10, 1,
]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollections = new CharactersCollection('Xenophobe');
const charSorter = new Sorter(charactersCollections);
charSorter.sort();
console.log(charactersCollections.data);
