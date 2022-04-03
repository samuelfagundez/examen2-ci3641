import { MenuOptions, Exp, Order } from './models';

// This function is in charge of managing the user selected option to display 
const menu = (opt: MenuOptions) => {
  // Lectura de lo que ha provisto el usuario
  const splittedOpt = opt.split(' ');
  const buildExpr = splittedOpt.slice(2).reduce((acc, curr) => acc + curr)   

  switch (splittedOpt[0]) {
    case MenuOptions.evaluar:
      // validación de error
      if (splittedOpt.length < 3 || (splittedOpt[1] !== Order.pre && splittedOpt[1] !== Order.post)) {
        console.log('El formato de EVAL es EVAL <orden> <expr> con orden = PRE o POST');
        break;
      }
      console.log(new Exp(splittedOpt[1] as Order, buildExpr).eval());
      break;
    
    case MenuOptions.mostrar:
      // validación de error
      if (splittedOpt.length < 3 || (splittedOpt[1] !== Order.pre && splittedOpt[1] !== Order.post)) {
        console.log('El formato de MOSTRAR es MOSTRAR <orden> <expr> con <orden> = PRE o POST');
        break;
      }
      console.log(new Exp(splittedOpt[1] as Order, buildExpr).mostrar());
      break;

    default:
      console.log('Error, acción no valida');
      break;
  }
  console.log('Diga su siguiente acción:');
};

export default menu;
