import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://movie-rating-app-69e0c.firebaseio.com',
});

const shoppingCartServices = (cart, totalCost, userType) => {
	if (cart.length === 0) {
		alert('Nothing in Cart!');
	} else {
		return axiosInstance
			.post('/user.json', { cart, totalCost, userType })
			.then(function(response) {
				console.log(response);
				alert('Request Success');
			})
			.catch(function(error) {
				console.log(error);
				alert('Request Failed');
			});
	}
};

export default shoppingCartServices;
