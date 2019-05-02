import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { selectConfidentialities } from '../reducers';
import { fetchConfidentialities, filterConfidentialities } from '../actions/confidentialities.actions';
import Master from '../layouts/Master';
import Async from '../common/components/Api/Async';
import SearchBar from '../components/SearchBar';

const Confidentialities = ({
	data,
	accumulatedTotalDocs,
	fetchConfidentialities,
	filterConfidentialities,
	error,
	status,
}) => {
	
	const [search, setSearch] = useState('');
	
	useEffect(() => {
		fetchConfidentialities();
	}, []);
	
	const handleChange = e => {
		const { value } = e.target;
		filterConfidentialities(value);
		setSearch(value);
	};
	
	return (
		<Master headerTitle='Confidentialities'>
			<Async error={error} loading={status === 'loading'} onRetry={fetchConfidentialities} />
			<Typography component='p'>{data.length} results matching <code>"{search}"</code></Typography>
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell colSpan={3}>
								<SearchBar
									inputProps={{ placeholder: 'Search name ...', value: search, onChange: handleChange }}
								/>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Total Docs</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map(c => (
							<TableRow key={c.id}>
								<TableCell>{c.id}</TableCell>
								<TableCell>{c.name}</TableCell>
								<TableCell>{c.total_docs}</TableCell>
							</TableRow>
						))}
						<TableRow>
							<TableCell />
							<TableCell>Total</TableCell>
							<TableCell>{accumulatedTotalDocs}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>
		</Master>
	);
};

const mapStateToProps = (state) => {
	return {
		data: selectConfidentialities.data(state),
		accumulatedTotalDocs: selectConfidentialities.accumulatedTotalDocs(state),
		error: selectConfidentialities.error(state),
		status: selectConfidentialities.status(state),
	};
};

export default compose(
	connect(mapStateToProps, { fetchConfidentialities, filterConfidentialities }),
)(Confidentialities);
