import createAsyncActionCreators from '../common/factories/actions/async.actions';
import LanguageService from '../services/languages.service';
import MockService from '../services/mock.service';

const service = new LanguageService({ ServiceUtil: MockService });

export const fetch = createAsyncActionCreators(
	'languages',
	'fetch',
	() => () => service.get()
);

export const filter = (filter) => {
	return {
		type: 'SET_FILTER',
		filter,
	};
};
