import React from 'react';
import Description from '@material-ui/icons/Description';
import Language from '@material-ui/icons/Language';
import Security from '@material-ui/icons/Security';

export const STYLES = {
	SIDEBAR_WIDTH: '256px',
	SIDEBAR_WIDTH_TABLET: '30vw',
	SIDEBAR_WIDTH_MOBILE: '50vw',
	
	APPBAR_HEIGHT: '64px',
	APPBAR_HEIGHT_TABLET: '64px',
	APPBAR_HEIGHT_MOBILE: '56px',
	
	APPBAR_TAB_HEIGHT: '56px',
	APPBAR_TAB_HEIGHT_TABLET: '48px',
};

const DASHBOARD_URL = '/dashboard';

export const MENUS = [
	{
		text: 'Personal Data',
		children: [
			{ text: 'Confidentiality', icon: <Security />, link: `${DASHBOARD_URL}/confidentialities` },
			{ text: 'Doctype', icon: <Description />, link: `${DASHBOARD_URL}/doctypes` },
			{ text: 'Language', icon: <Language />, link: `${DASHBOARD_URL}/languages` }
		],
	}
];
