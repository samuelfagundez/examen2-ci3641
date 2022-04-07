import { Memory } from '../src/models';

describe('Memory module', () => {
	it('An entire flow of operations', () => {
		const memoria = new Memory();
		expect(memoria.reservar('a', 'aval')).toBe(
			`Se reservó 'a' con valor 'aval'`
		);
		expect(memoria.reservar('b', 'bval')).toBe(
			`Se reservó 'b' con valor 'bval'`
		);
		expect(memoria.imprimir('a')).toBe(`aval`);
		expect(memoria.asignar('c', 'b')).toBe(`Se asignó 'b' a 'c'`);
		expect(memoria.imprimir('c')).toBe(`bval`);
		expect(memoria.imprimir('d')).toBe(
			`ERROR, el nombre 'd' no apunta a un valor válido`
		);
		expect(memoria.liberar('c')).toBe(`Se liberó 'c'`);
		expect(memoria.imprimir('b')).toBe(
			`ERROR, el nombre 'b' no apunta a un valor válido`
		);
		expect(memoria.asignar('b', 'a')).toBe(`Se asignó 'a' a 'b'`);
		expect(memoria.imprimir('b')).toBe(`aval`);
		expect(memoria.imprimir('c')).toBe(
			`ERROR, el nombre 'c' no apunta a un valor válido`
		);
	});
});
