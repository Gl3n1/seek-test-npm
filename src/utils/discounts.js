const discounts = (cart, userTypeSelected) => {
	// console.log(`userTypeSelected: ${userTypeSelected.title}`);
	//create function that returns selected ad type
	const findAdInCart = adName => {
		return cart.filter(ad => ad.name === adName);
	};

	const totalDiscounts = () => {
		switch (userTypeSelected.title) {
			case 'Unilever':
				//	had trouble with naming conventions, so have decided to limit the scope of the variable
				const Unilever = () => {
					const classicAdsLength = findAdInCart('Classic Ad').length;
					const classicAdsPrice =
						classicAdsLength !== 0 ? findAdInCart('Classic Ad')[0].price : 0;
					return Math.floor(classicAdsLength / 3) * classicAdsPrice;
				};
				return Unilever();
			case 'Apple':
				const apple = () => {
					const standoutAdNewPrice = 299.99;
					const standoutAdsLength = findAdInCart('Standout Ad').length;
					const standoutAdsOldPrice =
						standoutAdsLength !== 0 ? findAdInCart('Standout Ad')[0].price : 0;
					return (standoutAdsOldPrice - standoutAdNewPrice) * standoutAdsLength;
				};
				return apple();
			case 'Nike':
				const nike = () => {
					const premiumAdsNewPrice = 379.99;
					const premiumAdsLength = findAdInCart('Premium Ad').length;
					const premiumAdsPrice =
						premiumAdsLength !== 0 ? findAdInCart('Premium Ad')[0].price : 0;
					return premiumAdsLength >= 4
						? (premiumAdsPrice - premiumAdsNewPrice) * premiumAdsLength
						: 0;
				};
				return nike();
			case 'Ford':
				const ford = () => {
					//handle classic ads discounts
					const classicAdsLength = findAdInCart('Classic Ad').length;
					const claclassicAdsPrice =
						classicAdsLength !== 0 ? findAdInCart('Classic Ad')[0].price : 0;
					const classicAdsPriceToDiscount =
						Math.floor(classicAdsLength / 5) * claclassicAdsPrice;

					//handle standard ads discounts
					const standoutAdNewPrice = 309.99;
					const standoutAdsLength = findAdInCart('Standout Ad').length;
					const standoutAdsOldPrice =
						standoutAdsLength !== 0 ? findAdInCart('Standout Ad')[0].price : 0;
					const standoutAdsPriceToDiscount =
						(standoutAdsOldPrice - standoutAdNewPrice) * standoutAdsLength;

					//handle premium ads discounts
					const premiumAdsNewPrice = 389.99;
					const premiumAdsLength = findAdInCart('Premium Ad').length;
					const premiumAdsPrice =
						premiumAdsLength !== 0 ? findAdInCart('Premium Ad')[0].price : 0;
					const premiumAdsPriceToDiscount =
						premiumAdsLength >= 3
							? (premiumAdsPrice - premiumAdsNewPrice) * premiumAdsLength
							: 0;
					return (
						classicAdsPriceToDiscount +
						standoutAdsPriceToDiscount +
						premiumAdsPriceToDiscount
					);
				};
				return ford();
			default:
				//default user
				return 0;
		}
	};

	const originalTotal = () => {
		const total = cart.reduce((a, b) => {
			return a + parseFloat(b.price);
		}, 0);
		return Math.round(total * 100) / 100;
	};

	const calculateTotal = () => {
		const total = originalTotal() - totalDiscounts();
		return Math.round(total * 100) / 100;
	};

	return {
		originalTotal: originalTotal,
		calculateTotal: calculateTotal,
		totalDiscounts: totalDiscounts,
	};
};

export default discounts;
