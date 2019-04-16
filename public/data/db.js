const confidentialities = require('./confidentiality_data');
const doctypes = require('./doctype_data');
const languages = require('./language_data');

function data () {
	return {
		confidentialities,
		doctypes,
		languages,
	};
}

module.exports = data;
