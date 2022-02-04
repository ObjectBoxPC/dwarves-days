export default class SetSizeError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'SetSizeError';
	}
}