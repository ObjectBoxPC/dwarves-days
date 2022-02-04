import Set from '../src/set';

export default function makeTestSets(count: number, size: number): Set[] {
	return Array.from(Array(count).keys()).map((currentSet) => ({
		name: `Set ${currentSet + 1}`,
		items: Array.from(Array(size).keys()).map((currentItem) =>
			`Item ${currentSet + 1}-${currentItem + 1}`
		),
	}));
}

describe('makeTestSets', () => {
	const count = 10;
	const size = 5;

	const testSets = makeTestSets(count, size);

	it('should produce the right number of sets', () => {
		expect(testSets).toHaveLength(count);
	});

	it('should each have proper number of items', () => {
		testSets.forEach((set) => {
			expect(set.items).toHaveLength(size);
		});
	});
});
