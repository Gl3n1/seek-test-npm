import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
	root: {
		flexGrow: 1,
		position: 'sticky',
		top: '0',
		width: '100%',
		zIndex: 100,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

function ButtonAppBar(props) {
	const { classes, handleEmptyCart } = props;
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' color='inherit' className={classes.grow}>
						Job ads checkout
					</Typography>
					<Button color='inherit' onClick={handleEmptyCart}>
						Empty Cart
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
