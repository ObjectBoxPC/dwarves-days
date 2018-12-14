import SETS from '../src/sets';
import SET_SIZE from '../src/set-size';

describe('sets', () => {
	it('should have enough sets', () => {
		expect(SETS.length).toBeGreaterThanOrEqual(SET_SIZE);
	});
	it('should each have proper number of items', () => {
		SETS.forEach((set) => {
			expect(set.items).toHaveLength(SET_SIZE);
		});
	});
});
