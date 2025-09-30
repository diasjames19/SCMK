async function corrida()
{
   const pistas = ['RETA','CURVA','CONFRONTO'];
   let bloco = Math.floor(Math.random()*1)+1;
   let resposta = "";
   switch (pistas[bloco]) {
    case 'RETA':
        resposta = "Usa atributo VELOCIDADE";
        break;
    case 'CURVA':
        resposta ="Usa atributo MANOBRABILIDADE";
        break;
    case 'CONFRONTO':
        resposta ="Usa atributo PODER";
        break;
   }
    return resposta;
}
export default corrida();