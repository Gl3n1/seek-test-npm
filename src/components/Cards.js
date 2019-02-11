import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const styles = {
	card: {
		width: 275,
		marginTop: 50,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	li: {
		fontSize: 15,
		marginBottom: 5,
		lineHeight: 1.3,
	},
};

function SimpleCard(props) {
	const {
		classes,
		handleSelectType,
		title,
		history,
		price,
		handleAddToCart,
		description,
		productDescription,
	} = props;
	const card = (
		<Card className={classes.card}>
			<CardContent>
				<Typography variant='h5' component='h2'>
					{title}
				</Typography>
				<Typography component='p'>{price ? `$${price}` : null}</Typography>
				<Typography component='p'>
					{productDescription ? productDescription : null}
				</Typography>
			</CardContent>
			<CardActions>
				{history === '/' ? (
					<Link to='/product-selection'>
						<Button
							variant='contained'
							color='primary'
							className={classes.button}
							onClick={() =>
								handleSelectType({ title: title, description: description })
							}>
							Select
						</Button>
					</Link>
				) : (
					<Button
						variant='contained'
						color='primary'
						onClick={() => handleAddToCart({ name: title, price: price })}>
						Add to Cart
					</Button>
				)}
			</CardActions>
		</Card>
	);
	return (
		<React.Fragment>
			{history === '/' ? (
				<Tooltip
					placement='bottom-start'
					title={
						<ul>
							{props.description.map((i, ind) => (
								<ListItem key={ind} className={classes.li}>
									{i}
								</ListItem>
							))}
						</ul>
					}>
					{card}
				</Tooltip>
			) : (
				<React.Fragment>{card}</React.Fragment>
			)}
		</React.Fragment>
	);
}

SimpleCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

const ListItem = styled.li`
	margin-bottom: 5px;
`;

export default withStyles(styles)(SimpleCard);
