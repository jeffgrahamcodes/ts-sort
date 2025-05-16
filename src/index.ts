import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([
  10000, 3, -5, 10, 1,
]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollections = new CharactersCollection('Apple');
charactersCollections.sort();
console.log(charactersCollections.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
