import getItems from '../src/get-items';
import makeTestSets from '../test/make-test-sets';

describe('getItems', () => {
	const setSize = 10;
	const sets = makeTestSets(setSize, setSize);

	const items = getItems(sets, setSize);

	it('should return proper number of items', () => {
		expect(items).toHaveLength(setSize);
	});

	it('should return existing items', () => {
		items.forEach((item) => {
			const setForItem = sets
				.find((set) => set.name === item.setName);
			expect(setForItem).toBeDefined();
			expect(setForItem!.items).toContain(item.itemName);
		});
	});

	it('getItems should return items from different sets', () => {
		items.forEach((item, i) => {
			const firstSetOccurrence = items
				.findIndex((findItem) => findItem.setName === item.setName);
			expect(firstSetOccurrence).toBe(i);
		});
	});
});
