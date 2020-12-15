import { Sorter } from './Sorter';
import { NumbersCollection } from './NubersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 25]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
