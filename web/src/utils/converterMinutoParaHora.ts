export default function converterMinutoParaHora(minutos: number) {
  let hora = Math.trunc(minutos / 60);
  let minuto = (hora - (minutos / 60)) * 60;

  return hora.toLocaleString('pt-BR', { minimumIntegerDigits: 2 }) + ':' + minuto.toLocaleString('pt-BR', { minimumIntegerDigits: 2 });
}