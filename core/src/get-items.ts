import Set from './set';

export interface ResultItem {
	setName: string;
	itemName: string;
}

export default function getItems(sets: Set[], setSize: number): ResultItem[] {
	const items: ResultItem[] = [];
	const selectedSets = getRandomSets(sets, setSize);
	for (let i = 0; i < setSize; i++) {
		const indexInSet = Math.floor(Math.random() * setSize);
		items.push({
			setName: selectedSets[i].name,
			itemName: selectedSets[i].items[indexInSet],
		});
	}
	return items;
}

function getRandomSets(sets: Set[], count: number): Set[] {
	if (sets.length <= count) {
		return sets;
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
