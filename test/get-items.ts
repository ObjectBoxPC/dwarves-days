import _ = require('lodash');

import getItems from '../src/get-items';
import Set from '../src/set';
import SET_SIZE from '../src/set-size';
import TEST_SETS from './test-sets';

describe('getItems', () => {
	const items = getItems(TEST_SETS);

	it('should return proper number of items', () => {
		expect(items).toHaveLength(SET_SIZE);
	});

	it('should return existing items', () => {
		items.forEach((item) => {
			const setForItem = _.find(
				TEST_SETS,
				(set) => set.name === item.setName,
			);
			expect(setForItem).toBeDefined();
			expect(setForItem!.items).toContain(item.itemName);
		});
	});

	it('getItems should return items from different sets', () => {
		items.forEach((item, i) => {
			const firstSetOccurrence = _.findIndex(
				items,
				(findItem) => findItem.setName === item.setName,
			);
			expect(firstSetOccurrence).toBe(i);
		});
	});
});
