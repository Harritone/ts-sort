import { Sorter } from './Sorter';
import { NumbersCollection } from './NubersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 25]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xxasdfasllkjeioi');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data);
