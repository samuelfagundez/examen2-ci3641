import { MenuOptions, Memory } from './models';
import menu from './menu';

const main = () => {
	let opt: MenuOptions;
	const memory = new Memory();
	console.log('Diga su siguiente acción:');
	// Opening a socket for listening and processing
	process.stdin.on('data', (data) => {
		// Data is a buffer which requires casting
		// Also, removing the break line at the end
		opt = data.toString().slice(0, -1) as MenuOptions;
		if (opt === MenuOptions.salir) process.exit();
		menu(opt, memory);
	});
};

main();
