import Opcao from 'prompt-sync';
import corrida from './corrida.js';
const personagens = [
  {
    nome: "Mario",
    atribuicao: {
      velocidade: 4,
      direcao: 3,
      poder: 3,
      pontos: 0
    }
  },
  {
    nome: "Bowser",
    atribuicao: {
      velocidade: 5,
      direcao: 2,
      poder: 5,
      pontos: 0
    }
  },
  {
    nome: "Peach",
    atribuicao: {
      velocidade: 3,
      direcao: 4,
      poder: 2,
      pontos: 0
    }
  },
  {
    nome: "Luigi",
    atribuicao: {
      velocidade: 3,
      direcao: 4,
      poder: 4,
      pontos: 0
    }
  },
  {
    nome: "Yoshi",
    atribuicao: {
      velocidade: 2,
      direcao: 4,
      poder: 3,
      pontos: 0
    }
  },
  {
    nome: "Donkey Kong",
    atribuicao: {
      velocidade: 2,
      direcao: 2,
      poder: 5,
      pontos: 0
    }
  }
];
 let player1 = [], player2 =[];
async function selecaoPersonagem() {  
    console.log(player1.length);
    console.log("|==================[*PERSONAGENS*]===========|");
    console.log("|============================================|");
    console.log("|               Digite [0] - Mario           |");
    console.log("|               Digite [1] - Bowser          |");
    console.log("|               Digite [2] - Peach           |");
    console.log("|               Digite [3] - Luigi           |");
    console.log("|               Digite [4] - Yoshi           |");
    console.log("|               Digite [5] - Donkey Kong     |");
    console.log("|               Digite [6] - Salvar Seleção  |");
    console.log("|============================================|");
    console.log("|============================================|");
    console.log("|============================================|");
    const menu2 = Opcao();
    console.log("\n");
    let subMenu = menu2('Digite => ');
    console.log(`Opção: ${subMenu}`);
    const verificacaoOpcao = parseInt(subMenu, 10);
       
        if(verificacaoOpcao <= 5)
       {
        
        if(player1.length == 0)
            {
              player1.push(pegarNomePersonagens(personagens,[verificacaoOpcao]));
              console.log("Jogador1 Selecionou\n=>",player1);
            }
            else
            {
              player2.push(pegarNomePersonagens(personagens,[verificacaoOpcao]));
              console.log("Jogador2 Selecionou\n=>",player2);
            }
             selecaoPersonagem();
       }
       if(verificacaoOpcao == 6)
       {
         console.log(`Inciando A Corrida${corrida}`);
       }
       if(verificacaoOpcao > 6)
       {
          console.log(`Opção Não Existe, escolha as opção valida no Menu\n${selecaoPersonagem()}`);
          
       }
       return player1,player2;
    
} export default selecaoPersonagem;

 function pegarNomePersonagens(array,[p]){
  return array[p];
}


 