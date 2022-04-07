import { MenuOptions, Memory } from './models';

// This function is in charge of managing the user selected option to display
const menu = (opt: MenuOptions, memory: Memory) => {
	// Lectura de lo que ha provisto el usuario
	const splittedOpt = opt.split(' ');

	switch (splittedOpt[0]) {
		case MenuOptions.reservar:
			// validación de error
			if (splittedOpt.length !== 3) {
				console.log(
					`El formato de ${MenuOptions.reservar} es ${MenuOptions.reservar} <nombre> <valor>`
				);
				break;
			}
			console.log(memory.reservar(splittedOpt[1], splittedOpt[2]));
			break;

		case MenuOptions.asignar:
			// validación de error
			if (splittedOpt.length !== 3) {
				console.log(
					`El formato de ${MenuOptions.asignar} es ${MenuOptions.asignar} <nombre1> <nombre2>`
				);
				break;
			}
			console.log(memory.asignar(splittedOpt[1], splittedOpt[2]));
			break;

		case MenuOptions.liberar:
			// validación de error
			if (splittedOpt.length !== 2) {
				console.log(
					`El formato de ${MenuOptions.liberar} es ${MenuOptions.liberar} <nombre>`
				);
				break;
			}
			console.log(memory.liberar(splittedOpt[1]));
			break;

		case MenuOptions.imprimir:
			// validación de error
			if (splittedOpt.length !== 2) {
				console.log(
					`El formato de ${MenuOptions.imprimir} es ${MenuOptions.imprimir} <nombre>`
				);
				break;
			}
			console.log(memory.imprimir(splittedOpt[1]));
			break;

		default:
			console.log('Error, acción no valida');
			break;
	}
	console.log('Diga su siguiente acción:');
};

export default menu;
