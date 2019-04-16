import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
	categoryHeader: {
		paddingTop: 16,
		paddingBottom: 16,
	},
	categoryHeaderPrimary: {
		color: theme.palette.common.white,
	},
	item: {
		paddingTop: 15,
		paddingBottom: 15,
		color: 'rgba(255, 255, 255, 0.7)',
		'&.active': {
			color: '#4fc3f7',
		},
	},
	itemCategory: {
		backgroundColor: '#232f3e',
		boxShadow: '0 -1px 0 #404854 inset',
		paddingTop: 16,
		paddingBottom: 16,
	},
	itemActionable: {
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.08)',
		},
	},
	itemPrimary: {
		color: 'inherit',
		fontSize: theme.typography.fontSize,
		'&$textDense': {
			fontSize: theme.typography.fontSize,
		},
	},
	itemIcon: {
		color: 'inherit',
		marginRight: 0,
		'& svg': {
			fontSize: 20,
		},
	},
	textDense: {},
	divider: {},
});

const SidebarMenu = ({ menus, classes }) => {
	return (
		<List disablePadding>
			{menus.map(({ text, children }) => (
				<Fragment key={text}>
					<ListItem className={classes.categoryHeader}>
						<ListItemText classes={{
							primary: classes.categoryHeaderPrimary,
						}}
						>
							{text}
						</ListItemText>
					</ListItem>
					{children.map(({ text: childText, icon, link }) => (
						<ListItem
							button
							dense
							key={childText}
							className={classNames(
								classes.item,
								classes.itemActionable,
							)}
							component={NavLink}
							to={link}
						>
							<ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
							<ListItemText
								classes={{
									primary: classes.itemPrimary,
									textDense: classes.textDense,
								}}
							>
								{childText}
							</ListItemText>
						</ListItem>
					))}
					<Divider className={classes.divider} />
				</Fragment>
			))}
		</List>
	);
};

SidebarMenu.propTypes = {
	classes: PropTypes.object.isRequired,
	menus: PropTypes.array.isRequired,
};

export default compose(
	withStyles(styles)
)(SidebarMenu);
