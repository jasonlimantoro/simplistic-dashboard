import createAsyncActionCreators from '../common/factories/actions/async.actions';
import DoctypeService from '../services/doctypes.service';
import MockService from '../services/mock.service';

const service = new DoctypeService({ ServiceUtil: MockService });

export const fetchDoctypes = createAsyncActionCreators(
	'doctypes',
	'fetch',
	() => () => service.get()
);

export const filterDoctypes = (filter) => {
	return {
		type: 'SET_FILTER',
		filter,
	};
};
