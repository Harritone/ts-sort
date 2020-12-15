"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NubersCollection_1 = require("./NubersCollection");
var numbersCollection = new NubersCollection_1.NumbersCollection([10, 3, -5, 0, 25]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
