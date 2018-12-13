# Dwarves Days

Dwarves Days is a simple package for creating random sets of seven items taken from other sets. It is inspired by the [xkcd comic "Seven"](https://www.xkcd.com/1417/).

## Usage

Simple demonstration:

```
const dwarvesDays = require('dwarves-days');
console.log(dwarvesDays.getItems(dwarvesDays.SETS));
```

The `getItems` method takes an array of sets of seven and returns a random set of seven with items from different sets.

The input sets are represented as objects with a `name` and `items`. In TypeScript this is represented using the `Set` interface. For example:

```
import { Set } from 'dwarves-days';
const daysOfWeek: Set = {
	name: 'days of the week',
	items: [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	]
}
```

The `SETS` variable is an array of sets based on the original comic, as analyzed by [explain xkcd](https://explainxkcd.com/wiki/index.php/1417:_Seven).

The result set is an array of objects each containing a `setName` and an `itemName`. In TypeScript each item is represented using the `ResultItem` interface. For example:

```
import { ResultItem } from 'dwarves-days';
const randomSet: ResultItem[] = [
	{ setName: 'Seven Seas', itemName: 'Gulf of Mexico' },
	{ setName: 'colors of the rainbow', itemName: 'green' },
	{ setName: 'seven seals', itemName: 'fifth seal' },
	{ setName: 'Seven Sisters', itemName: 'Barnard' },
	{ setName: 'days of the week', itemName: 'Sunday' },
	{ setName: 'layers of the OSI model', itemName: 'physical' },
	{ setName: 'Seven Wonders of the Ancient World', itemName: 'Lighthouse of Alexandria' },
]
```

To express this in the format of the original comic, one may use the first (actual) set as the prompt:

> Can you name the Seven Seas?

> Sure, there's...Gulf of Mexico, green, fifth seal, Barnard, Sunday, physical, Lighthouse of Alexandria.

## License

This package is available under the MIT License. Refer to `LICENSE.txt` for details.
