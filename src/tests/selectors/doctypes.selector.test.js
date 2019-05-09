import {
	selectData,
	selectStatus,
	selectError,
	selectAccumulatedTotalDocs,
} from '../../reducers/doctypes.reducer';
import { defaultState } from '../utils/constants';

const data = [
	{ id: 1, name: 'secret', total_docs: 23 },
	{ id: 2, name: 'top secret', total_docs: 26 },
	{ id: 3, name: 'something', total_docs: 30 }
];

describe('Doctypes Selector', () => {
	it('can select filtered data', () => {
		const state = {
			...defaultState,
			api: {
				...defaultState.api,
				data,
			},
			filter: 'sec',
		};
		const actual = selectData(state);
		const expected = [data[0], data[1]];
		
		expect(actual).toEqual(expected);
	});
	
	it('can select status', () => {
		const status = 'success';
		const state = {
			...defaultState,
			api: {
				...defaultState.api,
				status,
			},
		};
		
		const actual = selectStatus(state);
		const expected = status;
		
		expect(actual).toEqual(expected);
	});
	
	
	it('can select error', () => {
		const error = 'Network Error';
		const state = {
			...defaultState,
			api: {
				...defaultState.api,
				error,
			},
		};
		
		const actual = selectError(state);
		const expected = error;
		
		expect(actual).toEqual(expected);
	});
	
	it('can compute accumulated total docs', () => {
		
		const state = {
			...defaultState,
			api: {
				...defaultState.api,
				data,
			},
		};
		
		const actual = selectAccumulatedTotalDocs(state);
		const expected = 79;
		
		expect(actual).toEqual(expected);
	});
});
