import discounts from './discounts';

//15 objects, 5 of each product

const defaultUser = {
	title: 'Default User',
};

const unileverUser = {
	title: 'Unilever',
};

const appleUser = {
	title: 'Apple',
};

const nikeUser = {
	title: 'Nike',
};

const fordUser = {
	title: 'Ford',
};

const dummyCart = [
	{ name: 'Classic Ad', price: 269.99 },
	{ name: 'Classic Ad', price: 269.99 },
	{ name: 'Classic Ad', price: 269.99 },
	{ name: 'Classic Ad', price: 269.99 },
	{ name: 'Classic Ad', price: 269.99 },
	{ name: 'Standout Ad', price: 322.99 },
	{ name: 'Standout Ad', price: 322.99 },
	{ name: 'Standout Ad', price: 322.99 },
	{ name: 'Standout Ad', price: 322.99 },
	{ name: 'Standout Ad', price: 322.99 },
	{ name: 'Premium Ad', price: 394.99 },
	{ name: 'Premium Ad', price: 394.99 },
	{ name: 'Premium Ad', price: 394.99 },
	{ name: 'Premium Ad', price: 394.99 },
	{ name: 'Premium Ad', price: 394.99 },
];

test('Default user:  calculateTotal = 4939.85, originalTotal = 4939.85, totalDiscounts = 0', () => {
	expect(discounts(dummyCart, defaultUser).calculateTotal()).toBe(4939.85);
	expect(discounts(dummyCart, defaultUser).originalTotal()).toBe(4939.85);
	expect(discounts(dummyCart, defaultUser).totalDiscounts()).toBe(0);
});

test('Unilever user:  calculateTotal = 4669.86, originalTotal = 4939.85, totalDiscounts = 269.99', () => {
	expect(discounts(dummyCart, unileverUser).calculateTotal()).toBe(4669.86);
	expect(discounts(dummyCart, unileverUser).originalTotal()).toBe(4939.85);
	expect(discounts(dummyCart, unileverUser).totalDiscounts()).toBe(269.99);
});

test('Apple user:  calculateTotal = 4824.85, originalTotal = 4939.85, totalDiscounts = 115', () => {
	expect(discounts(dummyCart, appleUser).calculateTotal()).toBe(4824.85);
	expect(discounts(dummyCart, appleUser).originalTotal()).toBe(4939.85);
	expect(discounts(dummyCart, appleUser).totalDiscounts()).toBe(115);
});

test('Nike user:  calculateTotal = 4864.85, originalTotal = 4939.85, totalDiscounts = 75', () => {
	expect(discounts(dummyCart, nikeUser).calculateTotal()).toBe(4864.85);
	expect(discounts(dummyCart, nikeUser).originalTotal()).toBe(4939.85);
	expect(discounts(dummyCart, nikeUser).totalDiscounts()).toBe(75);
});

test('Nike user:  calculateTotal = 4579.86, originalTotal = 4939.85, totalDiscounts = 359.99', () => {
	expect(discounts(dummyCart, fordUser).calculateTotal()).toBe(4579.86);
	expect(discounts(dummyCart, fordUser).originalTotal()).toBe(4939.85);
	expect(discounts(dummyCart, fordUser).totalDiscounts()).toBe(359.99);
});
