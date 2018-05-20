import chai = require('chai');
const expect = chai.expect;
import _ = require('lodash');

import getItems from '../src/get-items';
import Set from '../src/set';
import SET_SIZE from '../src/set-size';
import TEST_SETS from './test-sets';

// Disable this rule because of false positives on Chai's assertions
// tslint:disable:no-unused-expression

describe('getItems', () => {
	const items = getItems(TEST_SETS);

	it('should return proper number of items', () => {
		expect(items).to.have.length(SET_SIZE);
	});

	it('should return existing items', () => {
		items.forEach((item) => {
			const setForItem = _.find(
				TEST_SETS,
				(set) => set.name === item.setName,
			);
			expect(setForItem).to.not.be.undefined;
			expect((setForItem as Set).items).to.include(item.itemName);
		});
	});

	it('getItems should return items from different sets', () => {
		items.forEach((item, i) => {
			const firstSetOccurrence = _.findIndex(
				items,
				(findItem) => findItem.setName === item.setName,
			);
			expect(firstSetOccurrence).to.equal(i);
		});
	});
});
