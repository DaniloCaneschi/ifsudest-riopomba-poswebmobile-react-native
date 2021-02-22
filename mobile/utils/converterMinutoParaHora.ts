export default function converterMinutoParaHora(minutos: number) {
  let hora = Math.trunc(minutos / 60);
  let minuto = (hora - (minutos / 60)) * 60;

  return ((hora.toString().length < 2) ? '0' + hora.toString() : hora.toString()) + ':' +
         ((minuto.toString().length < 2) ? '0' + minuto.toString() : minuto.toString());
}