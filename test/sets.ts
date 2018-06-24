import chai = require('chai');
const expect = chai.expect;

import SETS from '../src/sets';
import SET_SIZE from '../src/set-size';

describe('sets', () => {
	it('should have enough sets', () => {
		expect(SETS).to.have.length.at.least(SET_SIZE);
	});
	it('should each have proper number of items', () => {
		SETS.forEach((set) => {
			expect(set.items).to.have.length(SET_SIZE);
		});
	});
});
