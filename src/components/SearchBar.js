import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

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

const SearchBar = ({ handleChangeSearch, inputProps, classes }) => {
	return (
		<Fragment>
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>
				<InputBase
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={inputProps}
					onChange={handleChangeSearch}
				/>
			</div>
		</Fragment>
	);
};

SearchBar.propTypes = {
	classes: PropTypes.object.isRequired,
	handleChangeSearch: PropTypes.func.isRequired,
	inputProps: PropTypes.object,
};

SearchBar.defaultProps = {
	inputProps: {},
};

export default compose(
	withStyles(styles)
)(SearchBar);
