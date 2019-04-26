import ConfidentialitiesService from '../services/confidentialities.service';
import MockService from '../services/mock.service';
import createAsyncActionCreators from '../common/factories/actions/async.actions';

const service = new ConfidentialitiesService({
	ServiceUtil: MockService,
});

export const fetchConfidentialities = createAsyncActionCreators(
	'confidentialities',
	'fetch',
	() => () => service.get()
);
