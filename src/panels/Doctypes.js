import React, { useEffect } from 'react';
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
import { fetchDoctypes } from '../actions/doctypes.actions';
import { selectDoctypes } from '../reducers';

const Doctypes = ({
	status,
	error,
	fetchDoctypes,
	doctypes,
	accumulatedTotalDocs,
}) => {
	
	useEffect(() => {
		fetchDoctypes();
	}, []);
	return (
		<Master headerTitle='Doctypes'>
			<Async error={error} loading={status === 'loading'} onRetry={fetchDoctypes} />
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Total Docs</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{doctypes.map(d => (
							<TableRow key={d.name}>
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

export const mapStateProps = state => ({
	accumulatedTotalDocs: selectDoctypes.accumulatedTotalDocs(state),
	doctypes: selectDoctypes.data(state),
	status: selectDoctypes.status(state),
	error: selectDoctypes.error(state),
});

export default compose(
	connect(mapStateProps, { fetchDoctypes })
)(Doctypes);
