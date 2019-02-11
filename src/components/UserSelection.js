import React, { PureComponent, Fragment } from 'react';
import Card from './Cards';
import { Row } from '../styles/global';
import createBrowserHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';

class UserSelection extends PureComponent {
	render() {
		const history = createBrowserHistory();
		const { userTypes, handleSelectType, userTypeSelected } = this.props;
		const cards = userTypes
			? Object.keys(userTypes).map(key => {
					return (
						<Card
							key={key}
							title={userTypes[key].typeName}
							description={userTypes[key].description}
							handleSelectType={handleSelectType}
							userTypeSelected={userTypeSelected}
							history={history.location.pathname}
						/>
					);
			  })
			: null;
		return (
			<Fragment>
				<h1>User Type Selection</h1>
				<Row>{cards}</Row>
			</Fragment>
		);
	}
}

UserSelection.propTypes = {
	userTypes: PropTypes.arrayOf(
		PropTypes.shape({
			description: PropTypes.array.isRequired,
			typeName: PropTypes.string.isRequired,
		}).isRequired,
	),
	handleSelectType: PropTypes.func.isRequired,
	userTypeSelected: PropTypes.shape({
		description: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired,
};

export default UserSelection;
