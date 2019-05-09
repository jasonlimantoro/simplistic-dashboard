import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import Master from '../layouts/Master';
import Async from '../common/components/Api/Async';
import SearchBar from '../components/SearchBar';
import { selectLanguages } from '../reducers';
import { fetch, filter } from '../actions/languages.action';


const Languages = ({
	data,
	status,
	error,
	fetch,
	filter,
	accumulatedTotalDocs,
}) => {
	const [search, setSearch] = useState('');
	
	useEffect(() => {
		fetch();
	}, []);
	
	const handleChange = (e) => {
		const { value } = e.target;
		setSearch(value);
		filter(value);
	};
	return (
		<Master headerTitle='Languages'>
			<Async error={error} loading={status === 'loading'} onRetry={fetch} />
			<Typography component='p'>{data.length} results matching <code>"{search}"</code></Typography>
			<Paper>
				<Table data-testid='language-table'>
					<TableHead>
						<TableRow>
							<TableCell colSpan={2}>
								<SearchBar
									inputProps={{ placeholder: 'Search name ...', onChange: handleChange, name: 'search' }}
								/>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Total Docs</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map(d => (
							<TableRow key={d.name} data-testid='data-row'>
								<TableCell>{d.name}</TableCell>
								<TableCell>{d.total_docs}</TableCell>
							</TableRow>
						))}
						<TableRow>
							<TableCell>Total</TableCell>
							<TableCell>{accumulatedTotalDocs}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>
		</Master>
	);
};

const mapStateToProps = (state) => ({
	accumulatedTotalDocs: selectLanguages.accumulatedTotalDocs(state),
	data: selectLanguages.data(state),
	status: selectLanguages.status(state),
	error: selectLanguages.error(state),
});

export default compose(
	connect(mapStateToProps, { fetch, filter }),
)(Languages);
