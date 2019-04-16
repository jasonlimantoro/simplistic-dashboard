import { combineReducers } from 'redux';

import confidentialitiesReducer from './confidentialitiesReducer';
import doctypesReducer from './doctypesReducer';
import languagesReducer from './languagesReducer';

export default combineReducers({
	confidentialitiesReducer,
	doctypesReducer,
	languagesReducer,
});
