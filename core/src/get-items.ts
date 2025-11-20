import Set from './set';
import SET_SIZE from './set-size';

export interface ResultItem {
	setName: string;
	itemName: string;
}

export default function getItems(sets: Set[]): ResultItem[] {
	const selectedSets = getRandomSets(sets, SET_SIZE);
	return selectedSets.map((s) => {
		const indexInSet = Math.floor(Math.random() * SET_SIZE);
		return {
			setName: s.name,
			itemName: s.items[indexInSet],
		}
	});
}

function getRandomSets(sets: Set[], count: number): Set[] {
	// Use "Algorithm R" as described in
	// Vitter, "Random Sampling with a Reservoir" (1985)
	const reservoir = sets.slice(0, count);

	// We need to shuffle the initial items to ensure uniform ordering
	// Use the Fisher-Yates shuffle
	for (let i = 0; i < reservoir.length - 1; i++) {
		const j = Math.floor(Math.random() * (reservoir.length - i)) + i;
		const temp = reservoir[i];
		reservoir[i] = reservoir[j];
		reservoir[j] = temp;
	}

	if (sets.length <= count) {
		return reservoir;
	}

	for (let i = count; i < sets.length; i++) {
		const j = Math.floor(Math.random() * (i + 1));
		if (j < count) {
			reservoir[j] = sets[i];
		}
	}
	return reservoir;
}
