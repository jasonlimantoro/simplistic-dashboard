import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import {
	selectAccumulatedTotalDocs,
	selectConfidentialities,
	selectConfidentialitiesError,
	selectConfidentialitiesStatus,
} from '../reducers';
import { fetchConfidentialities } from '../actions/confidentialities.actions';
import Master from '../layouts/Master';
import Async from '../common/components/Api/Async';

const Confidentialities = ({
	confidentialities,
	accumulatedTotalDocs,
	fetchConfidentialities,
	error,
	status,
}) => {
	useEffect(() => {
		fetchConfidentialities();
	}, []);
	
	return (
		<Master headerTitle='Confidentialities'>
			<Async error={error} loading={status === 'loading'} onRetry={fetchConfidentialities} />
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Total Docs</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{confidentialities.map(c => (
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
		confidentialities: selectConfidentialities(state),
		accumulatedTotalDocs: selectAccumulatedTotalDocs(state),
		error: selectConfidentialitiesError(state),
		status: selectConfidentialitiesStatus(state),
	};
};

export default compose(
	connect(mapStateToProps, { fetchConfidentialities })
)(Confidentialities);
