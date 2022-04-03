import { Exp, Order } from '../src/models';

describe('Expression module', () => {
	it('Eval pre expression', () => {
		const auxExp = new Exp(Order.pre, '+*+3457');
		expect(auxExp.eval()).toBe(42);
	});

	it('Eval post expression', () => {
		const auxExp = new Exp(Order.post, '83-844+*+');
		expect(auxExp.eval()).toBe(69);
	});

	it('Mostrar pre expression', () => {
		const auxExp = new Exp(Order.pre, '+*+3457');
		expect(auxExp.mostrar()).toBe('(7 + (5 * (4 + 3)))');
	});

	it('Mostrar post expression', () => {
		const auxExp = new Exp(Order.post, '83-844+*+');
		expect(auxExp.mostrar()).toBe('((8 - 3) + (8 * (4 + 4)))')
	});

	it('Test all operations eval', () => {
		const auxExp = new Exp(Order.post, '83/844-*+');
		expect(auxExp.eval()).toBe(2.6666666666666665)
	});

	it('Test all operations mostrar', () => {
		const auxExp = new Exp(Order.post, '83/844-*+');
		expect(auxExp.mostrar()).toBe('((8 / 3) + (8 * (4 - 4)))')
	});

	it('Error pre expression', () => {
		try {
			new Exp(Order.pre, '8-')
		} catch (err) {
			expect(err).toStrictEqual(new Error('Operación inválida'));
		}
	});

	it('Error post expression', () => {
		try {
			new Exp(Order.post, '8-')
		} catch (err) {
			expect(err).toStrictEqual(new Error('Operación inválida'));
		}
	});
});
