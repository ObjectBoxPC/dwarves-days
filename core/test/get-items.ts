import getItems from '../src/get-items';
import SetSizeError from '../src/set-size-error';
import makeTestSets from '../test/make-test-sets';

const setSize = 10;

describe('getItems', () => {
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

	it('should return items from different sets', () => {
		items.forEach((item, i) => {
			const firstSetOccurrence = items
				.findIndex((findItem) => findItem.setName === item.setName);
			expect(firstSetOccurrence).toBe(i);
		});
	});
});

describe('getItems validation', () => {
	it('should throw on bad set size', () => {
		const sets = makeTestSets(setSize, setSize);

		expect(() => getItems(sets, 0)).toThrow(SetSizeError);
		expect(() => getItems(sets, -1)).toThrow(SetSizeError);
	});

	it('should throw when there are too few sets', () => {
		const sets = makeTestSets(setSize - 1, setSize);

		expect(() => getItems(sets, setSize)).toThrow(SetSizeError);
	});

	it('should throw when sets have incorrect number of items', () => {
		const tooSmallSets = makeTestSets(setSize, setSize - 1);
		const tooLargeSets = makeTestSets(setSize, setSize + 1);

		expect(() => getItems(tooSmallSets, setSize)).toThrow(SetSizeError);
		expect(() => getItems(tooLargeSets, setSize)).toThrow(SetSizeError);
	});
});
