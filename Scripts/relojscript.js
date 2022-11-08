const relojElement = document.querySelector(".reloj");
const fechaElement = document.querySelector(".fecha");


function formatReloj(date){
    const horas12 = date.getHours() % 12 || 12;
    const minutos = date.getMinutes();
    const segundos = date.getSeconds();
    const esAm = date.getHours() < 12;

    return `${horas12.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")} ${esAm ? "AM" : "PM"}`;

}



function formatFecha(date) {
    const DIAS = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado"
    ];
    const MES = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Deciembre"
    ];
  
    return `${DIAS[date.getDay()]}, ${date.getDate()} ${MES[date.getMonth()]} ${date.getFullYear()}`;
}
  
  setInterval(() => {
    const now = new Date();
    relojElement.textContent = formatReloj(now);
    fechaElement.textContent = formatFecha(now);
  }, 200);
  