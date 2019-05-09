import reducer from '../../reducers/confidentialities.reducer';
import { defaultState } from '../utils/constants';

describe('Confidentialities Reducer', () => {
	it('should have a valid default state', () => {
		const actual = reducer(undefined, { type: 'UNDEFINED' });
		
		expect(actual).toEqual(defaultState);
	});
	
	describe('api key', () => {
		it('can start fetching confidentialities', () => {
			const actual = reducer(undefined, {
				type: 'FETCH_CONFIDENTIALITIES_REQUEST',
			});
			
			const expected = {
				...defaultState.api,
				status: 'loading',
			};
			
			expect(actual.api).toEqual(expected);
		});
		
		it('can fetch confidentialities', () => {
			const fake = [
				{
					id: 1,
					name: 'secret',
				},
				{
					id: 2,
					name: 'Top Secret',
				}
			];
			
			const expected = {
				...defaultState.api,
				data: fake,
				status: 'success',
			};
			
			const actual = reducer(undefined, {
				type: 'FETCH_CONFIDENTIALITIES_SUCCESS',
				confidentialities: fake,
			});
			
			expect(actual.api).toEqual(expected);
		});
		
		it('can handle fetch error', () => {
			const error = { message: 'NETWORK ERROR' };
			const actual = reducer(undefined, {
				type: 'FETCH_CONFIDENTIALITIES_ERROR',
				error,
			});
			
			const expected = {
				...defaultState.api,
				status: 'error',
				error,
			};
			
			expect(actual.api).toEqual(expected);
		});
	});
	
	describe('filter key', () => {
		it('can filter', () => {
			const filter = 'secret';
			const actual = reducer(undefined, {
				type: 'SET_FILTER',
				filter,
			});
			const expected = filter;
			
			expect(actual.filter).toEqual(expected);
		});
	});
});
