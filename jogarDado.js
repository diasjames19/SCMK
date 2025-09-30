async function jogarDado()
{
   const pontuacaoDado = Math.floor(Math.random()*6)+1;
   let rolandoDado = `Você tirou no Dado ${pontuacaoDado}`;
    return rolandoDado;
}
export default  jogarDado();
