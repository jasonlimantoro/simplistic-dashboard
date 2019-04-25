import { combineReducers } from 'redux';

import confidentialities from './confidentialities.reducer';
import doctypes from './doctypes.reducer';
import languages from './languages.reducer';

export default combineReducers({
	confidentialities,
	doctypes,
	languages,
});
