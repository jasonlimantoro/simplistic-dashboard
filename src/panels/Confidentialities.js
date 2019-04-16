import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { fetchConfidentialities } from '../actions/confidentialities.actions';
import Master from '../layouts/Master';

const Confidentialities = ({ confidentialities, fetchConfidentialities }) => {
	useEffect(() => {
		fetchConfidentialities();
	}, []);
	
	const computeTotal = () => {
		return confidentialities.map(({ total_docs }) => total_docs).reduce((sum, i) => sum + i, 0);
	};
	return (
		<Master headerTitle='Confidentialities'>
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
							<TableCell>{computeTotal()}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>
		</Master>
	);
};

const mapStateToProps = ({ confidentialities: { data } }) => {
	return {
		confidentialities: data,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchConfidentialities: () => dispatch(fetchConfidentialities()),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(Confidentialities);
