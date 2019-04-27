import React, { useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { selectConfidentialities } from '../reducers';
import { fetchConfidentialities, filterConfidentialities } from '../actions/confidentialities.actions';
import Master from '../layouts/Master';
import Async from '../common/components/Api/Async';

const styles = theme => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
		padding: 5,
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
		},
	},
});

const Confidentialities = ({
	confidentialities,
	accumulatedTotalDocs,
	fetchConfidentialities,
	filterConfidentialities,
	error,
	status,
	classes,
}) => {
	
	useEffect(() => {
		fetchConfidentialities();
	}, []);
	
	const handleChange = e => {
		const { value } = e.target;
		filterConfidentialities(value);
	};
	
	return (
		<Master headerTitle='Confidentialities'>
			<Async error={error} loading={status === 'loading'} onRetry={fetchConfidentialities} />
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell colSpan={3}>
								<div className={classes.search}>
									<div className={classes.searchIcon}>
										<SearchIcon />
									</div>
									<InputBase
										placeholder='Search…'
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
										onChange={handleChange}
									/>
								</div>
							</TableCell>
						</TableRow>
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
		confidentialities: selectConfidentialities.data(state),
		accumulatedTotalDocs: selectConfidentialities.accumulatedTotalDocs(state),
		error: selectConfidentialities.error(state),
		status: selectConfidentialities.status(state),
	};
};

export default compose(
	connect(mapStateToProps, { fetchConfidentialities, filterConfidentialities }),
	withStyles(styles),
)(Confidentialities);
