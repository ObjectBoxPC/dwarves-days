import Set from '../src/set';
import SET_SIZE from '../src/set-size';

const TEST_SET_COUNT = 10;

function makeTestSets(): Set[] {
	return Array.from(Array(TEST_SET_COUNT).keys()).map((currentSet) => ({
		name: `Set ${currentSet + 1}`,
		items: Array.from(Array(SET_SIZE).keys()).map((currentItem) =>
			`Item ${currentSet + 1}-${currentItem + 1}`
		),
	}));
}

const TEST_SETS = makeTestSets();
export default TEST_SETS;

describe('test sets', () => {
	it('should have the right number of sets', () => {
		expect(TEST_SETS).toHaveLength(TEST_SET_COUNT);
	});

	it('should each have proper number of items', () => {
		TEST_SETS.forEach((set) => {
			expect(set.items).toHaveLength(SET_SIZE);
		});
	});
});
