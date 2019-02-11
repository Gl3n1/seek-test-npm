import React from 'react';
import styled from 'styled-components';
import discounts from '../utils/discounts';
import Button from '@material-ui/core/Button';
import shoppingCartServices from '../services/shoppingCartServices';

class ShoppingCart extends React.PureComponent {
	render() {
		const { cart, userTypeSelected, handleRemoveCartItem } = this.props;
		const shoppingCart = cart.map((item, index) => {
			return (
				<CartItem key={index} onClick={() => handleRemoveCartItem(index)}>
					<p>{item.name}</p>
					<p>${item.price}</p>
				</CartItem>
			);
		});
		// will be using utility function for discount simplicity
		const discountsUtil = discounts(cart, userTypeSelected);
		const originalTotal = discountsUtil.originalTotal();
		const priceAfterDiscount = discountsUtil.calculateTotal();
		const totalDiscounts = discountsUtil.totalDiscounts();
		const totalCost = cart.length !== 0 ? priceAfterDiscount : 0;
		return (
			<React.Fragment>
				<h2>Shopping Cart</h2>
				{cart.length !== 0 ? (
					<p style={{ color: 'red' }}>Click on Cart Item to remove product</p>
				) : null}
				<div>{shoppingCart}</div>
				<h3>{`Total: $${originalTotal}`}</h3>
				<h3>{`Total after discount: $${totalCost}`}</h3>
				<h3>You saved ${totalDiscounts}</h3>
				<Button
					color='primary'
					variant='contained'
					onClick={() =>
						shoppingCartServices(cart, totalCost, userTypeSelected.title)
					}>
					Checkout
				</Button>
			</React.Fragment>
		);
	}
}

const CartItem = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 300px;
	&:hover {
		background-color: red;
		cursor: pointer;
	}
`;

export default ShoppingCart;
