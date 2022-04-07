import { v4 as uuidv4 } from 'uuid';

export class Memory {
	private namespace: Record<string, string>;
	private values: { value: string; key: string | null }[];

	constructor() {
		this.namespace = {};
		this.values = [];
	}

	reservar(nombre: string, valor: string) {
		const key = uuidv4();
		this.namespace = { ...this.namespace, [nombre]: key };
		this.values.push({ value: valor, key });
		return `Se reservó '${nombre}' con valor '${valor}'`;
	}

	asignar(nombre1: string, nombre2: string) {
		this.namespace = {
			...this.namespace,
			[nombre1]: this.namespace[nombre2]
		};
		return `Se asignó '${nombre2}' a '${nombre1}'`;
	}

	liberar(nombre: string) {
		const key = this.namespace[nombre];
		const index = this.values.findIndex((item) => item.key === key);
		if (index && this.values[index]) {
			this.values[index] = { value: this.values[index].value, key: null };
			return `Se liberó '${nombre}'`;
		} else {
			return `No hay nada que liberar en '${nombre}'`;
		}
	}

	imprimir(nombre: string) {
		const value = this.values.find(
			(item) => item.key === this.namespace[nombre]
		);
		return value
			? value.value
			: `ERROR, el nombre '${nombre}' no apunta a un valor válido`;
	}
}
