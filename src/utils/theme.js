import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
	typography: {
		useNextVariants: true,
	},
	palette: {
		primary: {
			light: '#33877c',
			main: '#00695c',
			dark: '#004940',
		},
		secondary: {
			light: '#873363',
			main: '#69003c',
			dark: '#49002a',
		},
	},
	shape: {
		borderRadius: 8,
	},
});

theme = {
	...theme,
	overrides: {
		MuiButton: {
			label: {
				textTransform: 'initial',
			},
			contained: {
				boxShadow: 'none',
				'&:active': {
					boxShadow: 'none',
				},
			},
		},
		MuiTabs: {
			root: {
				marginLeft: theme.spacing.unit,
			},
			indicator: {
				height: 3,
				borderTopLeftRadius: 3,
				borderTopRightRadius: 3,
				backgroundColor: theme.palette.common.white,
			},
		},
		MuiTab: {
			root: {
				textTransform: 'initial',
				margin: '0 16px',
				minWidth: 0,
				[theme.breakpoints.up('md')]: {
					minWidth: 0,
				},
			},
			labelContainer: {
				padding: 0,
				[theme.breakpoints.up('md')]: {
					padding: 0,
				},
			},
		},
		MuiTooltip: {
			tooltip: {
				borderRadius: 4,
			},
		},
		MuiDivider: {
			root: {
				backgroundColor: '#404854',
			},
		},
		MuiAvatar: {
			root: {
				width: 32,
				height: 32,
			},
		},
	},
	props: {
		MuiTab: {
			disableRipple: true,
		},
	},
	mixins: {
		...theme.mixins,
	},
};

export default theme;
