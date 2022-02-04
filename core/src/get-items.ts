import Set from './set';
import SetSizeError from './set-size-error';

export interface ResultItem {
	setName: string;
	itemName: string;
}

export default function getItems(sets: Set[], setSize: number): ResultItem[] {
	if (setSize <= 0) {
		throw new SetSizeError('Desired set size is not positive');
	}

	const items: ResultItem[] = [];
	const selectedSets = getRandomSets(sets, setSize);
	for (let i = 0; i < setSize; i++) {
		if (selectedSets[i].items.length !== setSize) {
			throw new SetSizeError('Set size does not match final size');
		}

		const indexInSet = Math.floor(Math.random() * setSize);
		items.push({
			setName: selectedSets[i].name,
			itemName: selectedSets[i].items[indexInSet],
		});
	}
	return items;
}

function getRandomSets(sets: Set[], count: number): Set[] {
	if (sets.length < count) {
		throw new SetSizeError('Too few sets to select from');
	}

	// Use "Algorithm R" as described in
	// Vitter, "Random Sampling with a Reservoir" (1985)
	const reservoir: Set[] = [];

	for (let i = 0; i < count; i++) {
		reservoir.push(sets[i]);
	}
	for (let i = count; i < sets.length; i++) {
		const j = Math.floor(Math.random() * (i + 1));
		if (j < count) {
			reservoir[j] = sets[i];
		}
	}
	return reservoir;
}
