import React, { Component } from 'react';
import UserSelection from './UserSelection';
import ProductSelection from './ProductSelection';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import AppBar from './AppBar';

import styled from 'styled-components';

class App extends Component {
	state = {
		userTypes: [
			{
				typeName: 'Default User',
				description: ['No privilege'],
			},
			{
				typeName: 'Unilever',
				description: ['Gets a for 3 for 2 deal on Classic Ads'],
			},
			{
				typeName: 'Apple',
				description: [
					'Gets a discount on Standout Ads where the price drops to $299.99 per ad',
				],
			},
			{
				typeName: 'Nike',
				description: [
					'Gets a discount on Premium Ads where 4 or more are purchased. The price drops to $379.99 per ad',
				],
			},
			{
				typeName: 'Ford',
				description: [
					'Gets a 5 for 4 deal on Classic Ads',
					'Gets a discount on Standout Ads where the price drops to $309.99 per ad',
					'Gets a discount on Premium Ads when 3 or more are purchased. The price drops to $389.99 per ad',
				],
			},
		],
		userTypeSelected: {
			title: 'Default User',
			description: ['No privilege'],
		},
		productTypes: [
			{
				id: 'Classic',
				name: 'Classic Ad',
				price: 269.99,
				productDescription: 'Offers the most basic level of advertisement.',
			},
			{
				id: 'Standout',
				name: 'Standout Ad',
				price: 322.99,
				productDescription:
					'Allows advertisers to use a company logo and use a longer presentation text.',
			},
			{
				id: 'Premium',
				name: 'Premium Ad',
				price: 394.99,
				productDescription:
					'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility.',
			},
		],
		cart: [],
		totalCost: 0,
	};

	handleRemoveCartItem = index => {
		const { cart } = this.state;
		this.setState({
			cart: cart.filter(item => item !== cart[index]),
		});
	};

	handleEmptyCart = () => {
		this.setState({
			cart: [],
		});
	};

	handleSelectType = userTypeSelected => {
		this.setState({
			userTypeSelected: userTypeSelected,
		});
	};

	handleAddToCart = newCartItem => {
		this.setState({
			cart: [...this.state.cart, newCartItem],
		});
	};

	render() {
		return (
			<div className='App'>
				<AppBar handleEmptyCart={this.handleEmptyCart} />
				<AppContainer>
					<Router>
						<Switch>
							<Route
								exact
								path='/'
								component={() => (
									<UserSelection
										{...this.state}
										handleSelectType={this.handleSelectType}
									/>
								)}
							/>
							<Route
								path='/product-selection'
								component={() => (
									<ProductSelection
										{...this.state}
										handleAddToCart={this.handleAddToCart}
										handleRemoveCartItem={this.handleRemoveCartItem}
									/>
								)}
							/>
						</Switch>
					</Router>
				</AppContainer>
			</div>
		);
	}
}

const AppContainer = styled.div`
	display: flex;
	flex-direction: column
	align-items: center;
  min-height: 100vh;
  padding: 0 100px;
`;

export default App;
