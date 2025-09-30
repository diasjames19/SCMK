
import Opcao from 'prompt-sync';
import subMenu from './selcaoPersonagens.js';

//const prompt = require('prompt-sync')();

async function menuInicial() {
    console.log("|==================[*MENU*]==================|");
    console.log("|============================================|");
    console.log("|                                            |");
    console.log("|                                            |");
    console.log("|               Digite [1] - INICIAR         |");
    console.log("|               Digite [2] - SAIR            |");
    console.log("|                                            |");
    console.log("|                                            |");
    console.log("|============================================|");
    console.log("|============================================|");
    console.log("|============================================|");
    
    
    const opcaoDigita = Opcao();
    console.log("\n");
    let menu = opcaoDigita('Digite => ');
    console.log(`Opção: ${menu}`);
   
    switch (menu) {
        case '1':
            subMenu();
            break;
        case '2':
            console.log("Sair");
            break;
         default:
            console.log("Escolha uma oção Valida!\n"); 
            menuInicial();   
            break;
       
    }
    
  
} 
export default  menuInicial();