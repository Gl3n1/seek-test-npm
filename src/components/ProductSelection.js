import React, { Fragment } from 'react';
import Card from './Cards';
import { Row } from '../styles/global';
import ShoppingCart from './ShoppingCart';
import PropTypes from 'prop-types';

class ProductSelection extends React.PureComponent {
	render() {
		const {
			productTypes,
			handleAddToCart,
			cart,
			userTypeSelected,
			handleRemoveCartItem,
		} = this.props;
		const cards = productTypes
			? Object.keys(productTypes).map(key => {
					return (
						<Card
							key={key}
							title={productTypes[key].name}
							price={productTypes[key].price}
							productDescription={productTypes[key].productDescription}
							handleAddToCart={handleAddToCart}
						/>
					);
			  })
			: null;
		return (
			<Fragment>
				<h1>Product Selection</h1>
				<h2>Customer Type: {userTypeSelected.title}</h2>
				<ol>
					{userTypeSelected.description
						? userTypeSelected.description.map((item, index) => (
								<li key={index}>{item}</li>
						  ))
						: null}
				</ol>
				<Row>{cards}</Row>
				<ShoppingCart
					cart={cart}
					userTypeSelected={userTypeSelected}
					handleRemoveCartItem={handleRemoveCartItem}
				/>
			</Fragment>
		);
	}
}

ProductSelection.propTypes = {
	productTypes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			productDescription: PropTypes.string.isRequired,
		}).isRequired,
	),
	handleAddToCart: PropTypes.func.isRequired,
	cart: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
		}).isRequired,
	),
	userTypeSelected: PropTypes.shape({
		description: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired,
	handleRemoveCartItem: PropTypes.func.isRequired,
};

export default ProductSelection;
